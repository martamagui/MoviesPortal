import { Movie } from './../../shared/interfaces/movie';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/shared/service/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  public movieList: any;
  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getMovieList();
  }
  private getMovieList(): void {
    this.movieService.getTopRated('1').subscribe(
      (data) => {
        this.movieList = data.results;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Succesful request.');
      }
    );
  }
}
