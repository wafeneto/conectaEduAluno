import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesPageRoutingModule } from './informacoes-routing.module';

import { InformacoesPage } from './informacoes.page';
import { ComponentesModule } from "../../components/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesPageRoutingModule,
    ComponentesModule
],
  declarations: [InformacoesPage]
})
export class InformacoesPageModule {}
