import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() klass: string;
  @Input() text: string;
  @Input() link: string;
  @Output() btnClick = new EventEmitter<any>();
  constructor(private router: Router, private sound: SoundService) { }

  ngOnInit(): void {
  }

  btnClicked() {
    if (this.link) {
      this.router.navigateByUrl(this.link);
    }
    this.btnClick.emit();
    this.sound.button.play();
  }

}
