import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrequenciaPageRoutingModule } from './frequencia-routing.module';

import { FrequenciaPage } from './frequencia.page';
import { CalendarComponent, NgCalendarModule } from 'ionic2-calendar';
import { ComponentesModule } from 'src/app/components/componentes.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrequenciaPageRoutingModule,
    ComponentesModule,
    NgCalendarModule,
    RoundProgressModule
  ],
  declarations: [FrequenciaPage]
})
export class FrequenciaPageModule {}
