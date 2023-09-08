<script lang="ts">
	import { page } from '$app/stores'

	const paths = [
		{ name: 'Planets', path: '/' },
		{ name: 'Explore', path: '/explore' },
		{ name: 'Flights', path: '/flights' },
		{ name: 'About', path: '/about' },
	]
</script>

<header>
	<nav class="links">
		{#each paths as { name, path }}
			{@const active = $page.url.pathname === path ? 'page' : null}
			<a aria-current={active} href={path}>{name}</a>
		{/each}
	</nav>
</header>

<style>
	header {
		max-width: 400px;
		margin-inline: auto;
		view-transition-name: header;
	}

	nav {
		display: flex;
		justify-content: space-evenly;
		gap: 2rem;

		& a {
			position: relative;
			font-weight: 600;
			color: hsl(220 20% 80%);
			transition: color 0.3s ease;

			&[aria-current='page'],
			&:hover {
				color: hsl(220 20% 100%);
			}

			&[aria-current='page']::before {
				--size: 8px;
				content: '';
				position: absolute;
				top: -10px;
				left: calc(50% - var(--size));
				border: var(--size) solid transparent;
				border-top: var(--size) solid hsl(16 100% 50%);
				view-transition-name: active-page;
			}
		}
	}
</style>
