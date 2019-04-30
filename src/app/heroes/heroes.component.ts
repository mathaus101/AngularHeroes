import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  //You define private styles either inline in the @Component.styles array or as stylesheet file(s) identified in the @Component.styleUrls array.

  constructor(private heroService: HeroService) {   // Declares a dependency 

  }   

  ngOnInit() {
    this.getHereos();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHereos(): void {
    this.heroes = this.heroService.getHeroes();

  }
    

}
