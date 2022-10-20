<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="default-layout">
		<div class="flex flex-col min-h-screen">
			<slot name="header">
				<PageNavigation />
			</slot>
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
	</div>
</template>

<style lang="scss"></style>
