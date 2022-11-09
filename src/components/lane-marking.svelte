<script lang='ts'>

</script>

<div class='lane-marking'>
 
  <div class='start'>
      <slot > </slot>
  </div>
  <div class='section one'>
      <slot name='one'> </slot>
  </div>
  <div class='section two'>
      <slot name=two> </slot>
  </div>
  <div class='section three'>
      <slot name='three'> </slot>
  </div>
  <div class='section four'>
      <slot name='four'> </slot>
  </div>
  <div class='finish'>
      <slot > </slot>
  </div>
</div>


<style>
div {
  display: grid;
  grid-template-columns: repeat(6, 6rem);
  gap: 0.1rem;
  grid-auto-rows: minmax(5rem, auto);
  border: 1px solid;
  padding: 1rem;
   background-color: lightgray

}

.lane-marking {
    background-color: darkgray
}



</style>