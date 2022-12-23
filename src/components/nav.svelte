<script>
	import { isLoggedIn } from '../stores/auth.js';
	import { auth } from '../firebase';

	const logout = async () => {
		try {
			const res = await auth.signOut();
			$isLoggedIn = false;
			history.back();
		} catch (err) {
			console.log(err);
		}
	};
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white ">
	<a class="navbar-brand" href="/">Kelompok 3</a>
	<button
		class="navbar-toggler"
		type="button"
		data-toggle="collapse"
		data-target="#navbarNavAltMarkup"
		aria-controls="navbarNavAltMarkup"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		<div class="navbar-nav">
			<a class="nav-link active" href="/">News <span class="sr-only">(current)</span></a>
			<a class="nav-link active" href="/blog">Blogs</a>
			<a class="nav-link active" href="/aboutUs">Developers</a>
		</div>
		{#if $isLoggedIn}
			<ul class="nav navbar-nav ml-auto active">
				<a on:click={logout} class="nav-link active" href="/login">Logout</a>
			</ul>
		{/if}
	</div>
</nav>
