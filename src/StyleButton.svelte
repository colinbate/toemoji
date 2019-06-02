<script>
export let left;
export let right;
</script>
<style>
	button {
		cursor: pointer;
		margin-top: 1rem;
		box-shadow: 0 0 2px 2px rgba(150, 150, 150, 0.3);
	}

	button:active {
		box-shadow: 0 0 1px 1px rgba(150, 150, 150, 0.1);
	}
	.vs {
		font-size: 1.5rem;
  }
  @media (orientation: landscape) {
    button {
      margin: 1rem;
    }
  }
</style>

<button type="button" class="with-icons" on:click>
  <svg class="icon"><use xlink:href="/emoji.svg#{left}"/></svg>
  <span class="vs">vs</span>
  <svg class="icon"><use xlink:href="/emoji.svg#{right}"/></svg>
</button>