<script lang="ts">
	import { onMount } from 'svelte';

	let menuItems = [
		{ name: 'About', link: '#about', isActive: false },
		{ name: 'Experience', link: '#experience', isActive: false },
		{ name: 'Skills', link: '#skills', isActive: false },
		{ name: 'Projects', link: '#projects', isActive: false },
		{ name: 'Contact', link: '#contact', isActive: false }
	];

	const offset = 70; // Offset for scrolling (e.g., fixed header height)

	function handleClick(event: MouseEvent): void {
		event.preventDefault(); // Prevent default link behavior

		const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
		const targetElement = document.getElementById(targetId!);

		if (targetElement) {
			const targetPosition = targetElement.offsetTop;
			const scrollPosition = targetPosition - offset; // Adjust scroll position by the offset

			window.scrollTo({
				top: scrollPosition,
				behavior: 'smooth'
			});
		}
	}

	function observeSections(): void {
		const observerOptions = {
			root: null, // Use the viewport as the root
			rootMargin: `-${offset}px 0px 0px 0px`, // Account for the header height
			threshold: 0.9 // Consider section active when 60% of it is in view
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const targetId = entry.target.id;
				if (entry.isIntersecting) {
					// Set active state for the matching menu item
					menuItems = menuItems.map((item) => ({
						...item,
						isActive: item.link === `#${targetId}`
					}));
				}
			});
		}, observerOptions);

		// Observe all sections referenced by menu items
		menuItems.forEach(({ link }) => {
			const sectionId = link.substring(1); // Remove the '#' to get the section ID
			const section = document.getElementById(sectionId);
			if (section) {
				observer.observe(section);
			}
		});
	}

	onMount(() => {
		observeSections();
	});
</script>

<div class="sticky top-0 z-40">
	<nav
		class="flex h-auto w-full flex-row justify-between border-b-[1px] border-b-gray-900 bg-black/70 p-5 backdrop-blur"
	>
		<ul class="flex">
			<li>
				<a href="/"><strong>Shayan</strong> Delbari</a>
			</li>
		</ul>
		<ul class="flex space-x-4">
			{#each menuItems as item}
				<li>
					<a
						href={item.link}
						on:click={handleClick}
						class="transition-colors duration-200 hover:text-primary
						{item.isActive ? 'font-bold text-primary' : ''}"
					>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
