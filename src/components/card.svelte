<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
  import {Colour} from '../model/deck.model.ts';
  import type {CardModel}  from '../model/deck.model.ts'
  export let card:CardModel ;

const dispatch = createEventDispatcher();

	function click() {
		dispatch('click', {
		});
	}

</script>


<div on:click={click}>
  {card?  card.value + card.colour : 'backside'}
</div>

<style>
div {
  background-color: white;
  border: 1px solid;
  border-radius: 0.5rem;
  width: 4rem;
  height: 6.5rem;
}
</style>