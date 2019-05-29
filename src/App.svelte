<script>
	import MainMenu from './MainMenu.svelte';
	import CharacterSelection from './CharacterSelection.svelte';
	import GameBoard from './GameBoard.svelte';
	import WinnerCircle from './WinnerCircle.svelte';

	let playmode;
	let playgame = false;
	let winner;
	function setMode(ev) {
		playmode = ev.detail.mode;
	}
	function startGame() {
		playgame = true;
	}
	function gameOver(ev) {
		winner = ev.detail.playerName;
	}
	function newGame(ev) {
		playmode = null;
		playgame = false;
		winner = null;
	}
</script>

{#if !playmode}
	<MainMenu on:playmode={setMode}/>
{:else if !playgame}
	<CharacterSelection mode={playmode} on:complete={startGame}/>
{:else if !winner}
	<GameBoard on:gameover={gameOver}/>
{:else}
	<WinnerCircle name={winner} on:newgame={newGame}/>
{/if}
