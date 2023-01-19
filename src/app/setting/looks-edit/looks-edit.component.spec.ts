import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooksEditComponent } from './looks-edit.component';

describe('LooksEditComponent', () => {
  let component: LooksEditComponent;
  let fixture: ComponentFixture<LooksEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooksEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LooksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
