import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getAllEpisodes(){
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }

  getCharacterObj(characterUrl : any){
    return this.http.get(characterUrl);
  }

}
