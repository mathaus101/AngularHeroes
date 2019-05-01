import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  //You define private styles either inline in the @Component.styles array or as stylesheet file(s) identified
  // in the @Component.styleUrls array.

  constructor(private heroService: HeroService,
    private messageService: MessageService) {   // Declares a dependency. THe DI container instantiates the object

    // While you could call getHeroes() in the constructor, that's not the best practice.

    // Reserve the constructor for simple initialization such as wiring constructor parameters to properties. 
    // The constructor shouldn't do anything. It certainly shouldn't call a function that makes HTTP requests 
    // to a remote server as a real data service would.
  }   

  ngOnInit() {
    //console.log('init hereos component');
    this.getHereos();
  }

  onSelect(hero: Hero): void {

    //To Do: When you find out how to pass the event args e, set status to running and pause only when it ends
    // That should prevent jitter when clicking between links before the animation ends.

    // $("#thing").hover(function() {
      
    //   this.style.webkitAnimationPlayState = "running";
    
    //   $(this).on('webkitAnimationEnd', function() {
    //     this.style.webkitAnimationPlayState = "paused";
    //   });

    this.messageService.add(`Selected ${hero.name}`);

    this.selectedHero = hero;
    var element = document.querySelector('#angularLogo');
    element.classList.remove('logoSpin');    
   // void element.offsetWidth;
    element.classList.add('logoSpin');

  }

  getHereos(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);  // This code will be run once the array items are available. ie. 
                                                    // 'this.hereos = heroes' is a callback function.


    

  }
    

}
