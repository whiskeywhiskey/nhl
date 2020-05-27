import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-intermission-page',
  templateUrl: './intermission-page.component.html',
  styleUrls: ['./intermission-page.component.scss']
})
export class IntermissionPageComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit() {
  }

  nextPeriod() {
    this.game.Game.Period++;
  }

}
