import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({         // @Injectable() 'decorator'. This registers HeroService with the DI container (injector)
  providedIn: 'root'  
})
/*
When you provide the service at the root level, Angular creates a single, 
shared instance of HeroService and injects into any class that asks for it.
*/
export class HeroService {
  counter: number = 0;

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // If this is a singleton in DI container then it will
    // increment
    this.counter++;
    this.messageService.add(`HeroService: fetched heroes (count ${this.counter})`);
    return of(HEROES);

  }

  getHero(id: number): Observable<Hero> {
    const h: Hero = HEROES.find(hero => hero.id === id);
    this.messageService.add(`HeroService: fetched hero '${h.name}'`);
    
    return of(h);
  }
}
