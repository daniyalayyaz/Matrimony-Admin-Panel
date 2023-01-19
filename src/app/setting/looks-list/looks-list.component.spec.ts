import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LooksListComponent } from './looks-list.component';

describe('LooksListComponent', () => {
  let component: LooksListComponent;
  let fixture: ComponentFixture<LooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
