<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

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

<div>
	{#each data.days as day}
		<h2>{day.dateStr}</h2>
		<table>
			{#each day.items as item}
				<tr>
					<td>{item.time}</td>
					<td><img src={item.symbolUrl} alt="weather symbol" width="40" height="40" /></td>
					<td>{item.temperature}º</td>
					<td>
						{item.wind} ({item.gusts}) m/s
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
</div>
