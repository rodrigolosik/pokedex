import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CacheService } from 'src/app/services/cache.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {
  public _poke: Pokemon = new Pokemon('', 0, [], [], 0, 0) ;
  public _localStorageName : string = "pokemons";
  public _queryParam : string = "";
  public nextUrl : string = "";
  public previousUrl : string = "";

  constructor(
    private cache : CacheService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this._queryParam = params["id"];
      this.getPokemon(this._queryParam);
    });

   }

  ngOnInit(): void {
  }

  getPokemon(param: string): void {
    if(this.cache.exists(this._localStorageName)){
      const pokes: Pokemon[] = this.cache.loadStorage(this._localStorageName);
      this._poke = pokes.find((x) => { return x.name == param }) || new Pokemon('', 0, [], [], 0, 0);
      this.getPreviousPokemon(pokes, this._poke);
      this.getNextPokemon(pokes, this._poke);
    }
  }
  getPreviousPokemon(pokeList: Pokemon[], pokemon: any):void {
    const data = pokeList.find((x) => x.id == (pokemon.id - 1));
    if(data != null){
      this.previousUrl = data.name;
    }
    else {
      this.previousUrl = '';
    }
  }

  getNextPokemon(pokeList: Pokemon[], pokemon: Pokemon) {
    const data = pokeList.find((x) => x.id == (pokemon.id + 1));
    if(data != null){
      this.nextUrl = data.name;
    }
    else {
      this.nextUrl = '';
    }
  }
}
