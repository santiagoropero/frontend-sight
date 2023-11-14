import { TestBed } from '@angular/core/testing';

import { AdminPersonasService } from './admin-personas.service';

describe('AdminPersonasService', () => {
  let service: AdminPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
