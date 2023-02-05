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
  thirdFilm!: Film;
  ngOnInit(): void {
    this.firstFilm = new Film(
      'Titanic',
      'romantic film',
      new Date(),
      'https://upload.wikimedia.org/wikipedia/commons/9/9c/Titanic_wreck_bow.jpg',
      5
    );
    this.secondFilm = new Film(
      'Mission impossible',
      'action film',
      new Date(),
      'https://occ-0-114-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqXBbDRJ-bll6rdRKEO0HTmu0cOIJH7m3VeB9yi6eCqKDoxqpnsKopu-_XNgeB2uck7swIkYVKAQtv5Sdw3JJAs5dIpNo0_zosX.jpg?r=93f',
      0,
      "Frensh film"
    );
    this.thirdFilm= new Film(
      "Bakhta",
      "music",
      new Date(),
      'https://i.ytimg.com/vi/O6zEDqvxGXE/maxresdefault.jpg',
      2,
      "Algerian music"
    )
  }
}
