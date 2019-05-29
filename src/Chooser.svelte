<script>
import {createEventDispatcher} from 'svelte';
export let player;
const dispatch = createEventDispatcher();

function makeChoice(character) {
  dispatch('choose', {character});
}

const emojiList = [
  'smiley-emoji',
  'heart-emoji',
  'angry-emoji',
  'cat',
  'grossed-emoji',
  'poo',
  'surprised-emoji',
  'monkey',
  'cool-emoji',
  'crying-emoji',
  'dizzy-emoji',
  'tongue-emoji',
]
</script>
<style>
.chooser {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
</style>
<h2>Choose Player {player + 1}</h2>
<div class="chooser">
  {#each emojiList as em}
  <img src="/emoji/{em}.svg" alt={em} on:click={() => makeChoice(em)}>
  {/each}
</div>