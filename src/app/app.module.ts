import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Http Request
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesListComponent } from './views/movies-list/movies-list.component';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { MovieCardComponent } from './views/movies-list/movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
