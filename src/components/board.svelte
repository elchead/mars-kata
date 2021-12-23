<script lang="ts">
	import Cell from '../components/cell.svelte';
	export let position;
	export let orientation;
	let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function getIdx(i, j) {
		return i * columns.length + j;
	}

	function isRoverPosition(i, j, position) {
		return getIdx(i, j) === getIdx(position.y, position.x);
	}
</script>

<table>
	{#each columns.slice().reverse() as i}
		<tr id="r{i}">
			{#each columns as j}
				{#if isRoverPosition(i, j, position)}
					<Cell id={getIdx(i, j)}>{orientation}</Cell>
				{:else}
					<Cell id={getIdx(i, j)} />
				{/if}
			{/each}
		</tr>
	{/each}
</table>
