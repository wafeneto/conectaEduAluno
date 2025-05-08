import { Component, Input, OnInit } from '@angular/core';


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
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
  standalone: false
})
export class HorarioComponent  implements OnInit {
  @Input({required:true}) aulas!: horario[];
  popoverOpen = false;
  popoverEvent: Event;
  selectedItem: horario;
  corDisciplina: string;
  diasSemana = [1,2,3,4,5,6]
  ordemAulas: number[] = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
   
  }

  getAulasPorDiaEOrdem(dia: number, ordem: number) {
    return this.aulas.filter((aula:horario) => aula.dia === dia && aula.ordem === ordem);
  }

  getIndicieDeCorDependendoDoId(id:number){
    let indice: number = (id % 10);
    return `var(--dis-${indice})`; 
  }
  

  openPopover(ev: Event, item: horario, id: number) {
    this.selectedItem = item;
    this.popoverEvent = ev;
    this.popoverOpen = true;
    this.corDisciplina = this.getIndicieDeCorDependendoDoId(id);
  }

}
