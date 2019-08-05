import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesService = TestBed.get(MessagesService);
    expect(service).toBeTruthy();
  });

  it('should push message to messages', () => {
    const service: MessagesService = TestBed.get(MessagesService);
    const msg: string = "hello"
    
    service.add(msg)
    expect(service.messages[0]).toEqual(msg)
  })

  it('should clear messages', () => {
    const service: MessagesService = TestBed.get(MessagesService);
    const msg: string = "hello"
    const length: number = 0

    // Add message to clear it later
    service.add(msg)
    expect(service.messages[0]).toEqual(msg)

    service.clear()
    expect(service.messages.length).toEqual(length)
  })
});
