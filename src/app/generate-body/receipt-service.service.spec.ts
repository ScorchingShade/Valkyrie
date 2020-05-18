import { TestBed } from '@angular/core/testing';

import { ReceiptServiceService } from './receipt-service.service';

describe('ReceiptServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceiptServiceService = TestBed.get(ReceiptServiceService);
    expect(service).toBeTruthy();
  });
});
