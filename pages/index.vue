<template>
	<div>
		<h1 class="font-bold text-3xl">{{ $t('hello', { name: '사용자' }) }}</h1>
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
