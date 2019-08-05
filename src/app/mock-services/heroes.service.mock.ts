import { Observable, of } from 'rxjs';
import { Hero } from '../hero'

export const heroesServiceStub = {
    getHeroes(): Observable<Hero[]> {
      return of([
        { id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' }
      ])
    },

    getHero(id: number): Observable<Hero> {
      return of({ id, name: "Rembrandt" })
    },

    updateHero(hero: Hero): Observable<Hero> {
      return of(hero)
    },

    addHero(hero: Hero): Observable<Hero> {
      return of(hero)
    },

    deleteHero(hero: Hero | number): Observable<Hero> {
      const id = typeof hero == 'number' ? hero : hero.id
      return of({ id, name: "Howie" })
    }
  }