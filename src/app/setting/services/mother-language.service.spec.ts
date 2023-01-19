import { TestBed } from '@angular/core/testing';

import { MotherLanguageService } from './mother-language.service';

describe('MotherLanguageService', () => {
  let service: MotherLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
