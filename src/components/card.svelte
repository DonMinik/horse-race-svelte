<script lang='ts'>
	import { createEventDispatcher } from 'svelte';
  import {Colour} from '../model/deck.model.ts';
  import Icon from './icon.svelte'
  import type {CardModel}  from '../model/deck.model.ts'
  export let card:CardModel ;

const dispatch = createEventDispatcher();

	function click() {
		dispatch('click', {
		});
	}

</script>


<div on:click={click} class=' {card?  card.value + card.colour : 'backside'}'>
  {#if card}
  <span class='left' >
  <Icon colour={card.colour}/>
   </span>
   <span class='left val'>{card.value}</span>
  <Icon colour={card.colour}/>
   <span class='right val' >{card.value}</span>
   <span class='right'>
   <Icon colour={card.colour}/>
   </span>
  {/if}
  
 </div>

<style>
div {
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  border: 1px solid;
  border-radius: 0.5rem;
  width: 4rem;
  height: 6.5rem;
  margin: 0.4rem
}
span {
  font-size: 0.8rem;
  height: 0.9rem;
  margin:0.2rem;
}

.val {
  margin: 0 0.3rem;
}
.right{
    align-self: flex-end;
    float:right;
    text-align:right;
}

.left {
    align-self: flex-start;
    float:left;
    text-align:left;
}

.backside {
  background-color: #f76;
  background-image:
    linear-gradient(30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%),
    linear-gradient(-30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%),
    linear-gradient(30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%),
    linear-gradient(-30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%),
    linear-gradient(30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%),
    linear-gradient(-30deg, #fee 13.5%, transparent 13.5%, transparent 86.5%, #fee 86.5%),
    linear-gradient(30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%),
    linear-gradient(-30deg, #dcc 13.5%, transparent 13.5%, transparent 86.5%, #dcc 86.5%),
    linear-gradient(45deg, #544 25%, transparent 25%, transparent 75%, #544 75%),
    linear-gradient(45deg, #544 25%, transparent 25%, transparent 75%, #544 75%);
  background-position:
    0em 1em,
    0em 1em,
    1em 2em,
    1em 2em,
    2em 1em,
    2em 1em,
    3em 2em,
    3em 2em,
    0em 0em,
    1em 1em;
  background-size:
    4em 2em,
    4em 2em,
    4em 2em,
    4em 2em,
    4em 2em,
    4em 2em,
    4em 2em,
    4em 2em,
    2em 2em,
    2em 2em;}
</style>