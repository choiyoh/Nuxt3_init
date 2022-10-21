<template>
	<nav class="gnb h-20 flex items-center justify-center space-x-4">
		<NuxtLink class="text-xl" to="/">{{ $t('menu.main') }}</NuxtLink>
		<NuxtLink class="text-xl" to="/auth/login">{{ $t('menu.login') }}</NuxtLink>
		<div class="language-selector">
			<select id="locale-select" v-model="$i18n.locale">
				<option value="ko">한국어</option>
				<option value="en">English</option>
			</select>
		</div>
	</nav>
</template>

<style lang="scss">
.gnb {
	background: #45b322;
}
</style>
