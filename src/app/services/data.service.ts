import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})
export class DataService {

  private url : string = "https://pokeapi.co/api/v2";
  constructor(private http: HttpClient) {
  }

  getPokes() : any {
      return this.http.get(`${this.url}/pokemon?limit=1118`);
  }
  getPokemon(url: string): any {
    return this.http.get(`${url}`);
  }
}
