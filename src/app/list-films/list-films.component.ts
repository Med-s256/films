import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit{
  films!: Film[]
ngOnInit(): void {
  this.films = [new Film(
    'Titanic',
    'romantic film',
    new Date(),
    'https://upload.wikimedia.org/wikipedia/commons/9/9c/Titanic_wreck_bow.jpg',
    5
  ),
  new Film(
    'Mission impossible',
    'action film',
    new Date(),
    'https://occ-0-114-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqXBbDRJ-bll6rdRKEO0HTmu0cOIJH7m3VeB9yi6eCqKDoxqpnsKopu-_XNgeB2uck7swIkYVKAQtv5Sdw3JJAs5dIpNo0_zosX.jpg?r=93f',
    0,
    "Frensh film"
  ),
  new Film(
    "Bakhta",
    "music",
    new Date(),
    'https://i.ytimg.com/vi/O6zEDqvxGXE/maxresdefault.jpg',
    150,
    "Algerian music"
  ),
  new Film(
    'Titanic',
    'romantic film',
    new Date(),
    'https://upload.wikimedia.org/wikipedia/commons/9/9c/Titanic_wreck_bow.jpg',
    5
  ),
  new Film(
    'Mission impossible',
    'action film',
    new Date(),
    'https://occ-0-114-33.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeqXBbDRJ-bll6rdRKEO0HTmu0cOIJH7m3VeB9yi6eCqKDoxqpnsKopu-_XNgeB2uck7swIkYVKAQtv5Sdw3JJAs5dIpNo0_zosX.jpg?r=93f',
    255,
    "Frensh film"
  )
]
}
}
