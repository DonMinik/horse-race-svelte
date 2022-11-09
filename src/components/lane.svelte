<script lang='ts'>

export let position = 0;
</script>

<div>
 
  <div class='start'>
    {#if position === 0}
      <slot > </slot>
    {/if}
  </div>
  <div class='section one'>
    {#if position === 1}
      <slot > </slot>
    {/if}  </div>
  <div class='section two'>
     {#if position === 2}
      <slot > </slot>
    {/if}
  </div>
  <div class='section three'>
     {#if position === 3}
      <slot > </slot>
    {/if}
  </div>
  <div class='section four'>
     {#if position === 4}
      <slot > </slot>
    {/if}
  </div>
  <div class='finish'>
     {#if position === 5}
      <slot > </slot>
    {/if}
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
}

.start {
  background-color: lightgray
}

.section {
  background-color: lightgreen
}

.finish {
  background-color: darkgray
}

</style>