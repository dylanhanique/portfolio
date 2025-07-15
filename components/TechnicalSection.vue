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
		class="mb-15 text-7xl leading-none font-extrabold text-zinc-400 uppercase"
	>
		<span class="text-black">Environnement</span><br />
		technique
	</h2>

	<div class="flex flex-wrap">
		<div v-for="(item, index) in technos" :key="index" class="mb-10 flex w-1/2">
			<div class="h-fit rounded-lg bg-gray-100 p-3 leading-none">
				<UIcon :name="item.icon" size="45" />
			</div>
			<div class="ml-4 flex flex-col justify-center">
				<span class="text-2xl font-bold">{{ item.title }}</span>
				<span>{{ item.description }}</span>
			</div>
		</div>
	</div>
</template>
