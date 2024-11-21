<script lang="ts">
	export let index: number;
	export let length: number;
	import type { Experience } from '$lib/experience';
	export let experience: Experience;
</script>

<div class="flex w-fit flex-row">
	<div
		class="flex h-auto w-1 bg-black dark:bg-white
		{index == 0 ? 'rounded-t-full' : index == length - 1 ? 'rounded-b-full' : 'rounded-none'}"
	></div>
	<div class="flex h-fit w-auto flex-col rounded-md p-3">
		<div class="-mx-[24px] flex flex-row space-x-1">
			<div
				class="flex h-5 w-5 rounded-full border-4 border-white bg-green-600 dark:border-black"
			></div>
			<div class="flex font-bold">{experience.company}</div>
		</div>
		<div
			class="mt-2 h-fit w-fit rounded-md bg-black p-1 font-semibold text-white dark:bg-white dark:text-black"
		>
			{experience.position}
		</div>
		<p class="mt-2 max-w-prose">{experience.description}</p>
	</div>
</div>
