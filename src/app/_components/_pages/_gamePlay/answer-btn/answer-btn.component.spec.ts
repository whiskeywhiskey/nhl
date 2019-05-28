import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerBtnComponent } from './answer-btn.component';

describe('AnswerBtnComponent', () => {
  let component: AnswerBtnComponent;
  let fixture: ComponentFixture<AnswerBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
