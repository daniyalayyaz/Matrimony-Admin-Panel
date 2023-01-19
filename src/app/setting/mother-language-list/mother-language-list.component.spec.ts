import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherLanguageListComponent } from './mother-language-list.component';

describe('MotherLanguageListComponent', () => {
  let component: MotherLanguageListComponent;
  let fixture: ComponentFixture<MotherLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherLanguageListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
