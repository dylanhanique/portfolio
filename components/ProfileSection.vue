<template>
	<header class="grid grid-cols-12">
		<div class="col-start-1 col-end-5">
			<NuxtImg
				id="profile-avatar"
				preload
				loading="lazy"
				src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				class="w-50 rounded-full object-cover shadow-lg"
			/>
			<h1 class="my-7 text-5xl leading-13 font-extrabold text-black">
				Dylan <br />
				Hanique
			</h1>
			<p class="mb-7 leading-none text-zinc-600">
				A la recherche de mon <br />
				premier contrat en freelance
			</p>
			<div class="text-3xl text-black">
				<UButton
					icon="mdi-linkedin"
					class="cursor-pointer text-3xl text-black hover:text-zinc-400"
					variant="link"
					to=""
				/>
				<UButton
					icon="mdi-github"
					class="cursor-pointer text-3xl text-black hover:text-zinc-400"
					variant="link"
					to=""
				/>
			</div>
		</div>

		<div class="right-section col-start-6 col-end-13 mt-5">
			<h2 class="text-7xl leading-none font-extrabold text-zinc-400 uppercase">
				<span class="text-black">Développeur</span><br />
				Full-Stack
			</h2>
			<p class="mt-10 w-7/8 leading-5 text-zinc-600">
				Passionné d'informatique depuis mon enfance, j'ai eu l'opportunité de
				développer des applications dans des environnements très différents :
				d'une petite entreprise d'assurance au plus près des besoins métier, à
				un projet spatial d'envergure au sein d'une grande entreprise, où j'ai
				contribué à des systèmes complexes et innovants.
			</p>
			<span
				class="years-experience my-10 flex items-center leading-4 font-medium text-black"
			>
				<span class="mr-1 text-5xl font-bold">3</span> Ans <br />d'Expérience
			</span>
			<div class="profile-buttons">
				<UButton
					class="resume-button mr-5 cursor-pointer rounded-full bg-white px-4 py-2 text-zinc-600 ring-2 ring-gray-800 hover:bg-gray-50"
					>Télécharger CV</UButton
				>
				<UButton
					class="contact-button cursor-pointer rounded-full bg-white px-4 py-2 text-zinc-600 ring-2 ring-gray-300 hover:bg-gray-50"
					>Contact</UButton
				>
			</div>
		</div>
	</header>
</template>
