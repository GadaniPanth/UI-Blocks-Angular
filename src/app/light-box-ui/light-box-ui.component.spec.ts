import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBoxUiComponent } from './light-box-ui.component';

describe('LightBoxUiComponent', () => {
  let component: LightBoxUiComponent;
  let fixture: ComponentFixture<LightBoxUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightBoxUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBoxUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
