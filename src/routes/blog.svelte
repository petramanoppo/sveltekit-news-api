<script>
	import { goto } from '$app/navigation';
	import { blogs } from '../stores/blogstore.js';
	import Card from '../components/card.svelte';
	import { isLoggedIn } from '../stores/auth.js';

	if (!$isLoggedIn) {
		goto('/login');
	}
</script>

<svelte:head>
	<title>Blogs</title>
</svelte:head>

{#if $isLoggedIn}
	{#each $blogs as berita}
		<Card card={berita} />
	{/each}
{/if}
