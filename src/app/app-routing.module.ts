import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './_components/_pages/_start/home-page/home-page.component';
import { SelectGamePageComponent } from './_components/_pages/_select/select-game-page/select-game-page.component';
import { GamePageComponent } from './_components/_pages/_gamePlay/game-page/game-page.component';
import { IntermissionPageComponent } from './_components/_pages/_intermission/intermission-page/intermission-page.component';
import { GameOverPageComponent } from './_components/_pages/_gameOver/game-over-page/game-over-page.component';
import { GameInformationPageComponent } from './_components/_pages/_instructions/game-information-page/game-information-page.component';
import { OptionsComponent } from './_components/_pages/options/options.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {
    path: 'select',
    component: SelectGamePageComponent
  },
  {
    path: 'instructions',
    component: GameInformationPageComponent
  },
  {
    path: 'game-play',
    component: GamePageComponent
  },
  {
    path: 'intermission',
    component: IntermissionPageComponent
  },
  {
    path: 'game-over',
    component: GameOverPageComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
