<script lang="ts">
	import type { Project } from '$lib/data/projects';
	import Expand from '$lib/icons/expand.svelte';
	import { fade, scale } from 'svelte/transition';

	let { project }: { project: Project } = $props();
	let show: boolean = $state(false);

	const openPopup = () => {
		show = true;
		document.documentElement.classList.add('overflow-hidden');
	};

	const closePopup = () => {
		show = false;
		document.documentElement.classList.remove('overflow-hidden');
	};
</script>

{#if project.isFirstPage}
	<div
		class="h-auto w-auto overflow-clip rounded-md border border-black/50 drop-shadow-md dark:border-white/50"
	>
		<img src={project.image.src} alt={project.image.alt} />
		<div class="p-3">
			<h3 class="text-xl font-semibold">{project.name}</h3>
			<p class="mt-1">{@html project.shortDescription}</p>
			<button
				onclick={openPopup}
				aria-label="Show popup"
				class="mt-4 w-full items-center rounded-md border border-gray-500 bg-gray-500/70 bg-opacity-70 p-2 drop-shadow-md hover:bg-gray-500 dark:border-gray-800 dark:bg-gray-800/70 hover:dark:bg-gray-800"
			>
				Show more
			</button>
		</div>
	</div>
{/if}

<svelte:window
	onkeydown={(e) => {
		if (e.key == 'Escape') closePopup();
	}}
/>
{#if show}
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		transition:fade={{ duration: 300 }}
		class="fixed left-0 top-0 z-20 mx-auto my-auto flex h-screen w-screen bg-white/70 dark:bg-black/70"
		onclick={closePopup}
	>
		<div
			transition:scale={{ duration: 300 }}
			onclick={(e) => {
				e.stopPropagation();
			}}
			class="m-auto flex h-3/4 w-3/4 flex-col overflow-auto rounded-md bg-white shadow-xl dark:bg-black"
		>
			<div class="sticky top-0 flex h-fit flex-row justify-between bg-white p-4 dark:bg-black">
				<h1>{project.name}</h1>
				<button onclick={closePopup}>&times;</button>
			</div>
			<img src={project.image.src} alt={project.image.alt} />
			{@html project.description}
		</div>
	</div>
{/if}
