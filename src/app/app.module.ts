import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionsComponent } from './view/options/options.component';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './view/home-page/home-page.component';
import { SelectGamePageComponent } from './view/select-game-page/select-game-page.component';
import { GameInformationPageComponent } from './view/game-information-page/game-information-page.component';
import { GamePageComponent } from './view/game-page/game-page.component';
import { IntermissionPageComponent } from './view/intermission-page/intermission-page.component';
import { GameOverPageComponent } from './view/game-over-page/game-over-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SelectGamePageComponent,
    GameInformationPageComponent,
    GamePageComponent,
    IntermissionPageComponent,
    GameOverPageComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
