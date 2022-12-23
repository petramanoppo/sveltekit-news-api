<svelte:head>
	<title>Developer</title>
</svelte:head>

<div class="container mt-5" id="developer">
	<h2 class="text-center mb-4">Our Developers</h2>
	<div class="row">
		<div class="col-md-3">
			<div class="card mt-3">
				<div class="inner">
					<img src="/rio.jpg" class="card-img-top" alt="..." />
				</div>
				<div class="card-body">
					<h5 class="card-title">Rio Febrian</h5>
					<p class="card-text">"Be yourself and never surrender"</p>
					<a href="https://www.instagram.com/riiofeb/" target="_blank"
						><i class="fab fa-instagram fa-2x" /></a
					>
				</div>
				<div class="card-footer text-muted text-center">00000048251</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="card mt-3">
				<div class="inner">
					<img src="/bepe.jpg" class="card-img-top" alt="..." />
				</div>
				<div class="card-body">
					<h5 class="card-title">Raihan Bayu</h5>
					<p class="card-text">"Nothing lasts forever, we can change the future"</p>
					<a href="https://www.instagram.com/raihanbepe/" target="_blank"
						><i class="fab fa-instagram fa-2x" /></a
					>
				</div>
				<div class="card-footer text-muted text-center">00000050623</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="card mt-3">
				<div class="inner">
					<img src="/leo.jpg" class="card-img-top" alt="..." />
				</div>
				<div class="card-body">
					<h5 class="card-title">Leo Candra</h5>
					<p class="card-text">"Let me show you the art of killing! "</p>
					<a href="https://www.instagram.com/leocand_/" target="_blank"
						><i class="fab fa-instagram fa-2x" /></a
					>
				</div>
				<div class="card-footer text-muted text-center">00000044308</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="card mt-3">
				<div class="inner">
					<img src="/petra.jpg" class="card-img-top" alt="..." />
				</div>
				<div class="card-body">
					<h5 class="card-title">Arnoldus Yitzhak Petra Manoppo</h5>
					<p class="card-text">"Ga maen ml"</p>
					<a href="https://www.instagram.com/petra167_/" target="_blank"
						><i class="fab fa-instagram fa-2x" /></a
					>
				</div>
				<div class="card-footer text-muted text-center">00000048162</div>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.1);
	}

	.card {
		margin: 20px 10px;
		height: 54vh;
	}

	.card-body {
		text-align: center;
	}

	.card-img-top {
		width: 100%;
		height: 30vh;
		object-fit: cover;
	}

	.inner {
		overflow: hidden;
	}

	.inner img {
		transition: all 1.2s ease;
	}

	.inner:hover img {
		transform: scale(1.3);
	}

	i {
		margin-bottom: 15px;
	}
</style>
