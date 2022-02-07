import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnuncioListComponent } from './components/anuncio-list/anuncio-list.component';
import { AnuncioFormComponent } from './components/anuncio-form/anuncio-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/anuncios',
    pathMatch: 'full'
  },
  {
    path: 'anuncios',
    component: AnuncioListComponent
  },
  {
    path: 'anuncios/add',
    component: AnuncioFormComponent
  },
  {
    path: 'anuncios/edit/:id',
    component: AnuncioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
