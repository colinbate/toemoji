<script>
import Chooser from './Chooser.svelte';
import {players} from './stores.js';
import {createEventDispatcher} from 'svelte';
export let mode;
const dispatch = createEventDispatcher();
let currentPlayer = 0;
if (mode === '1p') {
  players.set([null, 'computer']);
}
function setPlayer(ev) {
  players.update(p => p.map((play, pi) => currentPlayer === pi ? ev.detail.character : play));
  if (mode === '1p' || currentPlayer === 1) {
    dispatch('complete');
  } else {
    currentPlayer = 1;
  }
}
</script>

<Chooser player={currentPlayer} on:choose={setPlayer}/>
