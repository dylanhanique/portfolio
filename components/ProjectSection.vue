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
		class="mb-15 text-center text-7xl leading-none font-extrabold text-zinc-400 uppercase"
	>
		<span class="text-black">Projets</span><br />
		personnels
	</h2>

	<div class="flex gap-30">
		<div
			v-for="(item, index) in projects"
			:key="index"
			class="w-1/2 rounded-xl border border-gray-200 bg-gray-100 p-4"
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
					class="mr-3 ml-2 rounded-full bg-gray-200 p-2 text-xs font-light text-gray-600"
					>{{ tech }}</UBadge
				>
			</div>
		</div>
	</div>
</template>
