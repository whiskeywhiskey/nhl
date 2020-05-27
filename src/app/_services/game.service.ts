import { Injectable } from '@angular/core';
import { IGameplay } from '../shared/interfaces/i-gameplay';
import { IOptions } from '../shared/interfaces/i-options';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  Game: IGameplay = {
    PlayerName: 'Player',
    Score: 0,
    ComputerScore: 0,
    ScoreStreak: 0,
    Stats: {
      CorrectAnswers: 0,
      IncorrectAnswers: 0,
      HatTricks: 0,
      Penalties: 0
    },
    Period: 1,
    QuestionsGuessed: 0,
    GameOptions: {},
    Time: 0
  };
  Options: IOptions = {
    Music: true,
    Button: true
  };
  questions: any;
  interval: NodeJS.Timeout;

  constructor(private http: HttpClient, private router: Router) {
    this.getData();
  }

  getData() {
    this.http.get('assets/data.json').subscribe(
      res => this.questions = res
    );
  }

  nextQuestion() {
    this.Game.Question = this.questions[Math.floor((Math.random() * this.questions.length - 1) + 1)];
  }

  checkAnswer(value: string) {
    // debugger
    if (value == this.Game.Question.Answer) {
      this.Game.Stats.CorrectAnswers++;
      this.Game.ScoreStreak++;
      if (this.Game.ScoreStreak == 3) {
        this.Game.Score += 2;
        this.Game.ScoreStreak = 0;
      } else {
        this.Game.Score++;
        this.Game.ScoreStreak++;
      }
      //if (this.shortHanded > 0) {
      //  const sh = this.shg.value;
      //  this.shg.next(sh + 1);
      //  this.shortHanded--;
      //}
      //this.soundService.correct.play();
    } else {
      this.Game.Stats.IncorrectAnswers++;
      this.Game.ScoreStreak = 0;
      //this.incorrectAnswer.next(true);
      //this.soundService.wrong.play();
    }
    //console.log(this.Game.Stats);
    this.Game.QuestionsGuessed++;
    if (this.Game.QuestionsGuessed == 10 || this.Game.QuestionsGuessed == 20) {
      clearInterval(this.interval);
      this.router.navigateByUrl('intermission');
    } else if (this.Game.QuestionsGuessed == 30) {
      clearInterval(this.interval);
      this.router.navigateByUrl('game-over');
    } else {
      this.nextQuestion()
    }
    this.Game.Time = this.Game.GameOptions.TimeReset;
    //this.clearTimer();
    //setTimeout(() => {
    //  if (value === this.data[this.num].an) {
    //    this.correct++;
    //    this.correctCounter++;
    //    this.increaseScore();
    //  } else {
    //    this.correctCounter = 0;
    //  }
    //  if (this.computer.value) {
    //    this.computerPlay();
    //  }
    //  this.data.splice(this.num, 1);
    //  this.l = this.data.length;
    //  this.correctAnswer.next(false);
    //  this.incorrectAnswer.next(false);
    //  if (!this.intermissionCheck() && !this.gameOver()) {
    //    this.nextQuestion();
    //    if (this.shortHanded === 0) {
    //      this.origTime = 15;
    //    }
    //    this.setTimer();
    //  } else {
    //    this.changePage();
    //  }
    //}, 300);
  }

  setTimer() {
    this.interval = setInterval(() => {
      if (this.Game.Time !== 0) {
        this.Game.Time--;
      } else {
        this.checkAnswer('');
        this.Game.Time = this.Game.GameOptions.TimeReset;//.time.next(this.origTime);
      }
    }, 1000);
  }













  /* diff;
  data = [];
  origTime: number;
  ppg = new BehaviorSubject<number>(0);
  shg = new BehaviorSubject<number>(0);
  penalties = new BehaviorSubject<number>(0);
  questionNum = new BehaviorSubject<number>(0);
  period = new BehaviorSubject<number>(1);
  score = new BehaviorSubject<number>(0);
  computerScore = new BehaviorSubject<number>(0);
  question1 = new BehaviorSubject<string>('');
  question2 = new BehaviorSubject<string>('');
  question3 = new BehaviorSubject<string>('');
  question4 = new BehaviorSubject<string>('');
  question = new BehaviorSubject<string>('');
  time = new BehaviorSubject<number>(15);
  computer = new BehaviorSubject<boolean>(false);
  incorrectAnswer = new BehaviorSubject<boolean>(false);
  correctAnswer = new BehaviorSubject<boolean>(false);
  penalty = new BehaviorSubject<boolean>(false);
  computerScored = new BehaviorSubject<boolean>(false);
  l;
  num;
  correctCounter = 0;
  correct = 0;
  hatTrick = 0;
  shortHanded = 0;
  ob = {
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    q: '',
    an: ''
  };

  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  apiKeypt2 = '1C9zE-b88roLeDE2kH5rVEWAly--EaT2D_C6fRLFveLY';
  apiURLpt3 = '/od6/public/values?alt=json';
  myInt;

  constructor(private http: HttpClient, private router: Router, private soundService: SoundService) {
    this.getData();
    this.origTime = 15;
  }

  getData() {
    this.data = [];
    this.getURL(this.apiURLpt1 + this.apiKeypt2 + this.apiURLpt3).subscribe(
      x => {
        for (const i of x.feed.entry) {
          this.ob.a1 = i.gsx$a1.$t;
          this.ob.a2 = i.gsx$a2.$t;
          this.ob.a3 = i.gsx$a3.$t;
          this.ob.a4 = i.gsx$a4.$t;
          this.ob.q = i.gsx$question.$t;
          this.ob.an = i.gsx$correcta.$t;
          this.data.push(this.ob);
          this.ob = {
            a1: '',
            a2: '',
            a3: '',
            a4: '',
            q: '',
            an: ''
          };
        }
        this.l = this.data.length;
      });
  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  computerMode() {
    this.computer.next(true);
  }

  nextQuestion() {
    this.clearTimer();
    this.num = Math.floor((Math.random() * this.l - 1) + 1);
    this.question.next(this.data[this.num].q);
    this.question1.next(this.data[this.num].a1);
    this.question2.next(this.data[this.num].a2);
    this.question3.next(this.data[this.num].a3);
    this.question4.next(this.data[this.num].a4);
    this.increasequestionNum();
  }


  checkAnswer(value: string) {
    if (value === this.data[this.num].an) {
      this.correctAnswer.next(true);
      if (this.shortHanded > 0) {
        const sh = this.shg.value;
        this.shg.next(sh + 1);
        this.shortHanded--;
      }
      this.soundService.correct.play();
    } else {
      this.incorrectAnswer.next(true);
      this.soundService.wrong.play();
    }
    this.clearTimer();
    setTimeout(() => {
      if (value === this.data[this.num].an) {
        this.correct++;
        this.correctCounter++;
        this.increaseScore();
      } else {
        this.correctCounter = 0;
      }
      if (this.computer.value) {
        this.computerPlay();
      }
      this.data.splice(this.num, 1);
      this.l = this.data.length;
      this.correctAnswer.next(false);
      this.incorrectAnswer.next(false);
      if (!this.intermissionCheck() && !this.gameOver()) {
        this.nextQuestion();
        if (this.shortHanded === 0) {
          this.origTime = 15;
        }
        this.setTimer();
      } else {
        this.changePage();
      }
    }, 300);

  }

  setTimer() {
    this.myInt = setInterval(() => {
      const tt = this.time.value;
      if (this.time.value !== 0) {
        if (this.time.value <= 6) {
          this.soundService.tick.load();
          this.soundService.tick.play();
        }
        this.time.next(tt - 1);
      } else {
        this.soundService.tick.pause();
        this.assignPenalty();
        this.checkAnswer('');
        this.time.next(this.origTime);
      }
    }, 1000);
  }

  clearTimer() {
    clearInterval(this.myInt);
    this.time.next(this.origTime);
  }

  resetTimer() {
    this.time.next(this.origTime);
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
    return (this.questionNum.value === 10 || this.questionNum.value === 20) ? true : false;
  }

  gameOver() {
    return (this.questionNum.value === 30) ? true : false;
  }

  changePage() {
    this.clearTimer();
    this.soundService.intermission.play();
    if (this.questionNum.value === 10 || this.questionNum.value === 20) {
      this.router.navigateByUrl('/intermission');
    } else {
      this.router.navigateByUrl('/game-over');
    }
  }

  assignPenalty() {
    this.penalty.next(true);
    setTimeout(() => {
      this.penalty.next(false);
    }, 2000);
    this.soundService.penalty.play();
    this.origTime = 12;
    const p = this.penalties.value;
    this.penalties.next(p + 1);
    this.shortHanded++;
  }

  computerPlay() {
    let d: number;
    if (this.diff === 'Easy') {
      d = 6;
    } else if (this.diff === 'Medium') {
      d = 4;
    } else if (this.diff === 'Hard') {
      d = 2;
    }
    const comNum = Math.floor((Math.random() * d) + 1);
    if (comNum === d / 2) {
      const s = this.computerScore.value;
      this.computerScore.next(s + 1);
      this.computerScored.next(true);
      setTimeout(() => {
        this.computerScored.next(false);
      }, 1800);
    }
  }

  resetGame() {
    this.clearTimer();
    this.questionNum.next(0);
    this.period.next(1);
    this.score.next(0);
    this.computerScore.next(0);
    this.ppg.next(0);
    this.shg.next(0);
    this.question1.next('');
    this.question2.next('');
    this.question3.next('');
    this.question4.next('');
    this.question.next('');
    this.computer.next(false);
    this.incorrectAnswer.next(false);
    this.correctAnswer.next(false);
    this.penalty.next(false);
    this.computerScored.next(false);
    this.num = null;
    this.correctCounter = 0;
    this.correct = 0;
    this.hatTrick = 0;
    this.shortHanded = 0;
    this.origTime = 15;
    this.getData();
  } */

}
