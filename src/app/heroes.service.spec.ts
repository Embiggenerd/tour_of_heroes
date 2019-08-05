import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HeroesService } from './heroes.service';
import { MessagesService } from './messages.service'

describe('HeroesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroesService,
        MessagesService
      ]
    })
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    const service: HeroesService = TestBed.get(HeroesService);
    expect(service).toBeTruthy();
  });

  it('should get heroes from http call',
    inject([HttpTestingController, HeroesService],
      (httpMock: HttpTestingController, service: HeroesService) => {
        const heroes = [
          { id: 11, name: 'Dr Nice' },
          { id: 12, name: 'Narco' },
          { id: 13, name: 'Bombasto' }
        ]

        service.getHeroes().subscribe(data => {
          expect(data).toEqual(heroes);
        });

        const req = httpMock.expectOne('api/heroes');

        expect(req.request.method).toEqual('GET');

        req.flush([
          { id: 11, name: 'Dr Nice' },
          { id: 12, name: 'Narco' },
          { id: 13, name: 'Bombasto' }
        ]);
      })
  );

  it('should get hero by id',
    inject([HttpTestingController, HeroesService],
      (httpMock: HttpTestingController, service: HeroesService) => {
        const hero = { id: 11, name: 'Dr Nice' }

        service.getHero(11).subscribe(data => {
          expect(data).toEqual(hero);
        });

        const req = httpMock.expectOne('api/heroes/11');

        expect(req.request.method).toEqual('GET');

        req.flush(hero);
      }
    )
  );

  it('should update hero',
    inject([HttpTestingController, HeroesService],
      (httpMock: HttpTestingController, service: HeroesService) => {
        const hero = { id: 12, name: 'Dr Mean' }

        service.updateHero(hero).subscribe(data => {
          expect(data).toEqual(hero)
        })

        const req = httpMock.expectOne('api/heroes');

        expect(req.request.method).toEqual('PUT')

        req.flush(hero);
      }
    )
  )

  it('adds hero',
    inject([HttpTestingController, HeroesService],
      (httpMock: HttpTestingController, service: HeroesService) => {
        const hero = { id: 13, name: 'Dr Sexy' }

        service.addHero(hero).subscribe(data => {
          expect(data).toEqual(hero)
        })

        const req = httpMock.expectOne('api/heroes');

        expect(req.request.method).toEqual('POST')

        req.flush(hero);
      }
    )
  )

  it('deletes hero',
  inject([HttpTestingController, HeroesService],
    (httpMock: HttpTestingController, service: HeroesService) => {
      const hero = { id: 14, name: 'Dr Cancer' }

      service.deleteHero(hero).subscribe(data => {
        expect(data).toEqual(hero)
      })

      const req = httpMock.expectOne('api/heroes/14');

      expect(req.request.method).toEqual('DELETE')

      req.flush(hero);
    }
  ))
});

