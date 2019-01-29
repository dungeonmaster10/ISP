import { TestBed, inject } from '@angular/core/testing';

import { IspService } from './isp.service';

describe('IspService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IspService]
    });
  });

  it('should be created', inject([IspService], (service: IspService) => {
    expect(service).toBeTruthy();
  }));
});
