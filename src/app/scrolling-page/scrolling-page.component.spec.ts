import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingPageComponent } from './scrolling-page.component';

describe('ScrollingPageComponent', () => {
  let component: ScrollingPageComponent;
  let fixture: ComponentFixture<ScrollingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
