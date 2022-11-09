<script lang="ts">
  import Lane from './lane.svelte'
  import Deck from './deck.svelte'
  import Jockey from './jockey.svelte'
  import Card from './card.svelte'
  import LaneMarking from './lane-marking.svelte'
  import {Colour, deckModel, deckState} from '../model/deck.model.ts'
  import {advance, progress, resetState, relapse} from '../model/game.state.ts'
  
  let gameState: GameState | undefined;

  let laneMarkingOne: Card | undefined;
  let laneMarkingTwo: Card | undefined;
  let laneMarkingThree: Card | undefined;
  let laneMarkingFour: Card | undefined;
  
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
    gameState = state;
    revealLaneMarking();
    checkForWinner();
  })

  function checkForWinner() {
     if (gameState.hearts === 5) {
      alert('hearts won!')
      reset();
    } else if (gameState.diamonds === 5) {
      alert('diamonds won!')
      reset();
    } else if (gameState.clubs === 5) {
      alert('clubs won!')
      reset();
    } else if (gameState.spades === 5) {
      alert('spades won!')
      reset();
    }
  }

  function reset() {
    resetState();
    deckModel.shuffle();
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
  <Lane position={gameState?.hearts}> 
    <Jockey colour={Colour.HEARTS} />
  </Lane>

 <Lane position={gameState?.diamonds}>
    <Jockey colour={Colour.DIAMONDS}/>
  </Lane>

  <Lane position={gameState?.clubs}>
    <Jockey colour={Colour.CLUBS} />
  </Lane>
  <Lane position= {gameState?.spades}>
    <Jockey colour={Colour.SPADES} />
  </Lane>
  <LaneMarking>
    <Card slot='one' card={laneMarkingOne}/>
    <Card slot='two'card={laneMarkingTwo}/>
    <Card slot='three'card={laneMarkingThree}/>
    <Card slot='four'card={laneMarkingFour}/>
  </LaneMarking>
</div>

<div>
 <Deck on:drawCard={advanceRace}/>
</div>

<style>
.racing-stadium {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border: 1px solid
}

.deck {

}
</style>
