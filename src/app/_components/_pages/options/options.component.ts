import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    const cc = document.getElementById('checkMaster') as HTMLInputElement;
    const bs = document.getElementById('buttonMaster') as HTMLInputElement;
    if (this.soundService.music.value) {
      cc.checked = true;
    } else {
      cc.checked = false;
    }
    if (this.soundService.buttonSound.value) {
      bs.checked = true;
    } else {
      bs.checked = false;
    }
  }

  btnClicked() {
    this.soundService.button.play();
  }

  s(e) {
    this.soundService.button.play();
    if (e.target.checked) {
      this.soundService.addMusic();
    } else {
      this.soundService.killMusic();
    }
  }

  b(e) {
    this.soundService.button.play();
    if (e.target.checked) {
      this.soundService.addButton();
    } else {
      this.soundService.killButton();
    }
  }

}
