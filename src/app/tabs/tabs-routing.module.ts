import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'frequencia',
        loadChildren: () => import('../pages/frequencia/frequencia.module').then(m => m.FrequenciaPageModule)
      },
      {
        path: 'notas',
        loadChildren: () => import('../pages/notas/notas.module').then(m => m.NotasPageModule)
      },
      {
        path: 'agenda',
        loadChildren: () => import('../pages/agenda/agenda.module').then(m => m.AgendaPageModule)
      },
      {
        path: 'ocorrencias',
        loadChildren: () => import('../pages/ocorrencias/ocorrencias.module').then(m => m.OcorrenciasPageModule)
      },
      {
        path: 'avaliacao',
        loadChildren: () => import('../pages/avaliacao/avaliacao.module').then(m => m.AvaliacaoPageModule)
      },
      {
        path: '',
        redirectTo: 'frequencia',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
