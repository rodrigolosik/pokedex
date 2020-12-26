import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { CacheService } from 'src/app/services/cache.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list-page.component.html',
  styleUrls: ['./pokemon-list-page.component.css']
})
export class PokemonListPageComponent implements OnInit {
  private localStorageName = 'pokemons';
  public pokes : any[] = [];
  public pokemons : Pokemon[] = [];
  public p: number = 1;
  public pokeName: string = '';
  public loaded : boolean = false;

  constructor(private service: DataService, private cache: CacheService) {
  }

  ngOnInit(): void {
    this.getPokes();
  }

  getPokes(): any {
    if(this.cache.exists(this.localStorageName)){
      this.pokes = this.cache.loadStorage(this.localStorageName);
      this.pokes = this.pokes.sort(function(a: Pokemon,b: Pokemon){ return a.id - b.id  });
      this.loaded = true;
    }
    else {
      this.service.getPokes().subscribe((pokes: any) => {
        pokes.results.map((poke: any) => {
          this.service.getPokemon(poke.url).subscribe((d: any) => {
            const poke = new Pokemon (
              d.name,
              d.id,
              [d.sprites.other.dream_world.front_default, d.sprites.other["official-artwork"].front_default],
              d.types.map((t: any) => { return t.type.name }),
              d.height,
              d.weight
            );
            this.pokemons.push(poke);
            this.cache.saveStorage(this.localStorageName, this.pokemons);
          });
          this.pokes = this.pokemons;
        });
      });
    }
  }

  inputChange(name: any): void {
    this.pokeName = name.target.value;
  }
}
