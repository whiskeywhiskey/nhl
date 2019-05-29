import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  diff;
  data;
  questionNum = new BehaviorSubject<number>(0);
  period = new BehaviorSubject<number>(1);
  score = new BehaviorSubject<number>(0);
  question1 = new BehaviorSubject<string>('');
  question2 = new BehaviorSubject<string>('');
  question3 = new BehaviorSubject<string>('');
  question4 = new BehaviorSubject<string>('');
  question = new BehaviorSubject<string>('');
  l;
  num;
  correctCounter = 0;
  correct = 0;
  hatTrick = 0;
  time = new BehaviorSubject<number>(15);


  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  apiKeypt2 = '1C9zE-b88roLeDE2kH5rVEWAly--EaT2D_C6fRLFveLY';
  apiURLpt3 = '/od6/public/values?alt=json';
  myInt;

  constructor(private http: HttpClient, private router: Router) {
    this.getURL(this.apiURLpt1 + this.apiKeypt2 + this.apiURLpt3).subscribe(
      x => {
        this.data = x;
        this.l = this.data.feed.entry.length;
        // this.nextQuestion();
        // this.setTimer();
      });
  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  nextQuestion() {
    this.num = Math.floor((Math.random() * this.l) + 1);
    console.log(this.num);
    this.question.next(this.data.feed.entry[this.num].gsx$question.$t);
    this.question1.next(this.data.feed.entry[this.num].gsx$a1.$t);
    this.question2.next(this.data.feed.entry[this.num].gsx$a2.$t);
    this.question3.next(this.data.feed.entry[this.num].gsx$a3.$t);
    this.question4.next(this.data.feed.entry[this.num].gsx$a4.$t);
    this.increasequestionNum();
  }


  checkAnswer(value) {
    if (value === this.data.feed.entry[this.num].gsx$correcta.$t) {
      this.correct++;
      this.correctCounter++;
      this.increaseScore();
    } else {
      this.correctCounter = 0;
    }
    if (this.intermissionCheck() && this.gameOver()) {
      this.nextQuestion();
      this.resetTimer();
    } else {
      this.changePage();
    }
  }

  setTimer() {
    this.myInt = setInterval(() => {
      const tt = this.time.value;
      if (this.time.value !== 0) {
        this.time.next(tt - 1);
      } else {
        this.checkAnswer('');
        this.time.next(15);
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.myInt);
    this.time.next(15);
  }

  resetTimer() {
    this.time.next(15);
  }

  increaseScore() {
    if (this.correctCounter === 3) {
      const s = this.score.value;
      this.score.next(s + 2);
      this.hatTrick++;
      this.correctCounter = 0;
    } else {
      const s = this.score.value;
      this.score.next(s + 1);
    }
  }

  increasePeriod() {
    const p = this.period.value;
    this.period.next(p + 1);
  }

  increasequestionNum() {
    const n = this.questionNum.value;
    this.questionNum.next(n + 1);
  }

  intermissionCheck() {
    return (this.questionNum.value === 9 || this.questionNum.value === 19) ? false : true;
  }

  gameOver() {
    return (this.questionNum.value === 29) ? false : true;
  }

  changePage() {
    this.clearTimer();
    if (this.questionNum.value === 9 || this.questionNum.value === 19) {
      this.router.navigateByUrl('/intermission');
    } else {
      this.router.navigateByUrl('/game-over');
    }
  }

  resetGame() {
    this.clearTimer();
    this.questionNum.next(0);
    this.period.next(1);
    this.score.next(0);
    this.question1.next('');
    this.question2.next('');
    this.question3.next('');
    this.question4.next('');
    this.question.next('');
    this.num = null;
    this.correctCounter = 0;
    this.correct = 0;
    this.hatTrick = 0;
  }

}
