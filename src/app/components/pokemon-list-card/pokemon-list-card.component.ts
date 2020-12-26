import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list-card',
  templateUrl: './pokemon-list-card.component.html',
  styleUrls: ['./pokemon-list-card.component.css']
})
export class PokemonListCardComponent implements OnInit {

  @Input() poke: Pokemon = new Pokemon('', 0, [], [], 0, 0);
  @Input() loaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
