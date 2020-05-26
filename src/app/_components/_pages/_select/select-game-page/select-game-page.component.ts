import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-select-game-page',
  templateUrl: './select-game-page.component.html',
  styleUrls: ['./select-game-page.component.scss']
})
export class SelectGamePageComponent implements OnInit {

  constructor(private myService: GameService, private soundService: SoundService) { }

  ngOnInit() {
  }

  setDifficulty(e) {
    this.soundService.button.play();
    this.myService.diff = e.target.innerText;
    if (e.target.id === 'computer') {
      this.computerMode();
    }
  }

  btnClick() {
    this.soundService.button.play();
  }

  computerMode() {
    this.myService.computerMode();
  }

}
