import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.css']
})
export class PlayerScoreComponent implements OnInit, OnDestroy {
  mySub: Subscription;
  v: number;

  constructor(private myService: GameService) { }

  ngOnInit() {
    this.mySub = this.myService.score.subscribe(
      x => {
        this.v = x;
      }
    );
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

}
