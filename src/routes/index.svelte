<script>
	import { news } from '../stores/newstore.js';
	import Card from '../components/card.svelte';
</script>

<svelte:head>
	<title>News API</title>
</svelte:head>

{#each $news as berita}
	<Card card={berita} />
{/each}
