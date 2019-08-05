import { Component, OnInit } from '@angular/core';
 
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
 
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit { 
  heroes: Hero[];
 
  constructor(private heroesService: HeroesService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroesService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  getHeroes(): void {
    this.heroesService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h.id !== hero.id);
    this.heroesService.deleteHero(hero).subscribe();
  }
}