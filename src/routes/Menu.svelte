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

<nav class="flex w-full flex-row justify-between p-5">
	<ul class="flex"><li><a href="/"><strong>Shayan</strong> Delbari</a></li></ul>
	<ul class="flex space-x-4">
		{#each menuItems as item}
			<li class="hover:text-primary"><a href={item.link}>{item.name}</a></li>
		{/each}
	</ul>
</nav>
