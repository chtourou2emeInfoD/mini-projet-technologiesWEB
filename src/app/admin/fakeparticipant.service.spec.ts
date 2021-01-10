import { TestBed } from '@angular/core/testing';

import { FakeparticipantService } from './fakeparticipant.service';

describe('FakeparticipantService', () => {
  let service: FakeparticipantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeparticipantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
