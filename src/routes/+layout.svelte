<script lang="ts">
	import { spots } from '$lib';
    import { base } from '$app/paths';
</script>

<div class="grid">
	{#each Object.keys(spots) as spot}
		<div><a href="{base}/{spot}">{spot}</a></div>
	{/each}
</div>
<slot />
