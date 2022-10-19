<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="title-text">Hello, World</div>
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
