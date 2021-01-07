import { TestBed } from '@angular/core/testing';

import { ListofcommandsService } from './listofcommands.service';

describe('ListofcommandsService', () => {
  let service: ListofcommandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListofcommandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
