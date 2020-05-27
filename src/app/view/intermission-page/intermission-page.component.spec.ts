import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermissionPageComponent } from './intermission-page.component';

describe('IntermissionPageComponent', () => {
  let component: IntermissionPageComponent;
  let fixture: ComponentFixture<IntermissionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntermissionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermissionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
