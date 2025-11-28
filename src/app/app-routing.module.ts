import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'seleciona-municipio',
    pathMatch: 'full'
  },
  {
    path: 'seleciona-municipio',
    loadChildren: () => import('./pages/seleciona-municipio/seleciona-municipio.module').then( m => m.SelecionaMunicipioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'frequencia',
    loadChildren: () => import('./pages/frequencia/frequencia.module').then( m => m.FrequenciaPageModule)
  },
  {
    path: 'notas',
    loadChildren: () => import('./pages/notas/notas.module').then( m => m.NotasPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'ocorrencias',
    loadChildren: () => import('./pages/ocorrencias/ocorrencias.module').then( m => m.OcorrenciasPageModule)
  },
  {
    path: 'avaliacao',
    loadChildren: () => import('./pages/avaliacao/avaliacao.module').then( m => m.AvaliacaoPageModule)
  },
  {
    path: 'informacoes',
    loadChildren: () => import('./pages/informacoes/informacoes.module').then( m => m.InformacoesPageModule)
  },
  {
    path: 'notificacoes',
    loadChildren: () => import('./pages/notificacoes/notificacoes.module').then( m => m.NotificacoesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
