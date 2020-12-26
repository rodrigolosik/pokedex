import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
public optionsList: any[] = [];
  constructor() {
    this.addOptions();
  }

  ngOnInit(): void {
  }

  addOptions(): void {
    this.optionsList.push({title : "Pokedéx", class: "uk-card-primary"})
    // this.optionsList.push({title : "Moves", class: "uk-card-danger"})
    // this.optionsList.push({title : "Abilities", class: "uk-card-warning"})
    // this.optionsList.push({title : "Moves", class: "uk-card-secondary"})
  }

}
