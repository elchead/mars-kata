<script lang="typescript">
	import Cell from '../components/cell.svelte';
	import Board from '../components/board.svelte';
	import { Rover, Board as RoverBoard, Orientation } from '../model/move';
	let orientation: Orientation = 'N';
	let rover = new Rover({ x: 1, y: 0 }, orientation);
	const board = new RoverBoard(rover);
	$: position = rover.position;
	$: orientation = rover.orientation;
	function handleKeydown(event) {
		const key = event.key;
		rover = board.evaluate(key);
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
