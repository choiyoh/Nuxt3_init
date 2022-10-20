<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="second-layout">
		<slot name="header"> 헤더 자리 </slot>
		<div class="flex-1 w-full flex flex-col">
			<div
				class="relative flex-1 flex flex-col mx-auto max-w-8xl w-full h-full"
			>
				<NuxtPage />
			</div>
		</div>
		<slot name="footer">
			<PageFooter />
		</slot>
	</div>
</template>

<style lang="scss"></style>
