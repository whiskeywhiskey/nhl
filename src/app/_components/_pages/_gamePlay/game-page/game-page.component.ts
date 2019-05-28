import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  constructor(private myService: GameService) { }

  ngOnInit() {
  }

}
