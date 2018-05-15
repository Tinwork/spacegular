import { TestBed, inject } from '@angular/core/testing';

import { SpaceXAPIService } from './space-xapi.service';

describe('SpaceXAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceXAPIService]
    });
  });

  it('should be created', inject([SpaceXAPIService], (service: SpaceXAPIService) => {
    expect(service).toBeTruthy();
  }));
});
