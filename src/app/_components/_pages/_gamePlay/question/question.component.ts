import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/_services/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  @Input() text: any;
  sub: Subscription;
  incorrect: boolean;
  sub1: Subscription;
  correct: boolean;
  constructor(private myService: GameService) { }

  ngOnInit() {
    this.sub = this.myService.incorrectAnswer.subscribe(
      x => {
        this.incorrect = x;
      }
    );
    this.sub1 = this.myService.correctAnswer.subscribe(
      x => {
        this.correct = x;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }

}
