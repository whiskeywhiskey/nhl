import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-select-game-page',
  templateUrl: './select-game-page.component.html',
  styleUrls: ['./select-game-page.component.css']
})
export class SelectGamePageComponent implements OnInit {

  constructor(private myService: GameService) { }

  ngOnInit() {
  }

  setDifficulty(e) {
    this.myService.diff = e.target.innerText;
    alert(`${e.target.id} + ${e.target.innerText}`);
  }

}
