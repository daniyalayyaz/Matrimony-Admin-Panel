import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagelistforassignComponent } from './packagelistforassign.component';

describe('PackagelistforassignComponent', () => {
  let component: PackagelistforassignComponent;
  let fixture: ComponentFixture<PackagelistforassignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagelistforassignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagelistforassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
