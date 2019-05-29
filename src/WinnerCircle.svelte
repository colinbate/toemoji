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
.w-50 {
  width: 50%;
}
</style>
<div class="winner">
{#if name === true}
<h1>Tie Game</h1>
{:else if name === 'computer'}
<h1>You Lose</h1>
<img src="/emoji/cry.svg" alt="Crying" class="w-50">
{:else}
<h1>Congratulations</h1> 
<img src="/emoji/{name}.svg" alt="Player">
{/if}
<button type="button" on:click={() => dispatch('newgame')}>New Game</button>
</div>