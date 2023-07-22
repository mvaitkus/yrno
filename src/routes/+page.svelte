<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { base } from '$app/paths';
	import { spotConfig, type Day, loadForecast, setForecast } from '$lib';
	import { onMount } from 'svelte';

	let currentSpot = $page.url.hash;
	let forecastPromise = Promise.resolve([] as Iterable<Day>);

	onMount(() => {
		forecastPromise = loadForecast(currentSpot);
	});

	$: if (navigating) {
		currentSpot = $page.url.hash;
		forecastPromise = loadForecast(currentSpot);
	}
</script>

<div class="container">
	<!-- <figure> -->
	<!-- <nav>
			<ul>
				{#each Object.entries(spotConfig) as [spot, { name }]}
                {#if spot == currentSpot}
					<li><a href="{base}/{spot}">{name}</a></li>
                {:else}
                    <li><a href="{base}/{spot}">{name}</a></li>
                {/if}
				{/each}
			</ul>
		</nav> -->
	<!-- </figure> -->
	<div class="grid">
		{#each Object.entries(spotConfig) as [spot, { name }]}
			{#if spot == currentSpot}
				<div class="active"><a href="{base}/{spot}">{name}</a></div>
			{:else}
				<div><a href="{base}/{spot}">{name}</a></div>
			{/if}
		{/each}
	</div>
</div>
<div class="container">
	<svg height="0" width="0" aria-hidden="true">
		<symbol id="icon-arrow"
			><path
				fill="currentColor"
				fill-rule="evenodd"
				d="M11.53 3l-.941 12.857L7 15l5.001 6L17 15l-3.587.857L12.471 3h-.941z"
				clip-rule="evenodd"
			/></symbol
		>
	</svg>
	{#await forecastPromise then forecast}
		{#each forecast as day}
			<h2>{day.dateStr}</h2>
			<table>
				{#each day.items as item}
					<tr>
						<td>{item.time}</td>
						<td><img src={item.symbolUrl} alt="weather symbol" width="40" height="40" /></td>
						<td>{item.temperature.toFixed(0)}º</td>
						<td>
							{item.wind.toFixed(1)} ({item.gusts.toFixed(0)}) m/s
                            <!-- 10.0 (12.0) m/s -->
							<svg
								style="transform: rotate({item.direction}deg);"
								x="0"
								y="0"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								focusable="false"
								aria-hidden="true"
								><use xlink:href="#icon-arrow" x="0" y="0" width="24" height="24" /></svg
							>
						</td>
					</tr>
				{/each}
			</table>
		{/each}
	{/await}
</div>

<style>
	/* override picocss styles to use 3 columns on smaller screens */
	.grid {
		grid-template-columns: repeat(3, minmax(0%, 1fr));
	}
    @media (min-width: 992px) {
		.grid {
			grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
		}
	}
    /* override end */
	.active {
		text-decoration: underline;
        text-decoration-color: var(--primary);
	}
</style>
