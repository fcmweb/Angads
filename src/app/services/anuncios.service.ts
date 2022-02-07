import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anuncio } from '../models/anuncio';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnunciosService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAnuncios() {
    return this.http.get(`${this.API_URI}/anuncios`);
  }

  getAnuncio(id: string) {
    return this.http.get(`${this.API_URI}/anuncios/${id}`);
  }

  deleteAnuncio(id: string) {
    return this.http.delete(`${this.API_URI}/anuncios/${id}`);
  }

  saveAnuncio(anuncio: Anuncio) {
    return this.http.post(`${this.API_URI}/anuncios`, anuncio);
  }

  updateAnuncio(id: string|number, updatedAnuncio: Anuncio): Observable<Anuncio> {
    return this.http.put(`${this.API_URI}/anuncios/${id}`, updatedAnuncio);
  }
}
