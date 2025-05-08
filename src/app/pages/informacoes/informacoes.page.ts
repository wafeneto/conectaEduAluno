import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
  standalone:false
})
export class InformacoesPage {
 
  constructor(private navCtrl: NavController) {}

  sair(){
    this.navCtrl.navigateRoot('login')
  }
}
