import { Component, OnInit } from '@angular/core';
import { Hero } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/hero';
//import { HEROES } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/mock-heroes';
import { HeroService } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
	
//	  heroes=HEROES;
	
	//selectedHero: Hero;
	
	heroes: Hero[];
	
	constructor(private heroService: HeroService) { }
	  /**hero: Hero ={
		  id: 1,
		  name : 'windstorm'
	  };*/
	
  ngOnInit() {
	 this.getHeroes();
  }
  
   /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/
	
	getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
/*
  getHeroes(): void {
	this.heroes = this.heroService.getHeroes();
  }*/
  
  
}
