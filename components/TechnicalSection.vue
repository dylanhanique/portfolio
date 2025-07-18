<script setup lang="ts">
	const technos = [
		{
			title: 'Nuxt',
			description: 'Vue framework',
			icon: 'material-icon-theme:nuxt',
		},
		{
			title: 'NestJS',
			description: 'Node.js framework',
			icon: 'material-icon-theme:nest',
		},
		{
			title: 'Vue.js',
			description: 'Javascript framework',
			icon: 'material-icon-theme:vue',
		},
		{
			title: 'Figma',
			description: 'Design tool',
			icon: 'material-icon-theme:figma',
		},
		{
			title: 'Git',
			description: 'Version control software',
			icon: 'material-icon-theme:git',
		},
		{
			title: 'Jira',
			description: 'Agile project tracking software',
			icon: 'devicon:jira',
		},
	];
</script>

<template>
	<h2
		class="mb-15 text-4xl leading-none font-extrabold text-zinc-400 uppercase md:text-5xl lg:text-6xl xl:text-7xl"
	>
		<span class="text-black">Environnement</span><br />
		technique
	</h2>

	<div class="flex flex-wrap">
		<div
			v-for="(item, index) in technos"
			:key="index"
			class="mb-10 flex w-75 sm:w-1/2"
		>
			<div class="h-fit rounded-lg bg-gray-100 p-3 leading-none">
				<UIcon :name="item.icon" class="text-4xl" />
			</div>
			<div class="ml-4 flex flex-col justify-center">
				<span class="text-lg font-bold md:text-2xl">{{ item.title }}</span>
				<span>{{ item.description }}</span>
			</div>
		</div>
	</div>
</template>
