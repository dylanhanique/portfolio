<script setup lang="ts">
	import type { TimelineItem } from '@nuxt/ui';

	const studies = ref<TimelineItem[]>([
		{
			date: '2021 - 2022',
			title: 'Bachelor en conception et développement web • IGENSIA',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus lobortis tellus, et lacinia odio. Vivamus lacus lacus, efficitur in malesuada id, aliquam vel felis. Proin ornare vel leo id tempor.',
		},
		{
			date: '2022 - 2024',
			title: 'Master en ingénierie logicielle et chefferie de projet • IGENSIA',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus lobortis tellus, et lacinia odio. Vivamus lacus lacus, efficitur in malesuada id, aliquam vel felis. Proin ornare vel leo id tempor.',
		},
	]);

	const experiences = ref<TimelineItem[]>([
		{
			date: '2021 - 2022',
			title: 'Développeur Full Stack • ARCOS',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus lobortis tellus, et lacinia odio. Vivamus lacus lacus, efficitur in malesuada id, aliquam vel felis. Proin ornare vel leo id tempor.',
			slot: 'tech' as const,
			tech: ['JavaScript', 'Vue.js', 'PHP'],
		},
		{
			date: '2022 - 2024',
			title: 'Développeur Back-End • ATOS',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus lobortis tellus, et lacinia odio. Vivamus lacus lacus, efficitur in malesuada id, aliquam vel felis. Proin ornare vel leo id tempor.',
			slot: 'tech' as const,
			tech: ['TypeScript', 'Nest.js'],
		},
	]);
</script>

<template>
	<h2
		class="mb-10 text-4xl leading-none font-extrabold text-zinc-400 uppercase md:mb-15 md:text-left md:text-5xl lg:text-6xl xl:text-7xl"
	>
		<span class="text-black">Études</span>
		& expériences
	</h2>

	<div class="md:ml-10">
		<div
			class="flex w-fit grow items-center rounded-full border border-zinc-400 px-5 py-1 text-sm font-medium uppercase"
		>
			<UIcon name="material-symbols:school" class="mr-2 text-2xl text-black" />
			<span>Études</span>
		</div>
		<UTimeline :items="studies" class="mt-7 w-full md:w-125" size="2xs" />
	</div>

	<div class="mt-10 md:ml-10">
		<div
			class="flex w-fit grow items-center rounded-full border border-zinc-400 px-5 py-1 text-sm font-medium uppercase"
		>
			<UIcon name="material-symbols:work" class="mr-2 text-2xl text-black" />
			<span>Expériences</span>
		</div>
		<UTimeline :items="experiences" class="mt-7 w-full md:w-125" size="2xs">
			<template #tech-description="{ item }">
				<div>
					<span>{{ item.description }}</span>
					<br />
					<UBadge
						v-for="(tech, index) of item.tech"
						:key="index"
						class="my-2 mr-3 rounded-full bg-blue-500/3 p-2 font-medium text-blue-500 shadow-xs ring-1 shadow-blue-500/10 ring-blue-500/50 ring-inset"
						>{{ tech }}</UBadge
					>
				</div>
			</template>
		</UTimeline>
	</div>
</template>
