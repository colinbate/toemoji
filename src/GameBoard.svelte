<script>
import {createEventDispatcher} from 'svelte';
import {players} from './stores.js';
import {didWin} from './tictactoe.js';
const dispatch = createEventDispatcher();
let player = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let moveCount = 0;
let won = false;
function clickBoard(spotIndex) {
  moveCount += 1;
  board = board.map((spot, index) => {
    if (index === spotIndex && !spot) {
      return $players[player];
    }
    return spot;
  });
  if (moveCount >= 5) {
    won = didWin(board, spotIndex, $players[player]);
  }
  if (won) {
    dispatch('gameover', {won, player, playerName: $players[player]});
  } else {
    if (moveCount === 9) {
      // TIE
      dispatch('gameover', {won: false});
    }
    player = (player + 1) % 2;
  }
}
</script>
<style>
.boardbg {
  background-color: var(--black);
  margin: 1rem;
}
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2px 2px;
  height: 60vh;
}
.spot {
  background-color: var(--white);
  padding: 0.5rem;
  display: flex;
}
.spot img {
  width: 100%;
  align-items: center;
  justify-content: center;
}
.turn {
  display: flex;
  align-items: center;
  justify-content: center;
}
.turn img {
  max-width: 4rem;
  margin-left: 1rem;
}
</style>
<div class="turn">
  <h2>Your turn Player {player + 1}</h2>
  <img src="/emoji/{$players[player]}.svg" alt="Player">
</div>
<div class="boardbg">
  <div class="board">
    {#each board as spot, i}
      <div class="spot" on:click={() => clickBoard(i)}>
        {#if spot}<img src="/emoji/{spot}.svg" alt={spot}>{/if}
      </div>
    {/each}
  </div>
</div>