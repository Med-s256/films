import { Component, OnInit } from '@angular/core';
import { Film } from './models/film.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  firstFilm!: Film;
  secondFilm!: Film;
  ngOnInit(): void {
    this.firstFilm = new Film(
      'Titanic',
      'film romantique',
      new Date(),
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Titanic_wreck_bow.jpg',
      5
    );
    this.secondFilm = new Film(
      'Mission impossible',
      'film action',
      new Date(),
      'https://occ-0-114-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqXBbDRJ-bll6rdRKEO0HTmu0cOIJH7m3VeB9yi6eCqKDoxqpnsKopu-_XNgeB2uck7swIkYVKAQtv5Sdw3JJAs5dIpNo0_zosX.jpg?r=93f',
      0
    );
  }
}
