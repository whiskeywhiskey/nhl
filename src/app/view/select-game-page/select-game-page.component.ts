import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-select-game-page',
  templateUrl: './select-game-page.component.html',
  styleUrls: ['./select-game-page.component.scss']
})
export class SelectGamePageComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit(): void {
  }

  setDifficulty(text: string) {
    switch (text) {
      case 'single':
        this.game.Game.GameOptions = {
          Mode: 'Single Player',
          Difficulty: 'Easy',
          TimeReset: 15,
          PenaltyTime: 0
        };
        this.game.Game.Time = this.game.Game.GameOptions.TimeReset;
        break;
      default:
        this.game.Game.GameOptions = {
          Mode: 'VS Computer',
          Difficulty: 'Easy',
          TimeReset: 15,
          PenaltyTime: 0
        };
        this.game.Game.Time = this.game.Game.GameOptions.TimeReset;
        break;
    }
    console.log(this.game.Game.GameOptions);
  }
}
