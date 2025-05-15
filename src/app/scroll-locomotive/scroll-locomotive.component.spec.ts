import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLocomotiveComponent } from './scroll-locomotive.component';

describe('ScrollLocomotiveComponent', () => {
  let component: ScrollLocomotiveComponent;
  let fixture: ComponentFixture<ScrollLocomotiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollLocomotiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollLocomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
