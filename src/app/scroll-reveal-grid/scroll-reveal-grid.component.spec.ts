import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollRevealGridComponent } from './scroll-reveal-grid.component';

describe('ScrollRevealGridComponent', () => {
  let component: ScrollRevealGridComponent;
  let fixture: ComponentFixture<ScrollRevealGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollRevealGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollRevealGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
