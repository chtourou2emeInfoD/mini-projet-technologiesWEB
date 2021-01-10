import { TestBed } from '@angular/core/testing';

import { FakeformateurService } from './fakeformateur.service';

describe('FakeformateurService', () => {
  let service: FakeformateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeformateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
