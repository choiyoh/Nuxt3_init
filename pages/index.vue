<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>Hello, World</div>
</template>

<script setup>
/* eslint-disable no-undef */
definePageMeta({
	layout: 'default',
});

const testStore = useTestStore();

console.log('#####', testStore.count);
</script>

<style lang="scss" scoped></style>
