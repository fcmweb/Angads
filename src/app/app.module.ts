import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AnuncioFormComponent } from './components/anuncio-form/anuncio-form.component';
import { AnuncioListComponent } from './components/anuncio-list/anuncio-list.component';

import { AnunciosService } from './services/anuncios.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AnuncioFormComponent,
    AnuncioListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AnunciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
