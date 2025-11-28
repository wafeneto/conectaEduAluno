import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { Mentor } from 'src/app/models/Mentor';
import { Aluno, AlunoNotasCaderneta, AlunosMatriculas, CadernetaEscolar } from 'src/app/models/modelo';
import { Servico } from 'src/app/models/servico';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  standalone: false,
  styleUrls: ['./notas.page.scss'],

})
export class NotasPage {

  aluno: Aluno = Servico.aluno;
  servico = Servico;
  listaBoletins: AlunoNotasCaderneta[];

  constructor(
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}


  async ionViewWillEnter(){
    await this.consultaNotas();
   
  }
  
  async consultaNotas(){
    try{
      await this.loadingService.present();
      this.listaBoletins = Servico.boletins;

    }catch(error){
      this.toastService.showToast({ message: error as string });
    }finally{
      this.loadingService.dismiss();
    }
    
  
  }


  getIndicieDeCorDependendoDoId(id:number){
    let indice: number = (id % 10);
    return `var(--dis-${indice})`; 
  }

  getColorStatus(status: number): string {
    if (status === 3 || status === 6) {
      return 'warning';
    } else if (status === 1 || status === 5) {
      return 'primary';
    } else if(status === 5 || status === 6 ){
      return 'danger';
    } else {
      return 'medium';
    }
  }
}
