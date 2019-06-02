<script>
import {createEventDispatcher} from 'svelte';
import {fade} from 'svelte/transition';
import {players} from './stores.js';
import {didWin, getNextMove} from './tictactoe.js';
const dispatch = createEventDispatcher();
let player = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let moveCount = 0;
let won = false;
let locked = false;
// const printb = () => console.log(board.join(' | '));
function clickBoard(spotIndex) {
  if (board[spotIndex] || locked) {
    return; // Ignore clicks on occupied spaces or while computer is thinking.
  }
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
    if ($players[player] === 'computer') {
      locked = true;
      setTimeout(() => {
        locked = false;
        clickBoard(getNextMove(board));
      }, 600);
    }
  }
}
</script>
<style>
.wrapper {
  display: flex;
  flex-direction: column;
}
.bgwrap {
  padding: 1rem;
}
.boardbg {
  background-color: var(--black);
  position: relative;
  width: 100%;
  height: 0;
  padding: 0 0 100% 0;
  box-sizing: border-box;
}
.board {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 2px 2px;
}
.spot {
  background-color: var(--white);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.turn {
  padding: 1rem;
  background-color: var(--title-bg);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
}
.turn svg {
  width: 4rem;
  height: 4rem;
  margin-left: 1rem;
}
@media (orientation: landscape) {
  .wrapper {
    flex-direction: row;
    height: 100vh;
  }
  .turn {
    max-width: 12rem;
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
  }
  .turn h2 {
    text-align: center;
  }
  .turn svg {
    margin: 0;
  }
  .bgwrap {
    flex-grow: 1;
    padding: 2vh;
  }
  .boardbg {
    margin: 0 auto;
    width: 96vh;
    padding: 0 0 96vh 0;
  }
}
</style>
<div class="wrapper">
  <div class="turn">
    <h2>Your turn Player {player + 1}</h2>
    <svg><use xlink:href="/emoji.svg#{$players[player]}"/></svg>
  </div>
  <div class="bgwrap" in:fade>
    <div class="boardbg">
      <div class="board">
        {#each board as spot, i}
          <div class="spot" on:click={() => clickBoard(i)}>
            {#if spot}<div class="scaled-container"><svg class="scaled"><use xlink:href="/emoji.svg#{spot}"/></svg></div>{/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>