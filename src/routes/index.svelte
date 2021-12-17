<script>
	import Cell from '../components/cell.svelte';
	import Board from '../components/board.svelte';
	let position = { x: 1, y: 0 };
	let orientation = 'N';
</script>

<h1>Mars kata</h1>
<Board {position} {orientation} />
