import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinvcesComponent } from './provinvces.component';

describe('ProvinvcesComponent', () => {
  let component: ProvinvcesComponent;
  let fixture: ComponentFixture<ProvinvcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinvcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinvcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
