import { Component, OnInit } from '@angular/core';
import { Hero } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
	
	  hero: Hero ={
		  id: 1,
		  name : 'windstorm'
	  };

  ngOnInit() {
	 
  }
  
  constructor() { }
  
}
