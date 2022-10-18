<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div>
		<NuxtWelcome />
	</div>
</template>

<script setup>
// eslint-disable-next-line no-undef
const testStore = useTestStore();

console.log('#####', testStore.count);
</script>

<style lang="scss" scoped></style>
