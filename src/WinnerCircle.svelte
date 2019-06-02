<script>
import {createEventDispatcher} from 'svelte';
const dispatch = createEventDispatcher();
export let name;
</script>
<style>
.winner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  text-align: center;
}
button {
  margin-top: 2rem;
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
}
.w-50-c {
  width: 50%;
  height: 0;
  position: relative;
  padding: 0 0 50% 0;
}
.w-75-c {
  width: 75%;
  height: 0;
  position: relative;
  padding: 0 0 75% 0;
}
@media (orientation: landscape) {
  .winner {
    flex-direction: row;
    height: 100vh;
  }
  .w-50-c {
    width: 50vh;
    padding: 0 0 50vh 0;
  }
  .w-75-c {
    width: 75vh;
    padding: 0 0 75vh 0;
  }
  button {
    margin: 0 0 0 1rem;
  }
}
</style>
<div class="winner">
  {#if name === true}
    <h1>Tie Game</h1>
  {:else if name === 'computer'}
    <div>
      <h1>You Lose</h1>
      <div class="w-50-c"><svg class="scaled"><use xlink:href="/emoji.svg#cry"/></svg></div>
    </div>
  {:else}
    <div>
      <h1>Congratulations</h1> 
      <div class="w-75-c"><svg class="scaled"><use xlink:href="/emoji.svg#{name}"/></svg></div>
    </div>
  {/if}
  <button type="button" on:click={() => dispatch('newgame')}>New Game</button>
</div>