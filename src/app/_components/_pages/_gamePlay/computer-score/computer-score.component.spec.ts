import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerScoreComponent } from './computer-score.component';

describe('ComputerScoreComponent', () => {
  let component: ComputerScoreComponent;
  let fixture: ComponentFixture<ComputerScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
