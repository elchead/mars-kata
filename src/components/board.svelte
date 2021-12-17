<script>
	import Cell from '../components/cell.svelte';
	export let position;
	export let orientation;
	let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function getIdx(i, j) {
		return i * columns.length + j;
	}

	function isRoverPosition(i, j) {
		return getIdx(i, j) === getIdx(position.x, position.y);
	}
</script>

<table>
	{#each columns as i}
		<tr id="r{i}">
			{#each columns as j}
				<Cell id={getIdx(i, j)}>{isRoverPosition(i, j) ? orientation : ''}</Cell>
			{/each}
		</tr>
	{/each}
</table>
