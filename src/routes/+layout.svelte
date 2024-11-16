<script lang="ts">
	import '../app.css';
	import Menu from './Menu.svelte';
	let { children } = $props();
</script>

<Menu />

<section class="px-5">
	{@render children()}
</section>
