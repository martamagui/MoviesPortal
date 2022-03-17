import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesListComponent } from './views/movies-list/movies-list.component';
import { MovieCardComponent } from './views/moviesList/movie-card/movie-card.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
