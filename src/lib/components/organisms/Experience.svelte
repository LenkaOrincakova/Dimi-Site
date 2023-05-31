<script lang="ts">
	import ExperienceCard from '$lib/components/molecules/ExperienceCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { ExperienceEntry } from '$lib/utils/types';
	import Button from '../atoms/Button.svelte';

	export let entries: ExperienceEntry[];
</script>



<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}
</style>
