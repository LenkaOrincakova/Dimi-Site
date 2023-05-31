<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import Experience from '$lib/components/organisms/Experience.svelte';
	import Projects from '$lib/components/organisms/Projects.svelte';
	import Semesters2 from '$lib/components/organisms/Semesters2.svelte';
	import type { ExperienceEntry, Project, Semester2 } from '$lib/utils/types';

	// Importing these images here even if they're not used
	// So that Vite preprocesses them
	// Otherwise, because they're only imported on the server side
	// Vite is not picking them up
	// https://github.com/sveltejs/kit/issues/5240
	
	export let data: {
		experienceEntries: ExperienceEntry[];
		semesters2: Semester2[];
	};

	let { experienceEntries, semesters2 } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<!-- <Semesters2 {projects} /> -->

	<Experience  entries={experienceEntries} />
</div>
