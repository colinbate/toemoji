<script>
import {createEventDispatcher} from 'svelte';
export let player;
export let disable;
const dispatch = createEventDispatcher();

function makeChoice(character) {
  if (character !== disable) {
    dispatch('choose', {character});
  }
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.chooser img {
  width: 100%;
}

.chooser div {
  padding: 0.5rem;
  cursor: pointer;
}
.chooser div.disable {
  cursor: not-allowed;
}
.chooser div.disable img {
  opacity: 0.3;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
<div class="wrapper">
  <h1>Choose Player {player + 1}</h1>
  <div class="chooser">
    {#each emojiList as em}
    <div class:disable={em === disable}>
    <img src="/emoji/{em}.svg" alt={em} on:click={() => makeChoice(em)}>
    </div>
    {/each}
  </div>
</div>