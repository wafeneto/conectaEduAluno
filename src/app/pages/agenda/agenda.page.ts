import { Component, OnInit, viewChild } from '@angular/core';
import { StorageKeysEnums } from 'src/app/enums/StorageKeys.enums';
import { Mentor } from 'src/app/models/Mentor';
import { Aluno, CalendarioEscolar, Turma } from 'src/app/models/modelo';
import { Servico } from 'src/app/models/servico';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

type event = {
  title : string,
  startTime :  Date,
  endTime : Date,
  allDay : boolean,
  description : string
}

type horario = {
  idDisciplina : number,
  disciplina : string,
  sigla : string,
  ordem : number,
  dia : number,
  horaInicio : string,
  horaFim : string,
  turma : string,
  professor : string
}

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone:false
})
export class AgendaPage {
  aluno: Aluno = Servico.aluno;
  turma: Turma;
  aulas: horario[] = [];
  selectedSegment = 'calendario';
  calendario: CalendarioEscolar;
  servico = Servico;
  eventSource: event[];

  constructor(private loadingService: LoadingService,
    private toastService: ToastService,
    private storageService: StorageService
  ) 
    {}

    async ionViewWillEnter() {
    await this.loadingService.present();
    try{
      await this.consultaCalendario();
      await this.consultaHorariosAula();

    } finally {
      this.loadingService.dismiss();
    }
    
  }

  async consultaCalendario(){
    try{
      this.calendario = Servico.calendario;

      const events: event[] = this.calendario.datas
        .filter(data => data.tipo.flagDiaEspecial === 1)
        .map(data => ({
          title : data.tipo.nome.valueOf(),
          startTime :  new Date(data.data.getTime()),
          endTime : new Date(data.data.getTime()),
          allDay : true,
          description : data.descricao.valueOf()
        }));

      this.eventSource = events;
      
  } catch (error) {
    this.toastService.showToast({ message: "Erro na consulta do Calendario" });
  }
    
  }

  async consultaHorariosAula(){
    try{
      this.turma = Servico.turma;
      if(this.turma === null){
        return
      }
      for(let x =0; x<this.turma.horarios.length;x++){
        this.aulas = [
          ...this.aulas,
          {
            idDisciplina : this.turma.horarios[x].disciplina.disciplina.codigo,
            disciplina : this.turma.horarios[x].disciplina.disciplina.nome.valueOf(),
            sigla : this.turma.horarios[x].disciplina.disciplina.sigla.valueOf(),
            ordem : this.turma.horarios[x].horaAula.ordem.valueOf(),
            dia : this.turma.horarios[x].diaSemana.valueOf(),
            horaInicio : this.turma.horarios[x].horaAula.horaInicio.valueOf(),
           horaFim : this.turma.horarios[x].horaAula.horaFim.valueOf(),
           turma : this.turma.nome.valueOf(),
           professor : this.turma.horarios[x].disciplina.professor.nome.valueOf(),
          }
        ]
          
        }
      }catch(error){
      this.toastService.showToast({ message: "Erro na consulta do Horario" });
    }


}
}

