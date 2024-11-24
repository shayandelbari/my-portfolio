<script lang="ts">
	let menuItems = [
		// { name: 'Home', link: '/' },
		{ name: 'About', link: '#about' },
		{ name: 'Experience', link: '#experience' },
		{ name: 'Skills', link: '#skills' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'Contact', link: '#contact' }
	];

	function handleClick(event: MouseEvent): void {
		event.preventDefault(); // Prevent default link behavior

		const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
		const targetElement = document.getElementById(targetId!);

		if (targetElement) {
			const targetPosition = targetElement.offsetTop;
			const scrollPosition = targetPosition - 70; // Adjust scroll position by the offset

			window.scrollTo({
				top: scrollPosition,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="sticky top-0 z-40">
	<nav
		class="flex h-auto w-full flex-row justify-between border-b-[1px] border-b-gray-900 bg-black/70 p-5 backdrop-blur"
	>
		<ul class="flex"><li><a href="/"><strong>Shayan</strong> Delbari</a></li></ul>
		<ul class="flex space-x-4">
			{#each menuItems as item}
				<li class="hover:text-primary active:text-primary">
					<a href={item.link} on:click={handleClick}>{item.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
