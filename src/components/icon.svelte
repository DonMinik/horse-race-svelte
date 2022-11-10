<script lang='ts'>
import {Colour} from '../model/deck.model'
export let colour: Colour
</script>

{#if colour === Colour.HEARTS}
<i class='red'>&hearts;</i>
{:else if colour === Colour.DIAMONDS}
<i class='red'>&diams;</i>

{:else if colour === Colour.CLUBS}
<i class='black'>&clubs;</i>

{:else if colour === Colour.SPADES}
<i class='black'>&spades;</i>
{/if}

<style>
i {
  font-size: 1.2rem
}

.red {
  color: red
}

.black {
  color: black
}
</style>