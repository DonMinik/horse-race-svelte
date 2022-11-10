<script lang='ts'>
  import Card from './card.svelte';
	import { createEventDispatcher } from 'svelte';
  import {Colour, deckModel, deckState} from '../model/deck.model.ts';
  import type {CardModel} from '../model/deck.model.ts';
  import {resetState} from '../model/game.state.ts'
  let openCard: CardModel | undefined;
  let dS;

  deckState.subscribe(state => {
    dS = state;
  })

  const dispatch = createEventDispatcher();

  function draw(event) {
    openCard = deckModel.pick();
    dispatch('drawCard', openCard);
  }

  function shuffle(event) {
    resetState();
    deckModel.shuffle();
  }
</script>
<div>
  <Card  on:click={draw}/>
  {#if dS === 'dirty' && openCard}
     <Card card={openCard} />
  {/if}
  <button on:click={shuffle}>Shuffle </button>
</div>

<style>
div {
  display: grid;
  grid-template-columns: repeat(2, 4.9rem);
  gap: 0.1rem;
  grid-auto-rows: minmax(5rem, auto);
  padding:  0.9rem 2.5rem 0 ;
  border-radius: 0 0 0.2rem 0.2rem;
  background-color: #395B64
}

button {
  height: 2.5rem;
  width: 6rem;
  color: #000;
  background-color: #A5C9CA;
  grid-row: 2
}
</style>