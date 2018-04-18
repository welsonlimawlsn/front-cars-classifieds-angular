import { TestBed, inject } from '@angular/core/testing';

import { LoginSellerService } from './login-seller.service';

describe('LoginSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSellerService]
    });
  });

  it('should be created', inject([LoginSellerService], (service: LoginSellerService) => {
    expect(service).toBeTruthy();
  }));
});
