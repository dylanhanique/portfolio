<script setup lang="ts">
	const projects = [
		{
			title: 'My cool project',
			image: '/project1.jpg',
			technos: ['Vue.js'],
		},
		{
			title: 'My second cool project',
			image: '/project2.jpg',
			technos: ['NestJS'],
		},
	];
</script>

<template>
	<h2
		class="mb-15 text-center text-4xl leading-none font-extrabold text-zinc-400 uppercase md:text-5xl lg:text-6xl xl:text-7xl"
	>
		<span class="text-black">Projets</span><br />
		personnels
	</h2>

	<div class="mb-25 flex flex-col gap-10 md:flex-row lg:gap-30">
		<div
			v-for="(item, index) in projects"
			:key="index"
			class="w-full rounded-xl border border-gray-200 bg-gray-100 p-4"
		>
			<NuxtImg
				preload
				loading="lazy"
				:src="item.image"
				class="h-75 w-full rounded-xl object-cover"
			/>

			<div class="mt-5">
				<h3 class="mb-4 ml-3 text-xl font-semibold">{{ item.title }}</h3>
				<UBadge
					v-for="(tech, index) of item.technos"
					:key="index"
					class="mr-3 ml-2 rounded-full bg-blue-500/3 p-2 text-xs font-light text-blue-500 shadow-xs ring-1 shadow-blue-500/10 ring-blue-500/50 ring-inset"
					>{{ tech }}</UBadge
				>
			</div>
		</div>
	</div>
</template>
