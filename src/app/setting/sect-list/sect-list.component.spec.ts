import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectListComponent } from './sect-list.component';

describe('SectListComponent', () => {
  let component: SectListComponent;
  let fixture: ComponentFixture<SectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
