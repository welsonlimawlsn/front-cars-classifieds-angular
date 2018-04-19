import { TestBed, inject } from '@angular/core/testing';

import { RegisterSellerService } from './register-seller.service';

describe('RegisterSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterSellerService]
    });
  });

  it('should be created', inject([RegisterSellerService], (service: RegisterSellerService) => {
    expect(service).toBeTruthy();
  }));
});
