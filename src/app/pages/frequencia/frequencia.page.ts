import { RegistroAula } from './../../models/modelo';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ComponentesModule } from "../../components/componentes.module";

import { Mentor } from 'src/app/models/Mentor';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { CalendarioEscolar, Aluno } from 'src/app/models/modelo';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { CalendarComponent, CalendarMode } from 'ionic2-calendar';
import { Servico } from 'src/app/models/servico';

type event = {
  title : string,
  startTime :  Date,
  endTime : Date,
  allDay : boolean,
  description : string,
  chamada: boolean
  
}

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
  standalone: false
})
export class FrequenciaPage {
  aluno: Aluno = Servico.aluno;
  calendario: CalendarioEscolar;
  eventSource: event[] = [];
  @ViewChild(CalendarComponent) myCal!: CalendarComponent;
  frequencia = { presencas : 0,faltas : 0 }
  month='';
  sliderOptions = {
    loop: false,
    preventInteractionOnTransition: true,
    observer: true,
    observeParents: true,
    on: {
      slideChangeTransitionEnd: () => {
        this.myCal.loadEvents();
        this.cdr.detectChanges();
      }
    }
  };
  currentDate: Date = new Date();
  calendar = {
    mode: 'month' as CalendarMode,
    formatDayHeader: "E"
  }
  servico = Servico;
  
  constructor(private loadingService: LoadingService,
    private toastService: ToastService,
    private storageService: StorageService,
    private cdr: ChangeDetectorRef) 
    {}

  async ionViewWillEnter() {
    await this.consultaFrequencia();
  }

  async consultaFrequencia(){
    try{
     
      await this.loadingService.present();
      // const params = `varcodigo=${this.aluno.matriculas[0].codigo}`;

      const registros = Servico.frequencia;

      const events: event[] = registros
        .map(registro => ({
          title : registro.registroAula.disciplina.disciplina.nome.valueOf(),
          startTime :  new Date(registro.registroAula.dataRegistro.getTime()),
          endTime : new Date(registro.registroAula.dataRegistro.getTime()),
          allDay : true,
          description : registro.flagFrequencia === 1 ? "Presente" : "Falta",
          chamada: registro.flagFrequencia === 1
          
        })
      );

      this.eventSource = events;

  } catch (error) {
    this.toastService.showToast({ message: error as string });
  } finally {
    this.loadingService.dismiss();
    
  }
    
  }

  previousMonth(){
    this.myCal.slidePrev();
  }
  
  nextMonth(){
    this.myCal.slideNext();
  }
  
  onCurrentDateChanged(event: Date) {
    this.currentDate = event;
  }
  
  onTitleChange(event:string){
    // this.myCal.loadEvents();
    this.month = event;
    // this.cdr.detectChanges();
   
  }

  get presencas(){
    let contagemPresenca = 0;
   
    this.eventSource.forEach( item =>{
      if(item.chamada){
        contagemPresenca++;
      }
    });

    return contagemPresenca;
  }

  get faltas(){
    let contagemFalta = 0;
    this.eventSource.forEach( item =>{
      if(!item.chamada){
        contagemFalta++;
      }
    });
    return contagemFalta;
  }
    
  get porcentagemFrequencia(){
    return this.presencas*100/this.eventSource.length;
  }

}
