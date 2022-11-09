<script lang='ts'>
  import Card from './card.svelte'
  import {Colour} from '../model/deck.model.ts'

  export let colour: Colour;
  const card = {colour: colour, value: 'J'}
</script>

<Card {card}/>