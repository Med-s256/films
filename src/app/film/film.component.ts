import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  @Input() film!: Film;
  buttonText!: string;
  ngOnInit(): void {
    
    this.buttonText = 'oh snap!';
  }
  onClick(): void {
    if (this.buttonText == 'oh snap!') {
      this.film.snap++;
      this.buttonText = 'snapped!!!';
    } else {
      this.film.snap--;
      this.buttonText = 'oh snap!';
    }
  }
}
