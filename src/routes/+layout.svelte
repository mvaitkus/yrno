<script lang="ts">
	import { spots } from '$lib';
</script>

<div class="grid">
	{#each Object.keys(spots) as spot}
		<div><a href="/{spot}">{spot}</a></div>
	{/each}
</div>
<slot />
