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
  width: 90%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.chooser svg {
  width: 100%;
}

.chooser div {
  cursor: pointer;
}
.chooser div.disable {
  cursor: not-allowed;
}
.chooser div.disable svg {
  opacity: 0.3;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  background-color: var(--title-bg);
  width: 100%;
  padding: 1rem;
  margin-top: 0;
  text-align: center;
  color: var(--white);
}
</style>
<div class="wrapper">
  <h1>Choose Player {player + 1}</h1>
  <div class="chooser">
    {#each emojiList as em}
    <div class="scaled-container" class:disable={em === disable}>
    <svg class="scaled" on:click={() => makeChoice(em)}><use xlink:href="/emoji.svg#{em}"/></svg>
    </div>
    {/each}
  </div>
</div>