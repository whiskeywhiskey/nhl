import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answer-btn',
  templateUrl: './answer-btn.component.html',
  styleUrls: ['./answer-btn.component.scss']
})
export class AnswerBtnComponent implements OnInit {
  @Input() text: any;
  constructor() { }

  ngOnInit() {
  }

}
