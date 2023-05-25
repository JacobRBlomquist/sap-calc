<script lang="ts">
	import type { InputRecipe } from '../types/sap.types';

	let Input = {
		oils: [
			{
				name: 'Coconut Oil',
				NaOHSap: 0.183,
				id: 1,
				lauric: 12,
				linoleic: 13,
				linolenic: 23,
				myristic: 0,
				oleic: 1,
				palmitic: 3,
				ricinoleic: 0,
				stearic: 0,
				grams: 655
			}
		],
		lyeConcentrationPercentage: 30,
		superfatPercentage: 5,
		fragranceGrams: 10
	} satisfies InputRecipe;

	let NaOHGrams = 0;
	$: {
        NaOHGrams = 0;
		for (let oil of Input.oils) {
			NaOHGrams += oil.grams * oil.NaOHSap;
		}
	}
</script>

<input type="number" bind:value={Input.oils[0].grams} />

<div>g:{Input.oils[0].grams}</div>
<div>naoh:{NaOHGrams}</div>
<div>sap:{Input.oils[0].NaOHSap}</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
