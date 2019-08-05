import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesService } from '../heroes.service';
import { HeroesComponent } from './heroes.component';
import { heroesServiceStub as heroStub } from '../mock-services/heroes.service.mock'

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroesServiceStub: Partial<HeroesService>;
  let comp: HeroesComponent;
  let heroesService: HeroesService
  let el: Element

  beforeEach(async(() => {
    heroesServiceStub = heroStub

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [HeroesComponent],
      providers: [{ provide: HeroesService, useValue: heroesServiceStub }]
    })

    fixture = TestBed.createComponent(HeroesComponent);
    comp = fixture.componentInstance;
    heroesService = TestBed.get(HeroesService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getHeroes oninit', () => {
    el = fixture.nativeElement.querySelector('.heroes');
    const content = el.textContent;

    expect(content).toContain('Narco');
    expect(content).toContain('Bombasto');
    expect(content).toContain('Dr Nice');
  });

  it('should add hero to heroes', () => {
    component.add('steve')
    el = fixture.nativeElement.querySelector('.heroes');
    fixture.detectChanges();
    const content = el.textContent;


    expect(content).toContain('Narco');
    expect(content).toContain('Bombasto');
    expect(content).toContain('Dr Nice')
    expect(content).toContain('steve')

    expect(component.heroes[2].name).toEqual('Bombasto')
    expect(component.heroes[3].name).toEqual('steve')

  })

  it('should delete heroes', ()=> {
    expect(component.heroes.length).toEqual(3)
    component.delete({ id: 12, name: 'Narco' })
    el = fixture.nativeElement.querySelector('.heroes');
    fixture.detectChanges();
    const content = el.textContent;

    expect(content).not.toContain('Narco');
    expect(content).toContain('Bombasto');
    expect(content).toContain('Dr Nice')
    expect(component.heroes.length).toEqual(2)
  })
});




