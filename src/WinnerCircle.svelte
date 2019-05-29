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
</style>
<div class="winner">
<h1>Congratulations</h1> 
<img src="/emoji/{name}.svg" alt="Player">
<button type="button" on:click={() => dispatch('newgame')}>New Game</button>
</div>