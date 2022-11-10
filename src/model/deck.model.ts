import {writable} from 'svelte/store';

export const deckState = writable('pristine');
export type CardModel = {
  colour: Colour;
  value: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Q' | 'K' | 'A';
}

export enum Colour {
  NONE,
  HEARTS,
  DIAMONDS,
  CLUBS,
  SPADES
} 

export class DeckModel {

  private deck: CardModel[];
  constructor() {
    this.shuffle();
  }

  shuffle() {
    let deck = this.freshDeck();
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    this.deck = deck;
    deckState.set('pristine')
  }

  pick(): CardModel {
    deckState.set('dirty')
    return this.deck.pop();
  }

  private freshDeck(): CardModel[] {
    return [
      { colour : Colour.HEARTS, value: '2'},
      { colour : Colour.HEARTS, value: '3'},
      { colour : Colour.HEARTS, value: '4'},
      { colour : Colour.HEARTS, value: '5'},
      { colour : Colour.HEARTS, value: '6'},
      { colour : Colour.HEARTS, value: '7'},
      { colour : Colour.HEARTS, value: '8'},
      { colour : Colour.HEARTS, value: '9'},
      { colour : Colour.HEARTS, value: '10'},
      { colour : Colour.HEARTS, value: 'Q'},
      { colour : Colour.HEARTS, value: 'K'},
      { colour : Colour.HEARTS, value: 'A'},

      { colour : Colour.DIAMONDS, value: '2'},
      { colour : Colour.DIAMONDS, value: '3'},
      { colour : Colour.DIAMONDS, value: '4'},
      { colour : Colour.DIAMONDS, value: '5'},
      { colour : Colour.DIAMONDS, value: '6'},
      { colour : Colour.DIAMONDS, value: '7'},
      { colour : Colour.DIAMONDS, value: '8'},
      { colour : Colour.DIAMONDS, value: '9'},
      { colour : Colour.DIAMONDS, value: '10'},
      { colour : Colour.DIAMONDS, value: 'Q'},
      { colour : Colour.DIAMONDS, value: 'K'},
      { colour : Colour.DIAMONDS, value: 'A'},

      { colour : Colour.CLUBS, value: '2'},
      { colour : Colour.CLUBS, value: '3'},
      { colour : Colour.CLUBS, value: '4'},
      { colour : Colour.CLUBS, value: '5'},
      { colour : Colour.CLUBS, value: '6'},
      { colour : Colour.CLUBS, value: '7'},
      { colour : Colour.CLUBS, value: '8'},
      { colour : Colour.CLUBS, value: '9'},
      { colour : Colour.CLUBS, value: '10'},
      { colour : Colour.CLUBS, value: 'Q'},
      { colour : Colour.CLUBS, value: 'K'},
      { colour : Colour.CLUBS, value: 'A'},

      { colour : Colour.SPADES, value: '2'},
      { colour : Colour.SPADES, value: '3'},
      { colour : Colour.SPADES, value: '4'},
      { colour : Colour.SPADES, value: '5'},
      { colour : Colour.SPADES, value: '6'},
      { colour : Colour.SPADES, value: '7'},
      { colour : Colour.SPADES, value: '8'},
      { colour : Colour.SPADES, value: '9'},
      { colour : Colour.SPADES, value: '10'},
      { colour : Colour.SPADES, value: 'Q'},
      { colour : Colour.SPADES, value: 'K'},
      { colour : Colour.SPADES, value: 'A'},
    ]
  }

}

export const deckModel = new DeckModel();

