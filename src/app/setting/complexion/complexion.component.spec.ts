import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexionComponent } from './complexion.component';

describe('ComplexionComponent', () => {
  let component: ComplexionComponent;
  let fixture: ComponentFixture<ComplexionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
