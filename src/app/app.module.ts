import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './_components/_pages/_start/home-page/home-page.component';
import { SelectGamePageComponent } from './_components/_pages/_select/select-game-page/select-game-page.component';
import { GameInformationPageComponent } from './_components/_pages/_instructions/game-information-page/game-information-page.component';
import { GamePageComponent } from './_components/_pages/_gamePlay/game-page/game-page.component';
import { IntermissionPageComponent } from './_components/_pages/_intermission/intermission-page/intermission-page.component';
import { GameOverPageComponent } from './_components/_pages/_gameOver/game-over-page/game-over-page.component';
import { ComputerScoreComponent } from './_components/_pages/_gamePlay/computer-score/computer-score.component';
import { PlayerScoreComponent } from './_components/_pages/_gamePlay/player-score/player-score.component';
import { QuestionComponent } from './_components/_pages/_gamePlay/question/question.component';
import { AnswerBtnComponent } from './_components/_pages/_gamePlay/answer-btn/answer-btn.component';
import { TimerComponent } from './_components/_pages/_gamePlay/timer/timer.component';
import { PeriodComponent } from './_components/_pages/_gamePlay/period/period.component';
import { LevelComponent } from './_components/_pages/_gamePlay/level/level.component';
import { DifficultyComponent } from './_components/_pages/_gamePlay/difficulty/difficulty.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectGamePageComponent,
    GameInformationPageComponent,
    GamePageComponent,
    IntermissionPageComponent,
    GameOverPageComponent,
    ComputerScoreComponent,
    PlayerScoreComponent,
    QuestionComponent,
    AnswerBtnComponent,
    TimerComponent,
    PeriodComponent,
    LevelComponent,
    DifficultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
