import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-game-page',
  templateUrl: './select-game-page.component.html',
  styleUrls: ['./select-game-page.component.css']
})
export class SelectGamePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setDifficulty(e) {
    alert(`${e.target.id} + ${e.target.innerText}`);
  }

}
