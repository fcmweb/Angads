import { Component, OnInit, HostBinding } from '@angular/core';
import { AnunciosService } from '../../services/anuncios.service';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})
export class AnuncioListComponent implements OnInit {

  @HostBinding ('class') classes = 'row';

  anuncios: any = [];

  constructor(private anunciosService: AnunciosService) { }

  ngOnInit(): void {
    this.getAnuncios();
  }

  getAnuncios() {
    this.anunciosService.getAnuncios().subscribe(
      res => {
        this.anuncios = res;
      },
      err => console.log(err)
    );
  }

  deleteAnuncio(id: string) {
    this.anunciosService.deleteAnuncio(id).subscribe(
      res => {
        console.log(res),
        this.getAnuncios();
      },
      err => console.log(err)
    );
  }

 /* editAnuncio(id: string) {}*/

}
