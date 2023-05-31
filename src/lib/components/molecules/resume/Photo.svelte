<script lang="ts">
	import { getSrcsetFromImport } from '$lib/utils/functions';
	import AvatarImport from '$lib/images/dima.png?width=400&format=avif;webp;png&meta&imagetools';
	import AvatarDarkImport from '$lib/images/dima.png?width=400&format=avif;webp;png&meta&imagetools';

	const avatar = getSrcsetFromImport(AvatarImport);
	const avatarDark = getSrcsetFromImport(AvatarDarkImport);
</script>

<picture class="resume-photo">
	<source srcset={avatarDark.avif} type="image/avif" media="(prefers-color-scheme: dark)" />
	<source srcset={avatarDark.webp} type="image/webp" media="(prefers-color-scheme: dark)" />
	<source srcset={avatarDark.png} type="image/png" media="(prefers-color-scheme: dark)" />

	<source srcset={avatar.avif} type="image/avif" />
	<source srcset={avatar.webp} type="image/webp" />
	<img height="200px" src={avatar.png} alt="Dimitrian" />
</picture>

<style lang="scss">
	.resume-photo {
		img {
			border-radius: 50%;
			max-width: 100%;
			max-height: 200px;
			box-sizing: border-box;
			@media (prefers-color-scheme: dark) {
				border: 3px solid var(--color--primary-shade);
			}
		}
	}
</style>
