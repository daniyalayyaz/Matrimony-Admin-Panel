import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexionListComponent } from './complexion-list.component';

describe('ComplexionListComponent', () => {
  let component: ComplexionListComponent;
  let fixture: ComponentFixture<ComplexionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
