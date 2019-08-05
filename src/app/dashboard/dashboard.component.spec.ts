import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesService } from '../heroes.service';
import { heroesServiceStub as heroStub } from '../mock-services/heroes.service.mock'
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let heroesServiceStub: Partial<HeroesService>;
  let heroesService: HeroesService
  let el: Element
 
  beforeEach(async(() => {
    heroesServiceStub = heroStub

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule ],
      providers: [{ provide: HeroesService, useValue: heroesServiceStub }]
    })
    fixture = TestBed.createComponent(DashboardComponent);
    heroesService = TestBed.get(HeroesService);
  }));

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getHeroes oninit', () => {
    fixture.detectChanges();
    el = fixture.nativeElement.querySelectorAll('[data-testid="heroes-dash"]')
    
    expect(el[0].textContent).toContain('Dr Nice');
    expect(el[1].textContent).toContain('Narco');
    expect(el[2].textContent).toContain('Bombasto');
  })
});
