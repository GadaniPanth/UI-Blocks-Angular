import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollEleComponent } from './scroll-ele.component';

describe('ScrollEleComponent', () => {
  let component: ScrollEleComponent;
  let fixture: ComponentFixture<ScrollEleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollEleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollEleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
