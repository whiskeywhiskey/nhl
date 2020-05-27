import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './view/options/options.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { SelectGamePageComponent } from './view/select-game-page/select-game-page.component';
import { GameInformationPageComponent } from './view/game-information-page/game-information-page.component';
import { GamePageComponent } from './view/game-page/game-page.component';
import { IntermissionPageComponent } from './view/intermission-page/intermission-page.component';
import { GameOverPageComponent } from './view/game-over-page/game-over-page.component';

const routes: Routes = [
  { path: 'select', component: SelectGamePageComponent },
  { path: 'instructions', component: GameInformationPageComponent },
  { path: 'game-play', component: GamePageComponent },
  { path: 'intermission', component: IntermissionPageComponent },
  { path: 'game-over', component: GameOverPageComponent },
  { path: 'options', component: OptionsComponent },
  { path: '', component: HomePageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
