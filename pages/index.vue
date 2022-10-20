<template>
	<div>
		<div class="title-text">Hello, World</div>
		<h1 class="font-bold text-3xl">Home</h1>
	</div>
</template>

<script setup>
/* eslint-disable no-undef */
definePageMeta({
	layout: 'default',
});

const testStore = useTestStore();

console.log('#####', testStore.count);
</script>

<style lang="scss">
.title-text {
	@include bold-text;
}
</style>
