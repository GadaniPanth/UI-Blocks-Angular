import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GsapTrialsComponent } from './gsap-trials.component';

describe('GsapTrialsComponent', () => {
  let component: GsapTrialsComponent;
  let fixture: ComponentFixture<GsapTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GsapTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GsapTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
