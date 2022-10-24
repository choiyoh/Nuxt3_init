<template>
	<nav
		class="gnb h-20 flex items-center justify-between space-x-4 border-b lg:border-gray-900/10"
	>
		<div class="main-logo-wrapper ml-10">
			<img src="@/assets/images/dave_BI_basic_01@3x 4.png" alt="logo" />
		</div>
		<div class="link-wrapper">
			<NuxtLink class="text-xl mx-2" to="/">{{ $t('menu.main') }}</NuxtLink>
			<NuxtLink class="text-xl mx-2" to="/auth/login">{{
				$t('menu.login')
			}}</NuxtLink>
			<NuxtLink class="text-xl mx-2" to="/testJson">JSON 테스트</NuxtLink>
		</div>
		<div class="language-selector pr-10">
			<select id="locale-select" v-model="$i18n.locale">
				<option value="ko">한국어</option>
				<option value="en">English</option>
			</select>
		</div>
	</nav>
</template>

<style lang="scss">
.gnb {
	background: white;
	color: $dave-black;

	.main-logo-wrapper {
		width: 100px;
	}
}
</style>
