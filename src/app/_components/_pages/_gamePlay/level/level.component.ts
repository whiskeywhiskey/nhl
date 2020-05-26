import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit, OnDestroy {
  lvl;
  mySub: Subscription;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.mySub = this.myService.questionNum.subscribe(
      x => {
        this.lvl = x;
      }
    );
  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

}
