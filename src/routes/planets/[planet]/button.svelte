<script lang="ts">
	import LoadingIcon from './loading.svelte'
	import CheckIcon from './check.svelte'

	type State = 'idle' | 'loading' | 'success' | 'error'
	let state: State = 'idle'

	function transition(action: () => void) {
		// @ts-ignore
		if (!document.startViewTransition) {
			action()
			return
		}
		// @ts-ignore
		document.startViewTransition(action)
	}

	function makeReservation() {
		if (state !== 'idle') return

		transition(() => (state = 'loading'))

		Math.random() > 0.5
			? setTimeout(() => transition(() => (state = 'success')), 2000)
			: setTimeout(() => transition(() => (state = 'error')), 2000)

		setTimeout(() => transition(() => (state = 'idle')), 3000)
	}
</script>

<button on:click={makeReservation} data-state={state}>
	{#if state === 'idle'}
		Make reservation
	{:else if state === 'loading'}
		<LoadingIcon />
		Making reservation...
	{:else if state === 'success'}
		<CheckIcon />
		Your ticket has been reserved
	{:else if state === 'error'}
		No tickets available
	{/if}
</button>

<style>
	:global(html)::view-transition-old(reservation),
	:global(html)::view-transition-new(reservation) {
		width: 100%;
		height: 100%;
	}

	button {
		--background: hsl(220 40% 28%);

		all: unset;
		margin-top: 2rem;
		padding: 1rem;
		font-weight: 600;
		background-color: var(--background);
		text-shadow: 1px 1px 1px hsl(0 0% 0% / 60%);
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;
		view-transition-name: reservation;

		&[data-state='loading'],
		&[data-state='success'] {
			display: flex;
			gap: 0.5rem;
		}

		&[data-state='loading'] {
			--background: hsl(60 40% 28%);
		}

		&[data-state='success'] {
			--background: hsl(120 40% 28%);
		}

		&[data-state='error'] {
			--background: hsl(9 40% 28%);
		}
	}
</style>
