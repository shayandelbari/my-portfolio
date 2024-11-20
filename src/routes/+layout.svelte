<script lang="ts">
	import '../app.css';
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Experience from './Experience.svelte';
	import Menu from './Menu.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	let { children } = $props();
</script>

<Menu />

<section class="px-5">
	{@render children()}
</section>

<section id="about" class="px-5">
	<About />
</section>

<section id="experience" class="px-5">
	<Experience />
</section>

<section id="skills" class="px-5">
	<Skills />
</section>

<section id="projects" class="px-5">
	<Projects />
</section>

<section id="contact" class="px-5">
	<Contact />
</section>
