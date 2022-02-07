import { Component, OnInit, HostBinding } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio';
import { ActivatedRoute, Router } from '@angular/router';

import { AnunciosService } from '../../services/anuncios.service';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  anuncio: Anuncio = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()

  };

  edit = false;

  constructor(private anunciosService: AnunciosService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;

    if (params.id) {
      this.anunciosService.getAnuncio(params.id).subscribe(
        res => {
          /*console.log(res);*/
          this.anuncio = res; /* <= error de objeto*/
          console.log(this.anuncio);
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewAnuncio() {
    delete this.anuncio.id;
    delete this.anuncio.created_at;

    this.anunciosService.saveAnuncio(this.anuncio).subscribe(
      res => {
        console.log('Ad Save');
        this.router.navigate(['/anuncios']);
      },
        err => console.log(err)
    );
  }

  updateAnuncio() {
    delete this.anuncio.created_at;
    this.anunciosService.updateAnuncio(this.anuncio.id, this.anuncio).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/anuncios']);
      },
      err => console.log(err)
    );
  }

}
