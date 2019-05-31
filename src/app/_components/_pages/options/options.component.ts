import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    const cc = document.getElementById('checkMaster') as HTMLInputElement;
    if (this.soundService.music.value) {
      cc.checked = true;
    } else {
      cc.checked = false;
    }
  }

  btnClicked() {
    this.soundService.button.play();
  }

  s(e) {
    if (e.target.checked) {
      this.soundService.addMusic();
    } else {
      this.soundService.killMusic();
    }
  }

}
