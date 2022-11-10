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
  grid-template-columns: repeat(6, 4.9rem);
  gap: 0.1rem;
  grid-auto-rows: minmax(5rem, auto);
  padding: 0.1rem 0;
  border-radius: 0.2rem;
}

.start {
  background-color: #395B64;
  border-radius:  0.2rem 0 0 0.2rem 
}

.section {
  background-color: #E7F6F2;
  border-radius: 0
}

.finish {
  border-radius: 0 0.2rem 0.2rem 0;
  background-color: #A5C9CA
}

</style>