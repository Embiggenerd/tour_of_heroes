import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });

  it('should return 10 heroes by default', () => {
    const length: number = 10
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service.createDb().heroes.length).toEqual(length)
  })

  it('should return next id correctly', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
    ];
    const id: number = 14
    expect(service.genId(heroes)).toEqual(id)
  })
});
