import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({         // @Injectable() 'decorator'. This registers HeroService with the DI container (injector)
  providedIn: 'root'  
})
/*
When you provide the service at the root level, Angular creates a single, 
shared instance of HeroService and injects into any class that asks for it.
*/
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {

    //console.log(HEROES);
    return of(HEROES);

  }
}
