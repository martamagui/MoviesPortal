import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private linkAPI:string;
  private authAPI:string;
  private languageAPI:string;

  constructor(private httpClient: HttpClient) { 
    this.linkAPI = 'https://api.themoviedb.org/3/movie/';
    //
    //TODO Place your auth key down bellow
    //
    this.authAPI = 'api_key= YOUR API AUTH';
    this.languageAPI = '&language=en-US';
  }

  public getTopRated(page:string):Observable<any>{
    let completeurl: string = this.linkAPI+'top_rated?'+this.authAPI+this.languageAPI+'&page='+page;
    console.log(completeurl)
    return this.httpClient.get<any>(completeurl)
  }
  public getDetail(id:string):Observable<any>{
    let completeurl: string = this.linkAPI+id+'?'+this.authAPI+this.languageAPI;
    return this.httpClient.get<any>(completeurl)
  }
  public getUpcoming(page:string):Observable<any>{
    let completeurl: string = this.linkAPI+'upcoming?'+this.authAPI+this.languageAPI+'&page='+page;
    return this.httpClient.get<any>(completeurl)
  }
  public getNowPlating(page:string):Observable<any>{
    let completeurl: string = this.linkAPI+'/now_playing?'+this.authAPI+this.languageAPI+'&page='+page;
    return this.httpClient.get<any>(completeurl)
  }
}
