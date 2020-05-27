import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGamePageComponent } from './select-game-page.component';

describe('SelectGamePageComponent', () => {
  let component: SelectGamePageComponent;
  let fixture: ComponentFixture<SelectGamePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectGamePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
