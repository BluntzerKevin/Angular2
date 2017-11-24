import { Component, OnInit } from '@angular/core';
import { Hero } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/hero';
import { HEROES } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
	
	  heroes=HEROES;
	
	selectedHero: Hero;
	
	  /**hero: Hero ={
		  id: 1,
		  name : 'windstorm'
	  };*/
	  
	  

  ngOnInit() {
	 
  }
  
  constructor() { }
  
    onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
