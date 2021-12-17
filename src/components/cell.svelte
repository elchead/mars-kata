<script>
	export let id;
</script>

<td>
	<p class="red-piece" {id} />
	<slot />
</td>

<style>
	td {
		text-align: center;
		background-color: #ba7a3a;
		width: 65px;
		height: 65px;
	}
</style>
