import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css']
})
export class PeriodComponent implements OnInit, OnDestroy {

  sub: Subscription;
  p: number;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.sub = this.myService.period.subscribe(
      x => {
        this.p = x;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
