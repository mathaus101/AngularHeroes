import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  
  //You define private styles either inline in the @Component.styles array or as stylesheet file(s) identified in the @Component.styleUrls array.




  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  //   //superpower: 'Summoning the wind'
  // };

  constructor() { }

  ngOnInit() {



  }

}
