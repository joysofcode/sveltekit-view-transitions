<script lang="ts">
	import { page } from '$app/stores'
	import MakeReservation from './button.svelte'

	export let data

	$: planet = data.planets.find(
		(planet) => $page.params.planet.toLowerCase() === planet.name.toLowerCase()
	)
</script>

{#if planet}
	<div class="container">
		<div class="description">
			<img src={planet.image} alt={planet.name} style:--planet="image-{planet.name}" />

			<h1 style:--title="title-{planet.name}">{planet.name}</h1>

			<p>{planet.description}</p>

			<MakeReservation />

			<div class="details">
				{#if planet.details}
					{#each planet.details as { title, value }}
						<div class="item">
							<div>{title}</div>
							<div>{value}</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.container {
		@media (min-width: 800px) {
			max-width: 1024px;
			position: relative;
			display: grid;
			grid-template-columns: 50ch 1fr;
			margin-top: 12rem;
			margin-inline: auto;
		}

		& img {
			width: 100%;
			margin-block: 4rem;
			view-transition-name: var(--planet);

			@media (min-width: 800px) {
				position: absolute;
				width: auto;
				margin: 0;
				scale: 1.4;
				right: 0px;
				z-index: -1;
			}
		}
	}

	.description {
		align-self: center;

		& h1 {
			width: fit-content;
			font-size: 3rem;
			text-transform: capitalize;
			view-transition-name: var(--title);
		}

		& p {
			margin-top: 0.5rem;
		}

		& .details {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 2rem;
			margin-top: 2rem;
			padding-top: 2rem;
			border-top: 1px solid hsl(220 40% 14%);

			& .item {
				& :nth-child(1) {
					text-transform: uppercase;
					font-weight: 600;
				}

				& :nth-child(2) {
					font-size: 1.4rem;
					color: hsl(220 40% 90%);
					text-transform: capitalize;
				}
			}
		}
	}
</style>
