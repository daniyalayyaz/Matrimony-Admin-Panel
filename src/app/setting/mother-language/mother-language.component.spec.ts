import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherLanguageComponent } from './mother-language.component';

describe('MotherLanguageComponent', () => {
  let component: MotherLanguageComponent;
  let fixture: ComponentFixture<MotherLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherLanguageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
