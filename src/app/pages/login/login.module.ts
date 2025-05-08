import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { MaskitoDirective } from '@maskito/angular';
import { ComponentesModule } from "../../components/componentes.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    MaskitoDirective,
    ReactiveFormsModule,
    ComponentesModule
],
  declarations: [LoginPage]
})
export class LoginPageModule {}
