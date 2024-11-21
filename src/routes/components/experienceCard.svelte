<script lang="ts">
	import type { Experience } from '$lib/experience';
	export let experience: Experience;
</script>

<div class="flex h-auto w-auto flex-col rounded-md p-3">
	<div class="font-bold">{experience.company}</div>
	<div
		class="mt-2 h-auto w-fit rounded-md bg-black p-1 font-semibold text-white dark:bg-white dark:text-black"
	>
		{experience.position}
	</div>
	<div class="mt-2">{experience.description}</div>
</div>
