import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectEditComponent } from './sect-edit.component';

describe('SectEditComponent', () => {
  let component: SectEditComponent;
  let fixture: ComponentFixture<SectEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
