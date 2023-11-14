import { TestBed } from '@angular/core/testing';

import { AdminProyectosService } from './admin-proyectos.service';

describe('AdminProyectosService', () => {
  let service: AdminProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
