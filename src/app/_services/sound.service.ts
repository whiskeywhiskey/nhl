import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  nhl = new Audio();
  penalty = new Audio();
  intermission = new Audio();
  wrong = new Audio();
  correct = new Audio();
  tick = new Audio();
  button = new Audio();
  music = new BehaviorSubject<boolean>(true);
  buttonSound = new BehaviorSubject<boolean>(true);

  constructor() {
    this.nhl.src = './assets/sound/nhl.wav';
    this.penalty.src = './assets/sound/whistle.wav';
    this.intermission.src = './assets/sound/hockeyStop.mp3';
    this.wrong.src = './assets/sound/incorrect.mp3';
    this.correct.src = './assets/sound/correct.wav';
    this.tick.src = './assets/sound/tick.wav';
    this.button.src = './assets/sound/button.wav';
    this.loadAudio();
    this.autoReload();
    this.nhl.play();
  }

  loadAudio() {
    this.nhl.load();
    this.penalty.load();
    this.intermission.load();
    this.wrong.load();
    this.correct.load();
    this.tick.load();
    this.button.load();
  }

  autoReload() {
    this.nhl.addEventListener('ended', () => {
      this.nhl.currentTime = 0;
      this.nhl.play();
    }, false);
    this.penalty.addEventListener('ended', () => {
      this.penalty.currentTime = 0;
      this.penalty.load();
    }, false);
    this.intermission.addEventListener('ended', () => {
      this.intermission.currentTime = 0;
      this.intermission.load();
    }, false);
    this.wrong.addEventListener('ended', () => {
      this.wrong.currentTime = 0;
      this.wrong.load();
    }, false);
    this.correct.addEventListener('ended', () => {
      this.correct.currentTime = 0;
      this.correct.load();
    }, false);
    this.tick.addEventListener('ended', () => {
      this.tick.currentTime = 0;
      this.tick.load();
    }, false);
    this.button.addEventListener('ended', () => {
      this.button.currentTime = 0;
      this.button.load();
    }, false);
  }

  highVolume() {
    this.nhl.volume = 1.0;
  }

  midVolume() {
    this.nhl.volume = 0.7;
  }

  lowVolume() {
    this.nhl.volume = 0.2;
  }

  killMusic() {
    this.nhl.pause();
    this.music.next(false);
  }

  addMusic() {
    this.nhl.play();
    this.music.next(true);
  }

  killButton() {
    this.button.volume = 0;
    this.buttonSound.next(false);
  }

  addButton() {
    this.button.volume = 1;
    this.buttonSound.next(true);
  }
}
