import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-computer-score',
  templateUrl: './computer-score.component.html',
  styleUrls: ['./computer-score.component.scss']
})
export class ComputerScoreComponent implements OnInit, OnDestroy {
  comScore: number;
  sub: any;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.sub = this.myService.computerScore.subscribe(
      x => {
        this.comScore = x;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
