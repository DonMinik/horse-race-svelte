import { writable } from 'svelte/store';
import {Colour} from './deck.model.ts';

const  LANE_LENGTH = 5;

const _progress: GameState = {
  hearts: 0,
  diamonds: 0,
  clubs: 0,
  spades: 0
} 

export function resetState() {
  _progress.hearts = 0;
  _progress.diamonds = 0;
  _progress.clubs = 0;
  _progress.spades = 0;
}

export const progress = writable(_progress);

export function advance(colour: Colour) {
  switch(colour) {
    case Colour.HEARTS:
      _progress.hearts++;
      break;
    case Colour.DIAMONDS:
      _progress.diamonds++;
      break;
    case Colour.CLUBS:
      _progress.clubs++;
      break;
    case Colour.SPADES:
      _progress.spades++;
      break;
  }
  progress.set(_progress);
}

export function relapse(colour: Colour) {
  switch(colour) {
    case Colour.HEARTS:
      _progress.hearts--;
      break;
    case Colour.DIAMONDS:
      _progress.diamonds--;
      break;
    case Colour.CLUBS:
      _progress.clubs--;
      break;
    case Colour.SPADES:
      _progress.spades--;
      break;
  }
  progress.set(_progress);
}

export type GameState = {
  hearts: number,
  diamonds: number,
  clubs: number,
  spades: number
}