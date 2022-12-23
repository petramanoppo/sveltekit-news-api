<script>
	import { auth, googleProvider } from '../firebase.js';
	import { user, isLoggedIn } from '../stores/auth.js';
	import { signInWithPopup } from 'firebase/auth';

	import { goto } from '$app/navigation';

	const login = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			$user = res.user;
			$isLoggedIn = true;
			await goto('/blog');
		} catch (err) {
			console.error(err);
		}
	};
</script>

<div class="container">
	<div class="row mt-5">
		<div class="col d-flex justify-content-center">
			<h3 class="mt-3">Login With Google</h3>
		</div>
	</div>
	<div class="row mt-5">
		<div class="col text-center">
			<button on:click={login} class="btn btn-primary">Login</button>
		</div>
	</div>
</div>
