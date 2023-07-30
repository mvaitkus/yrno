<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { base } from '$app/paths';
	import { spotConfig, type Day, loadForecast, type Forecast } from '$lib';
	import { onMount } from 'svelte';

	let currentSpot = $page.url.hash;
	let forecastPromise = Promise.resolve({} as Forecast);

	onMount(() => {
		forecastPromise = loadForecast(currentSpot);
	});

	$: if (navigating) {
		// only reload forecast if we are navigating to a new spot
		if ($page.url.hash != currentSpot) {
			currentSpot = $page.url.hash;
			forecastPromise = loadForecast(currentSpot);
		}
	}

    // calculates the background color based on the wind speed
    const style = (wind: number) => {
        // 3bft 4.5 - 0, 255, 255
        // 4bft 6.7 - 0, 255, 0
        // 5bft 9.35 - 255, 255, 0
        // 6bft 12.3 - 255, 0, 0
        // 7bft 15.5 - 255, 0, 255
        // 8bft 18.95 - 255, 0, 255
        // return background color based on windspeed
        let r = 0;
        let g = 0;
        let b = 0;
        let opacity = "15%"
        if (wind < 4.5) { // 0, 255, 255
            r = 0;
            g = 255;
            b = 255;
            opacity = `${(wind / 4.5) * 15}%`;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        };
        if (wind < 6.7) { // 0, 255, 0
            r = 0;
            g = 255;
            b = 255 - ((wind - 4.5) / 2.2) * 255;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        }
        if (wind < 9.35) { // 255, 255, 0
            r = ((wind - 6.7) / 2.65) * 255;
            g = 255;
            b = 0;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        }
        if (wind < 12.3) { // 255, 0, 0
            r = 255;
            g = 255 - ((wind - 9.35) / 2.95) * 255;
            b = 0;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        }
        if (wind < 15.5) { // 255, 0, 255
            r = 255;
            g = 0;
            b = ((wind - 12.3) / 3.2) * 255;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        }
        if (wind >= 15.5) {
            r = 255;
            g = 0;
            b = 255;
            return `background-color: rgba(${r}, ${g}, ${b}, ${opacity})`
        }
    }
</script>

<div class="container">
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
		<center>Atnaujinta {forecast.created}</center>
		{#each forecast.days as day}
			<h2>{day.dateStr}</h2>
			<table>
				{#each day.items as item}
					<tr style={style(item.wind)}>
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
		<a href={forecast.nowLink}>Sąlygos dabar (json)</a>
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
