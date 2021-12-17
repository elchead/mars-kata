<script lang="typescript">
	import Cell from '../components/cell.svelte';
	import Board from '../components/board.svelte';
	import { Rover, Orientation } from '../model/move';
	let orientation: Orientation = 'N';
	let rover = new Rover({ x: 1, y: 0 }, orientation);
	$: position = rover.position;
	function handleKeydown(event) {
		position = rover.move();
		// position.y = 10;
		// position.x = 5;
		// console.log(position);
		// $: position = rover.position;
		// console.log(position);
		// key = event.key;
		// keyCode = event.keyCode;
	}
	let columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	function getIdx(i, j) {
		return i * columns.length + j;
	}

	function isRoverPosition(i, j) {
		return getIdx(i, j) === getIdx(position.x, position.y);
	}
</script>

<h1>Mars kata</h1>
<svelte:window on:keydown={handleKeydown} />
<Board {position} {orientation} />
<!-- <table>
	{#each columns.slice().reverse() as i}
		<tr id="r{i}">
			{#each columns as j}
				<Cell id={getIdx(i, j)}>{isRoverPosition(i, j) ? orientation : ''}</Cell>
			{/each}
			{console.log(position)}
		</tr>
	{/each}
</table> -->
