import { NotFoundComponent } from './views/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './views/movie-detail/movie-detail.component';
import { MoviesListComponent } from './views/movies-list/movies-list.component';

const routes: Routes = [
  {path:'movie-list', component: MoviesListComponent},
  {path:'movie-details', component: MovieDetailComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
