<script>
	export let card;
</script>

<div class="mt-5">
	<div class="d-flex justify-content-center mb-4 mt-5 pl-5 pr-5">
		<div class="card " style="width: 50rem;">
			<img src={card.image} class="card-img-top" alt="news" />
			<div class="card-body">
				<h5 class="text-center">{card.title}</h5>
				<p class="card-text text-center">
					{card.description}
				</p>
				<div class="d-flex justify-content-center">
					<a href={`${card.homeUrl}`} class="btn btn-light" target="_blank">Read More</a>
				</div>
			</div>
		</div>
	</div>
</div>
