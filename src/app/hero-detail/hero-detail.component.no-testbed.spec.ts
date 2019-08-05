import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from '../hero';

import { ActivatedRouteStub } from '../mock-routes/activated.routes.mock'
import { of } from 'rxjs';
/**
 * Testing routed components without testbed seems to be the simpler option.
 * todo: learn the other way just to know how
 */
describe('HeroDetailComponent - no TestBed', () => {
  let activatedRoute: ActivatedRouteStub;
  let comp: HeroDetailComponent;
  let expectedHero: Hero;
  let hds: any;
  let location: any;

  beforeEach((done: any) => {
    expectedHero = { id: 42, name: 'Bubba' };
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.testParams = { id: expectedHero.id };

    location = jasmine.createSpyObj('location', {'back': {}});

    hds = jasmine.createSpyObj('HeroesService',
      {
        'getHero': of(expectedHero),
        'saveHero': of(expectedHero),
        'updateHero': of(expectedHero),
      });

    comp = new HeroDetailComponent(<any>activatedRoute, hds, location);
    comp.ngOnInit();

    // OnInit calls HDS.getHero; wait for it to get the fake hero
    hds.getHero.calls.first().returnValue.subscribe(done);
  });

  it('should expose the hero retrieved from the service', () => {
    expect(comp.hero).toBe(expectedHero);
  });

  it('should save when click save', () => {
    comp.save();
    expect(hds.updateHero.calls.any()).toBe(true, 'HeroesService.save called');
    expect(location.back.calls.any()).toBe(true, 'location.back invoked on save');
  });

  it('should navigate when goback invoked', () => {
    comp.goBack();
    expect(location.back.calls.any()).toBe(true, 'location.back called')
  });

});