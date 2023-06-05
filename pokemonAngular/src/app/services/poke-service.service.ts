import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  pokemon: any[] = [];

  private url: string = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }
  
  getPokemon(){
    return this.http.get(`${this.url}pokemon?limit=150`);
  }
  getMoreDta(name:string){
    return this.http.get(`${this.url}pokemon/${name}`)
  }
}
