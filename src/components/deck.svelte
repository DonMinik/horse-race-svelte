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
  grid-template-columns: repeat(2, 5rem);
  gap: 10px;
  grid-auto-rows: minmax(5rem, auto);
  border: 1px solid;
  padding: 1rem;
  background-color: lightgray
}

button {
  height: 2.5rem;
  width: 6rem;
  color:white;
  background-color: black;
  grid-row: 2
}
</style>