import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildEditComponent } from './build-edit.component';

describe('BuildEditComponent', () => {
  let component: BuildEditComponent;
  let fixture: ComponentFixture<BuildEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
