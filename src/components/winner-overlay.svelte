<script lang='ts'>
	import {fly} from 'svelte/transition';
  import {Colour} from '../model/deck.model.ts'
  import { createEventDispatcher } from 'svelte';

  export let winner: Colour | undefined
  
  const dispatch = createEventDispatcher();

  function nextGame(event) {
      dispatch('nextGame');
  }
</script>



<div class='overlay' transition:fly="{{ y: 800, duration: 300 }}">
  {#if winner === Colour.HEARTS}
    <i class='red'>&hearts;</i>
    <h2>Hearts won!</h2>
  {:else if winner === Colour.DIAMONDS}
    <i class='red'>&diams;</i>
    <h2>Diamonds won!</h2>
  {:else if winner === Colour.CLUBS}
    <i class='black'> &clubs; </i>
    <h2>Clubs won!</h2>
  {:else if winner === Colour.SPADES}
    <i class='black'>&spades;</i>
     <h2>Spades won!</h2>
 {/if}
 <button on:click={nextGame}>Next Game </button>
</div>

<style>
	.overlay {
		position: absolute;
		top: 0;
    height: 20rem;
    width: 24rem;
    margin: 8rem 3rem;
		background-color: #2C3333;
    border-color: #E7F6F2;
    border: 0.1rem solid;
    border-radius: 0.5rem;
		color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
 button {
  height: 2.5rem;
  width: 8rem;
  color: #000;
  background-color: #A5C9CA;
  grid-row: 2
}

h2 {
  margin: 1rem;
}

i {
  font-size: 5rem;
  background-color: #FFF;
  border-radius: 100%;
  margin: 1rem;
  padding: 1rem;
  height: 2.6rem;
  width: 2.6rem;
}

.red {
  color: red
}

.black {
  color: black
}
</style>