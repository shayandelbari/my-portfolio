<script lang="ts">
	import ExperienceCard from './components/experienceCard.svelte';
	import experiences from '$lib/experience';
</script>

<h1 class="mt-5 text-2xl font-semibold">My Work Experience</h1>
<p class="mt-3">In this page I will be listing my work experiences</p>

<div class="mx-auto flex w-fit flex-row">
	<div class="flex h-auto w-1 rounded-full bg-black dark:bg-white"></div>
	<div class=" flex flex-col">
		{#each experiences as experience}
			<ExperienceCard {experience} />
		{/each}
	</div>
</div>
