import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientesComponent } from './AdminClientesComponent';

describe('AdminClientesComponent', () => {
  let component: AdminClientesComponent;
  let fixture: ComponentFixture<AdminClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
