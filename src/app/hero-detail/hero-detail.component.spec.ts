// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule } from '@angular/forms';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ActivatedRoute } from '@angular/router'

// import { ActivatedRouteStub } from '../mock-routes/activated.routes.mock'
// import { HeroDetailComponent } from './hero-detail.component';
// import { Router } from '@angular/router';
// import { Hero } from '../hero';
// import { Route } from '@angular/compiler/src/core';


// describe('HeroDetailComponent', () => {
//   let component: HeroDetailComponent;
//   let fixture: ComponentFixture<HeroDetailComponent>;
//   let page: Page
//   let router: Router
//   let expectedHero: Hero
//   let activatedRoute: ActivatedRouteStub
//   const firstHero = {id: 12, name: "Lala"}

  
  

//   beforeEach(async(() => {
//     expectedHero = firstHero;
//     activatedRoute = new ActivatedRouteStub
//     activatedRoute.testParams({ id: expectedHero.id });
//     createComponent();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HeroDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   function createComponent() {
//     let stub = new ActivatedRouteStub
//     TestBed.configureTestingModule({
//       imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
//       declarations: [HeroDetailComponent],
//       providers: [{provide: ActivatedRoute, useValue: stub.setParamMap({ id: expectedHero.id })}]
//     })
//     fixture = TestBed.createComponent(HeroDetailComponent);
//     component = fixture.componentInstance;
//     page = new Page(fixture);
  
//     // 1st change detection triggers ngOnInit which gets a hero
//     fixture.detectChanges();
//     return fixture.whenStable().then(() => {
//       // 2nd change detection displays the async-fetched hero
//       fixture.detectChanges();
//     });
//   }

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display that hero\'s name', () => {
//     expect(page.nameDisplay.textContent).toBe(expectedHero.name);
//   });
// });

// class Page {
//   // getter properties wait to query the DOM until called.
//   get buttons()     { return this.queryAll<HTMLButtonElement>('button'); }
//   get saveBtn()     { return this.buttons[0]; }
//   get cancelBtn()   { return this.buttons[1]; }
//   get nameDisplay() { return this.query<HTMLElement>('span'); }
//   get nameInput()   { return this.query<HTMLInputElement>('input'); }

//   gotoListSpy: jasmine.Spy;
//   navigateSpy:  jasmine.Spy;
//   fixture: ComponentFixture<HeroDetailComponent>

//   constructor(fixture: ComponentFixture<HeroDetailComponent>) {
//     // get the navigate spy from the injected router spy object
//     const routerSpy = <any> fixture.debugElement.injector.get(Router);
//     this.navigateSpy = routerSpy.navigate;

//     // spy on component's `gotoList()` method
//     const component = fixture.componentInstance;
//     this.gotoListSpy = spyOn(component, 'getHero').and.callThrough();

//     this.fixture = fixture
//   }

//   //// query helpers ////
//   private query<T>(selector: string): T {
//     return this.fixture.nativeElement.querySelector(selector);
//   }

//   private queryAll<T>(selector: string): T[] {
//     return this.fixture.nativeElement.querySelectorAll(selector);
//   }
// }





