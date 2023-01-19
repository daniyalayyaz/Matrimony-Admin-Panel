import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionEditComponent } from './religion-edit.component';

describe('ReligionEditComponent', () => {
  let component: ReligionEditComponent;
  let fixture: ComponentFixture<ReligionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReligionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
