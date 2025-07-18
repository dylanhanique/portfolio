<template>
	<header class="grid grid-cols-12">
		<div
			class="col-start-1 col-end-13 flex flex-col items-center md:col-end-5 md:items-start"
		>
			<NuxtImg
				id="profile-avatar"
				preload
				loading="lazy"
				src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				class="w-50 rounded-full object-cover shadow-lg"
			/>
			<h1
				class="my-7 text-center text-5xl leading-13 font-extrabold text-black md:text-left xl:text-6xl"
			>
				Dylan <br />
				Hanique
			</h1>
			<p class="mb-7 text-center leading-none md:text-left">
				A la recherche d'un contrat en freelance
			</p>
			<div class="text-3xl text-black">
				<UButton
					icon="mdi-linkedin"
					class="cursor-pointer text-3xl text-black hover:text-zinc-400"
					variant="link"
					target="_blank"
					to="https://fr.linkedin.com/in/dylanhanique"
				/>
				<UButton
					icon="mdi-github"
					class="cursor-pointer text-3xl text-black hover:text-zinc-400"
					variant="link"
					target="_blank"
					to="https://github.com/dylanhanique"
				/>
			</div>
		</div>

		<div
			class="col-start-1 col-end-13 mt-5 flex flex-col items-center md:col-start-6 md:items-start"
		>
			<h2
				class="hidden text-5xl leading-none font-extrabold text-zinc-400 uppercase md:inline lg:text-6xl xl:text-7xl"
			>
				<span class="text-black">Développeur</span><br />
				Full-Stack
			</h2>
			<p class="w-3/4 text-left leading-5 text-zinc-600 md:mt-10">
				Passionné d'informatique depuis mon enfance, j'ai eu l'opportunité de
				développer des applications dans des environnements très différents :
				d'une petite entreprise d'assurance au plus près des besoins métier, à
				un projet spatial d'envergure au sein d'une grande entreprise, où j'ai
				contribué à des systèmes complexes et innovants.
			</p>
			<span class="my-10 flex items-center leading-4 font-medium text-black">
				<span class="mr-1 text-5xl font-bold">3</span> Ans <br />d'Expérience
			</span>
			<div>
				<UButton
					class="hover:bg-gray-0 mr-5 cursor-pointer rounded-full bg-white px-4 py-2 text-blue-500 ring-1 ring-blue-500 hover:bg-gray-50 hover:text-blue-600 hover:ring-blue-600"
					>Télécharger CV</UButton
				>
				<UButton
					to="#contact"
					class="cursor-pointer rounded-full bg-white px-4 py-2 text-zinc-600 ring-1 ring-gray-300 hover:bg-gray-50 hover:text-zinc-700 hover:ring-gray-400"
					>Contact</UButton
				>
			</div>
		</div>
	</header>
</template>
