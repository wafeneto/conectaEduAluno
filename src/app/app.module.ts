import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentesModule } from './components/componentes.module';
import { HeaderComponent } from './components/header/header.component';
import { TabsPage } from './tabs/tabs.page';
import { TabsPageModule } from './tabs/tabs.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localePt, 'pt');


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot({
      name: 'conectaEduAluno'
    }),
    ComponentesModule,
    TabsPageModule
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
