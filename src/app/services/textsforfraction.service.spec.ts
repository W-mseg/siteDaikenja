import { TestBed } from '@angular/core/testing';

import { TextsforfractionService } from './textsforfraction.service';

describe('TextsforfractionService', () => {
  let service: TextsforfractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextsforfractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
