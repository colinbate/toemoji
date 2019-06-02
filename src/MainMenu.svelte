<script>
import { createEventDispatcher } from 'svelte';
import { fade } from 'svelte/transition';
import Logo from './Logo.svelte';
import StyleButton from './StyleButton.svelte';

const dispatch = createEventDispatcher();

function setMode(mode) {
  dispatch('playmode', {mode});
}
</script>
<style>
	.mainmenu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	@media (orientation: landscape) {
		.mainmenu {
			flex-direction: row;
			height: 100vh;
		}
	}
</style>
<div class="mainmenu" in:fade>
	<Logo/>
	<div class="options">
		<StyleButton left="smiley-emoji" right="computer" on:click={() => setMode('1p')}/>
		<StyleButton left="smiley-emoji" right="smiley-emoji" on:click={() => setMode('2p')}/>
	</div>
</div>