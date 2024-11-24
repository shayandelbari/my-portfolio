<script lang="ts">
	export let showAt: number;

	const gotoTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	let scrollHeight: number = 0;
	$: showButton = scrollHeight > showAt;
</script>

<svelte:window bind:scrollY={scrollHeight} />

{#if showButton}
	<button
		on:click={gotoTop}
		aria-label="Scroll to top"
		class="fixed bottom-5 right-5 h-fit w-fit rounded-full bg-black p-2 shadow-lg dark:bg-white"
		><svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			class="fill-none stroke-white stroke-2 dark:stroke-black"
		>
			<path d="M17 15L12 10L7 15" stroke-linecap="round" stroke-linejoin="round" />
		</svg></button
	>
{/if}
