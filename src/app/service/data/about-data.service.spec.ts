import { TestBed } from '@angular/core/testing';

import { AboutDataService } from './about-data.service';

describe('AboutDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutDataService = TestBed.get(AboutDataService);
    expect(service).toBeTruthy();
  });
});
