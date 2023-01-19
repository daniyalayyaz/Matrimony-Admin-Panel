import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinvcesEditComponent } from './provinvces-edit.component';

describe('ProvinvcesEditComponent', () => {
  let component: ProvinvcesEditComponent;
  let fixture: ComponentFixture<ProvinvcesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinvcesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinvcesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
