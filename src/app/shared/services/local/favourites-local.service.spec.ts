import { TestBed } from '@angular/core/testing';

import { FavouritesLocalService } from './favourites-local.service';

describe('FavouritesLocalService', () => {
  let service: FavouritesLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritesLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
