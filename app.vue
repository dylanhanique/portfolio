<script setup>
	const currentYear = new Date().getFullYear();
</script>

<template>
	<div class="container bg-white">
		<div class="content p-10 pb-10 lg:p-15 xl:p-25">
			<ProfileSection />
			<hr />
			<CareerSection />
			<hr />
			<TechnicalSection />
			<hr />
			<ProjectSection />
			<hr />
			<ContactSection />
		</div>
		<footer class="mt-5 rounded-b-lg bg-zinc-100 p-4">
			<p class="text-center text-sm">
				© {{ currentYear }} Dylan Hanique. Tous droits réservés.
			</p>
		</footer>
	</div>
</template>

<style scoped>
	.container {
		border-radius: 0 25px 25px 25px;
	}

	hr {
		margin: 15% 0;
		color: #e9e9e9;
	}

	@media (width >= 48rem) {
		hr {
			margin: 8% 0;
		}
	}
</style>
