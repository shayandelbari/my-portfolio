<script>
	let menuItems = [
		// { name: 'Home', link: '/' },
		{ name: 'About', link: '#about' },
		{ name: 'Experience', link: '#experience' },
		{ name: 'Skills', link: '#skills' },
		{ name: 'Projects', link: '#projects' },
		{ name: 'Contact', link: '#contact' }
	];
</script>

<div class="sticky top-0 z-40 border-b-[1px] border-b-gray-900 bg-black/70 backdrop-blur">
	<nav class="flex h-auto w-full flex-row justify-between p-5">
		<ul class="flex"><li><a href="/"><strong>Shayan</strong> Delbari</a></li></ul>
		<ul class="flex space-x-4">
			{#each menuItems as item}
				<li class="hover:text-primary"><a href={item.link}>{item.name}</a></li>
			{/each}
		</ul>
	</nav>
</div>
