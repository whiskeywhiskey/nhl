import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private soundService: SoundService, private gameService: GameService) { }

  ngOnInit() {
    document.addEventListener('mousemove', () => {
      if (this.gameService.Options.Music) {
        this.soundService.addMusic();
      }
    });
  }

}
