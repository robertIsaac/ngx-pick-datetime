import { TestBed } from '@angular/core/testing';

import { NgxPickDatetimeService } from './ngx-pick-datetime.service';

describe('NgxPickDatetimeService', () => {
  let service: NgxPickDatetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPickDatetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
