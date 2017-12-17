import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`<h1>{{title}}</h1><h2>Mon héro favori est {{hero}}</h2>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
 // hero= 'windstorm';
}

/**
hero: Hero = {
  id: 1,
  name: 'Windstorm',
};*/
