import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinvcesListComponent } from './provinvces-list.component';

describe('ProvinvcesListComponent', () => {
  let component: ProvinvcesListComponent;
  let fixture: ComponentFixture<ProvinvcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvinvcesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvinvcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
