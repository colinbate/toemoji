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
button {
  margin-top: 2rem;
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
</style>
<div class="winner">
{#if name === true}
<h1>Tie Game</h1>
{:else if name === 'computer'}
<h1>You Lose</h1>
<div class="w-50-c"><svg class="scaled"><use xlink:href="/emoji.svg#cry"/></svg></div>
{:else}
<h1>Congratulations</h1> 
<div class="w-75-c"><svg class="scaled"><use xlink:href="/emoji.svg#{name}"/></svg></div>
{/if}
<button type="button" on:click={() => dispatch('newgame')}>New Game</button>
</div>