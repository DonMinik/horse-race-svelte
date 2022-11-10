<script lang="ts">
  import Lane from './lane.svelte'
  import Deck from './deck.svelte'
  import Jockey from './jockey.svelte'
  import Card from './card.svelte'
  import WinnerOverly from './winner-overlay.svelte'
  import LaneMarking from './lane-marking.svelte'
  import {Colour, deckModel, deckState} from '../model/deck.model.ts'
  import {advance, progress, resetState, relapse} from '../model/game.state.ts'
  
  let gameState: GameState | undefined;

  let laneMarkingOne: Card | undefined;
  let laneMarkingTwo: Card | undefined;
  let laneMarkingThree: Card | undefined;
  let laneMarkingFour: Card | undefined;
  
  let winner:Colour | undefined;
  function advanceRace(event) {
    advance(event?.detail?.colour)
  } 

  deckState.subscribe(state => {
   laneMarkingOne = undefined;
   laneMarkingTwo = undefined;
   laneMarkingThree = undefined;
   laneMarkingFour = undefined;
  })

  progress.subscribe(state => {
    console.log('new state', state)
    gameState = state;
    revealLaneMarking();
    checkForWinner();
  })

  function checkForWinner() {
     if (gameState.hearts === 5) {
       console.log('hearts wins')
      winner = Colour.HEARTS;
      console.log(winner)
    } else if (gameState.diamonds === 5) {
      winner = Colour.DIAMONDS;
    } else if (gameState.clubs === 5) {
      winner = Colour.CLUBS;
    } else if (gameState.spades === 5) {
      winner = Colour.SPADES;
    }
  }

  function reset() {
    resetState();
    deckModel.shuffle();
    winner = undefined;
  }

  function revealLaneMarking() {
   if(!laneMarkingOne && gameState.hearts >= 1 && gameState.diamonds >= 1 && gameState.clubs >= 1 && gameState.spades >= 1) {
      laneMarkingOne = deckModel.pick();
      relapse(laneMarkingOne.colour);
    } else if(!laneMarkingTwo && gameState.hearts >= 2 && gameState.diamonds >= 2 && gameState.clubs >= 2 && gameState.spades >= 2) {
      laneMarkingTwo = deckModel.pick();
      relapse(laneMarkingTwo.colour);
    } else if(!laneMarkingThree && gameState.hearts >= 3 && gameState.diamonds >= 3 && gameState.clubs >= 3 && gameState.spades >= 3) {
      laneMarkingThree = deckModel.pick();
      relapse(laneMarkingThree.colour);
    } else if(!laneMarkingFour && gameState.hearts >= 4 && gameState.diamonds >= 4 && gameState.clubs >= 4 && gameState.spades >= 4) {
      laneMarkingFour = deckModel.pick();
      relapse(laneMarkingFour.colour);
    } 
  }

</script>
<div class='racing-stadium'>
  <Lane position={gameState.hearts}> 
    <Jockey colour={Colour.HEARTS} />
  </Lane>

 <Lane position={gameState.diamonds}>
    <Jockey colour={Colour.DIAMONDS}/>
  </Lane>

  <Lane position={gameState.clubs}>
    <Jockey colour={Colour.CLUBS} />
  </Lane>
  <Lane position= {gameState.spades}>
    <Jockey colour={Colour.SPADES} />
  </Lane>
  <LaneMarking>
    <Card slot='one' card={laneMarkingOne}/>
    <Card slot='two'card={laneMarkingTwo}/>
    <Card slot='three'card={laneMarkingThree}/>
    <Card slot='four'card={laneMarkingFour}/>
  </LaneMarking>
</div>
{#if winner}
  <WinnerOverly winner={winner} on:nextGame={reset}/>
{:else}
<div>
 <Deck on:drawCard={advanceRace}/>
</div>
{/if}


<style>
.racing-stadium {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.deck {

}
</style>
