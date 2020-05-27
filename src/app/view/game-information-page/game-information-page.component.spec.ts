import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInformationPageComponent } from './game-information-page.component';

describe('GameInformationPageComponent', () => {
  let component: GameInformationPageComponent;
  let fixture: ComponentFixture<GameInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
