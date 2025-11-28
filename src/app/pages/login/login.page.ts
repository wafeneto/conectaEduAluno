import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { Storage } from '@ionic/storage-angular';
import { Mentor } from 'src/app/models/Mentor';
import { Aluno, LicencaMunicipioSistema, ResponsavelAluno, RlcAlunoResponsavel } from 'src/app/models/modelo';
import { Servico } from 'src/app/models/servico';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';


import {
  MaskitoElementPredicate,
  MaskitoOptions,
  maskitoTransform,
} from '@maskito/core';

import { } from '@maskito/core'

type Usuario = {
  login: string,
  senha:string,
}
type SenhaNova = {
  cpf: string,
  senha:string,
  confirmaSenha:string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage {
  usuarioForm : Usuario = {login:"", senha:""};
  senhaNova : SenhaNova = {cpf:"", senha:"", confirmaSenha:""};

  licencaAtual : LicencaMunicipioSistema;
  isModalOpen = false;
  
  readonly cpfMask: MaskitoOptions = {
    mask: [
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ],
  };

  readonly dataNascimentoMask: MaskitoOptions = {
    mask: [
      /\d/,
      /\d/,
      '/',
      /\d/,
      /\d/,
      '/',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ]
  }

  readonly maskPredicate: MaskitoElementPredicate = async (el) =>
    (el as unknown as HTMLIonInputElement).getInputElement();

  constructor(
    private storage : Storage,
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private toastService: ToastService,
  ) {}

  async ionViewWillEnter() {
    await this.recuperaUsuarioLogado();
    await this.recuperaLicenca();
  }

  async recuperaLicenca() {
    try {
      await this.loadingService.present();

      const licenca =
        await this.storageService.getValue<LicencaMunicipioSistema>(
          StorageKeysEnums.licenca
        );

      Mentor.UrlRequest = 'https://treinamento.conectasuas.com.br/assistenciaSocial/';

      const requestParam = `varcodigoLicenca=${licenca.codigo}`;

      const licencaMunicipiosArray: LicencaMunicipioSistema[] =
        Mentor.executaVisao(2632, requestParam);

      this.licencaAtual = new LicencaMunicipioSistema(
        licencaMunicipiosArray[0]
      );

      //Estamos usando o treinamento novo, mas nao mudamos a licenca ainda
      Mentor.UrlRequest = 'http://190.109.113.120:8080/escolar/';

      // Mentor.UrlRequest = licencaAtual.url;

      await this.storageService.setValue(
        StorageKeysEnums.licenca,
        this.licencaAtual
      );
      
    } catch (error) {
      this.toastService.showToast({ message: error as string });
    } finally {
      this.loadingService.dismiss();
    }
  }

  async recuperaUsuarioLogado() {

    const usuarioLogado = await this.storageService.getValue<Aluno>(
      StorageKeysEnums.usuario
    );

    if (!usuarioLogado) {
      return;
    }

    this.usuarioForm.login = usuarioLogado.cpf.valueOf();
    this.usuarioForm.senha = usuarioLogado.senha.valueOf();

  }

  async realizaLogin() {
    try {
      await this.loadingService.present();

      const params = `varcpf=${this.usuarioForm.login}`;
      Mentor.UrlRequest = 'http://190.109.113.120:8080/escolar/';
      const usuarioRetornado:Aluno = Mentor.executaVisao(3318, params);

      if (!usuarioRetornado) {
        this.toastService.showToast({ message: 'Usuário incorreto' });
        return;
      }

      Servico.usuario = usuarioRetornado;

      if(this.checaPrimeiroAcesso()){

        const senhaFormatadaParaData = maskitoTransform(this.usuarioForm.senha, this.dataNascimentoMask);
          
        if(usuarioRetornado.dataNascimento_ === senhaFormatadaParaData){
          this.isModalOpen = true;
        }else{
          this.toastService.showToast({ message: 'Senha incorreta' });
          return;
        }
        return;
      }
      this.validaLogin();

      Servico.frequencia = usuarioRetornado.matriculas[0].registroAulaFrequencias;
      Servico.boletins = usuarioRetornado.matriculas[0].notas;
      Servico.calendario = usuarioRetornado.matriculas[0].turma.calendario;
      Servico.turma = usuarioRetornado.matriculas[0].turma;
     
    } catch (error) {
      this.toastService.showToast({ message: error as string });
    } finally {
      this.loadingService.dismiss();
    }
  }

  alteraMunicipio(){
    this.storageService.cleanItemOnStorage([StorageKeysEnums.licenca]);
    this.navCtrl.navigateRoot('seleciona-municipio')
  }

  private checaPrimeiroAcesso(){
    return Servico.usuario.senha === null;
  }

  private async validaLogin(){
    const usuario = Servico.usuario;
    if(usuario.senha === this.usuarioForm.senha){
        await this.storageService.setValue(
          StorageKeysEnums.usuario,
          usuario
        );
       
        Mentor.UrlRequest = 'http://190.109.113.120:8080/escolar/';
        // Mentor.UrlRequest = this.licencaAtual.url;
          

        const ultimaMensagem = await this.storage.get(
          `ultimaMensagem_${Servico.usuario.codigo}`
        );
    
        const parametro = `codigoAluno=${
        Servico.usuario.codigo
      }&codigoMensagem=${ultimaMensagem?.codigo ? ultimaMensagem?.codigo : -1}`;
    
        const retornoMensagens = Mentor.bind(
          parametro,
          '/jsp/appPais/listaMensagens.jsp',
          'POST'
        );
    
        const mensagens = eval(retornoMensagens + '');
    
        const mensagensLocal = await this.storage.get(
          `mensagens_${Servico.usuario.codigo}`
        );
    
        Servico.temMensagemNova = mensagensLocal?.length
          ? mensagensLocal.some((m) => !m.visualizada)
          : false;
    
        if (mensagens?.length) {
          Servico.temMensagemNova = true;
    
          const mensagensTratadas = mensagens?.map((m) => ({
            ...m,
            visualizada: 0,
          }));
          await this.salvaMensagemRecebida(mensagensTratadas, this.storage);
        }
         
          if(Servico.usuario.matriculas . length>1){
            this.navCtrl.navigateRoot("seleciona-aluno");
          }else{
            Servico.aluno = Servico.usuario;
            this.navCtrl.navigateRoot("tabs");
          }
        

        
    }else{
      this.toastService.showToast({ message: 'Senha incorreta' });
      return;
    }
  }

  criaSenha(){
    if(Servico.usuario.cpf !== this.senhaNova.cpf){
      this.toastService.showToast({ message: 'CPF Incorreto' });
      return
    }
    if(this.senhaNova.senha !== this.senhaNova.confirmaSenha){
      this.toastService.showToast({ message: 'As senhas tem que ser iguais' });
      return
    }
    const aluno: Aluno = new Aluno(null);
    aluno.senha = this.senhaNova.senha;
    aluno.codigo = Servico.usuario.codigo;

    const envio = Mentor.rodaTransacaoFromObjeto(1920, 'objAluno', aluno, true);
    
    if(envio){

      if(Servico.usuario.matriculas.length<0){
        this.isModalOpen = false;
        this.toastService.showToast({ message:"O aluno nao tem matriculas ativas" })
        
      }else{
        Servico.aluno = Servico.usuario;
        this.navCtrl.navigateRoot("tabs");
      }
      
    }else{
    this.toastService.showToast({ message: 'Algo deu errado, tente novamente' });
    return
    }
  }

  async salvaMensagemRecebida(mensagens: Array<any>, storage: Storage) {
    if (!mensagens?.length) return;

    const ultimaMensagem = mensagens.reduce(
      (prev, current) =>
        prev && prev.codigo > current.codigo ? prev : current,
      {}
    );

    await storage.set(
      `ultimaMensagem_${Servico.usuario.codigo}`,
      ultimaMensagem
    );
    await storage.set(`mensagens_${Servico.usuario.codigo}`, mensagens);
  }
}
