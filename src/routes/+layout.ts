import planets from '$lib/data/planets.json'

export const prerender = true

export async function load() {
	return { planets }
}
