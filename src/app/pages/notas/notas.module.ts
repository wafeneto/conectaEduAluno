import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasPageRoutingModule } from './notas-routing.module';

import { NotasPage } from './notas.page';
import { ComponentesModule } from "../../components/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasPageRoutingModule,
    ComponentesModule
],
  declarations: [NotasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotasPageModule {}
