import { Component, ViewChild } from '@angular/core';
import { AlertController, IonModal, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
//import { Controlador } from 'src/app/models/Controlador';
import { Mentor } from '../../models/Mentor';
import { Servico } from 'src/app/models/servico';
import { differenceInCalendarDays,parse } from 'date-fns';


@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
  standalone: false
})
export class NotificacoesPage {
  mensagens = new Array();
  mensagemAtual: any;

  constructor(
    private storage: Storage,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
  ) {}

  @ViewChild(IonModal) modal: IonModal;

  ionViewWillLeave() {
    Servico.temMensagemNova = this.mensagens.some((m) => !m.visualizada);
  }

  async loading(mensagemCustomizada = 'Carregando notificações') {
    const loading = await this.loadingCtrl.create({
      message: mensagemCustomizada,
    });

    await loading.present();
  }

  async ionViewDidEnter() {
    try {
      await this.loading();

      const ultimaMensagem = await this.storage.get(
        `ultimaMensagem_${Servico.usuario.codigo}`
      );

      const mensagensLocal = await this.storage.get(
        `mensagens_${Servico.usuario.codigo}`
      );

      const parametro = `codigoAluno=${
        Servico.usuario.codigo
      }&codigoMensagem=${
        ultimaMensagem?.codigo ? ultimaMensagem?.codigo : -1
      }`;

      const retornoMensagens = Mentor.bind(
        parametro,
        '/jsp/appPais/listaMensagens.jsp',
        'POST'
      );
      const retornoMensagensTratadas = eval(retornoMensagens + '');

      Servico.temMensagemNova = retornoMensagensTratadas?.length;

      const mensagensTratadas = retornoMensagensTratadas?.length
        ? retornoMensagensTratadas?.map((m) => ({ ...m, visualizada: 0 }))
        : [];

      this.mensagens = [...(mensagensLocal || []), ...mensagensTratadas].sort(
        (a, b) => b.codigo - a.codigo
      );

      await this.salvaMensagemRecebida(this.mensagens, this.storage);

      for (let x = 0; x < this.mensagens?.length; x++) {
        if (this.mensagens[x].visualizada) {
          this.mensagens[x].icone = 'mail-open';
        } else {
          this.mensagens[x].icone = 'mail';
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.loadingCtrl.dismiss();
    }
  }

  async abreDetalhesDaMensagem(mensagem, indexMensagem) {
    this.mensagemAtual = mensagem;
    this.mensagens[indexMensagem].visualizada = 1;
    this.mensagens[indexMensagem].icone = 'mail-open';

    await this.storage.set(
      `mensagens_${Servico.usuario.codigo}`,
      this.mensagens
    );

    this.modal.present();
  }

  fechaModal() {
    this.modal.dismiss();
  }

  async apagaMensagem(mensagem) {
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      message: 'Gostaria de excluir essa mensagem?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: async () => {
            const mensagensFiltradas = this.mensagens.filter(
              (m) => m.codigo !== mensagem.codigo
            );

            this.mensagens = mensagensFiltradas;

            await this.storage.set(
              `mensagens_${Servico.usuario.codigo}`,
              mensagensFiltradas
            );
          },
        },
      ],
    });

    await alert.present();
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

  formataData(dataString:string){
    const data = parse(dataString, 'dd/MM/yyyy HH:mm', new Date());
    const hoje: Date = new Date();
    const diferenca : number = differenceInCalendarDays(hoje,data);

    if(diferenca === 0)
      {
        const horas = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        return `${horas}:${minutos}`;
      }
      else
      {
        return `${diferenca}d`;
      }
    
    
  } 
}
