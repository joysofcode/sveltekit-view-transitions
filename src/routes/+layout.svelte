<script lang="ts">
	import ViewTransition from './navigation.svelte'
	import Header from './header.svelte'
	import '../app.css'
</script>

<svelte:head>
	<title>Planets</title>
</svelte:head>

<div class="app">
	<ViewTransition />
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		padding-block: 2rem;
	}
</style>
