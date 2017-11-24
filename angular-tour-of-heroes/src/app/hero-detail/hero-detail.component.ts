import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'C:/Users/Kévin/tp_angular2/Bluntzer/angular-tour-of-heroes/src/app/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
