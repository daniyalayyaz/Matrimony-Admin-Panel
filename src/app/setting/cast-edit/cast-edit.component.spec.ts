import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastEditComponent } from './cast-edit.component';

describe('CastEditComponent', () => {
  let component: CastEditComponent;
  let fixture: ComponentFixture<CastEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CastEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
