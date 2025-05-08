import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { FormsModule } from '@angular/forms';
import {  NgCalendarModule } from 'ionic2-calendar';
import { HorarioComponent } from './horario/horario.component';
import { AlunoComponent } from './aluno/aluno.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';



@NgModule({
  declarations: [
    HeaderComponent,
    EventCalendarComponent,
    HorarioComponent,
    AlunoComponent
   
  ],
  exports: [
    HeaderComponent,
    EventCalendarComponent,
    HorarioComponent,
    AlunoComponent
   
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    NgCalendarModule,
    RoundProgressModule
  ]
})
export class ComponentesModule { }