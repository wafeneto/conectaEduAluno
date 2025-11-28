import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { Mentor } from 'src/app/models/Mentor';
import { Estado, LicencaMunicipioSistema } from 'src/app/models/modelo';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-seleciona-municipio',
  templateUrl: './seleciona-municipio.page.html',
  styleUrls: ['./seleciona-municipio.page.scss'],
  standalone: false
})
export class SelecionaMunicipioPage {

  listaEstado: Estado[] = [];
  listaMunicipios: LicencaMunicipioSistema[] = [];

  estado: Estado;
  municipio: LicencaMunicipioSistema;

  constructor(
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private toastService: ToastService,
  ) {
      
  }

  async ionViewWillEnter() {
  
    const licenca = await this.storageService.getValue<LicencaMunicipioSistema>(
      StorageKeysEnums.licenca
    );

    if (licenca) {
      this.navCtrl.navigateRoot(['login']);

      return;
    }

    this.listarEstado();
  }

  async listarEstado() {
    try {
      Mentor.UrlRequest = 'https://treinamento.conectasuas.com.br/assistenciaSocial/';

      await this.loadingService.present();

      const listaEstado: Estado[] = await Mentor.executaVisao("314","");
      this.listaEstado = listaEstado;
    
    } catch (error) {
      this.toastService.showToast({ message: error, cssClass: 'toast-error' });
    } finally {
      this.loadingService.dismiss();
    }
  }

  async listarMunicipios() {
    try {
      await this.loadingService.present();

      const  listaMunicipios: LicencaMunicipioSistema[] = Mentor.executaVisao(
        2890,
        'varEstado=' + this.estado.codigo + '&varSistema=5'
      );

      this.listaMunicipios = listaMunicipios;

    } catch (error) {
      this.toastService.showToast({ message: error, cssClass: 'toast-error' });
    } finally {
      this.loadingService.dismiss();
    }
  }

  async navegaParaLogin() {
    Mentor.UrlRequest = this.municipio.url;

    await this.storageService.setValue(
      StorageKeysEnums.licenca,
      this.municipio
    );

    this.navCtrl.navigateRoot('login');
  }

}
