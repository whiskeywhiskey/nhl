import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  data;
  period = new BehaviorSubject<number>(1);
  score = new BehaviorSubject<number>(0);
  question1 = new BehaviorSubject<string>('');
  question2 = new BehaviorSubject<string>('');
  question3 = new BehaviorSubject<string>('');
  question4 = new BehaviorSubject<string>('');
  question = new BehaviorSubject<string>('');
  l;


  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  apiKeypt2 = '1C9zE-b88roLeDE2kH5rVEWAly--EaT2D_C6fRLFveLY';
  apiURLpt3 = '/od6/public/values?alt=json';

  constructor(private http: HttpClient) {
    this.getURL(this.apiURLpt1 + this.apiKeypt2 + this.apiURLpt3).subscribe(
      x => {
        this.data = x;
        this.l = this.data.feed.entry.length;
        this.nextQuestion();
      });
  }

  getURL(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  nextQuestion() {
    const num = Math.floor((Math.random() * this.l) + 1);
    this.question.next(this.data.feed.entry[num].gsx$question.$t);
    this.question1.next(this.data.feed.entry[num].gsx$a1.$t);
    this.question2.next(this.data.feed.entry[num].gsx$a2.$t);
    this.question3.next(this.data.feed.entry[num].gsx$a3.$t);
    this.question4.next(this.data.feed.entry[num].gsx$a4.$t);
  }

}
