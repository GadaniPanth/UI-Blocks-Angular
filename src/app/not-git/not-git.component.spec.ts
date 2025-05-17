import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotGitComponent } from './not-git.component';

describe('NotGitComponent', () => {
  let component: NotGitComponent;
  let fixture: ComponentFixture<NotGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
