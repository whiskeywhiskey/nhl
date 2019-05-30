import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameService } from 'src/app/_services/game.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private myService: GameService) { }
  apiURLpt1 = 'https://spreadsheets.google.com/feeds/list/';
  apiKeypt2 = '1C9zE-b88roLeDE2kH5rVEWAly--EaT2D_C6fRLFveLY';
  apiURLpt3 = '/od6/public/values?alt=json';
  ngOnInit() {
    // this.myService.getURL(this.apiURLpt1 + this.apiKeypt2 + this.apiURLpt3).subscribe(x => console.log(x));
  }

}
