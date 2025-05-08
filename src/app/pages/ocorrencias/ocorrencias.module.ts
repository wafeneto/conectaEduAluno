import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OcorrenciasPageRoutingModule } from './ocorrencias-routing.module';

import { OcorrenciasPage } from './ocorrencias.page';
import { ComponentesModule } from "../../components/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OcorrenciasPageRoutingModule,
    ComponentesModule
],
  declarations: [OcorrenciasPage]
})
export class OcorrenciasPageModule {}
