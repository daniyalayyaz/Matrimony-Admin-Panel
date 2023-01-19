import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexionEditComponent } from './complexion-edit.component';

describe('ComplexionEditComponent', () => {
  let component: ComplexionEditComponent;
  let fixture: ComponentFixture<ComplexionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
