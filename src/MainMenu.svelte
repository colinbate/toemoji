<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

function setMode(mode) {
  dispatch('playmode', {mode});
}
</script>
<style>
	h1 {
		color: var(--accent-color);
	}
	.mainmenu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	button {
		cursor: pointer;
		margin-top: 1rem;
		box-shadow: 0 0 2px 2px rgba(150, 150, 150, 0.3);
	}

	button:active {
		box-shadow: 0 0 1px 1px rgba(150, 150, 150, 0.1);
	}

</style>
<div class="mainmenu">
	<h1>Tic Tac Toemoji!</h1>

	<button type="button" class="with-icons" on:click={() => setMode('1p')}>
		<img src="/emoji/smiley-emoji.svg" alt="Human" class="icon">
		<span>vs</span>
		<img src="/emoji/computer.svg" alt="Computer" class="icon">
	</button>

	<button type="button" class="with-icons" on:click={() => setMode('2p')}>
		<img src="/emoji/smiley-emoji.svg" alt="Human" class="icon">
		<span>vs</span>
		<img src="/emoji/smiley-emoji.svg" alt="Another Human" class="icon">
	</button>
</div>