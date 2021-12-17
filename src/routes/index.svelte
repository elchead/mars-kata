<script>
	import Cell from '../components/cell.svelte';
	let position = { x: 0, y: 0 };
	let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit me <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<table>
	{#each columns as i}
		<tr id="r{i}">
			{#each columns as j}
				<Cell id={i * columns.length + j} />
			{/each}
		</tr>
	{/each}
</table>
