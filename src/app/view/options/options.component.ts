import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/_services/sound.service';
import { GameService } from 'src/app/_services/game.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  options: FormGroup;

  constructor(private game: GameService, private fb: FormBuilder, private soundService: SoundService) { }

  ngOnInit() {
    this.options = this.fb.group({
      music: this.game.Options.Music,
      button: this.game.Options.Button
    });
  }
  
  change(type: number) {
    this.game.Options[type] = !this.game.Options[type];
    this.options.value.music == false ? this.soundService.killMusic() : this.soundService.addMusic();
    this.options.value.button == false ? this.soundService.killButton() : this.soundService.addButton();
  }
}
