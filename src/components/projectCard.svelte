<script lang="ts">
	import type { Project } from '$lib/projects';
	let { project }: { project: Project } = $props();
</script>

<div class="h-auto w-auto rounded-md border-[1px] border-black px-2 py-1 dark:border-white">
	<p>{project.name}</p>
	<p>{project.description}</p>
</div>
