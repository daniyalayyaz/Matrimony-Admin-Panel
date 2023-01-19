import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherLanguageEditComponent } from './mother-language-edit.component';

describe('MotherLanguageEditComponent', () => {
  let component: MotherLanguageEditComponent;
  let fixture: ComponentFixture<MotherLanguageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherLanguageEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherLanguageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
