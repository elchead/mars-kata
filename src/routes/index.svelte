<script lang="ts">
	import Cell from '../components/cell.svelte';
	import Board from '../components/board.svelte';
	import { Rover, Board as RoverBoard, Orientation } from '../model/move';
	let rover = new Rover({ x: 1, y: 0 }, 'N');
	const board = new RoverBoard(rover);
	$: position = rover.position;
	$: orientation = orientationMap[rover.orientation];
	function handleKeydown(event) {
		const key = event.key;
		rover = board.evaluate(key);
	}

	const orientationMap: Record<Orientation, string> = {
		N: '↑',
		E: '→',
		S: '↓',
		W: '←'
	};
</script>

<h1>Mars kata</h1>
<svelte:window on:keydown={handleKeydown} />
<Board {position} {orientation} />
