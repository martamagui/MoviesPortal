import { MovieListResult } from './../../../shared/interfaces/movie-list-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input()
  public movie!: MovieListResult;
  //Picture urls https://www.themoviedb.org/t/p/w600_and_h900_bestv2/PIC_LINK FROM API REQUEST
  constructor() { }

  ngOnInit(): void {
  }

}
