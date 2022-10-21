<template>
	<div class="test-json-page">
		<table>
			<thead>
				<tr>
					<td>Key*</td>
					<td>Name</td>
					<td>Type</td>
					<td>Required</td>
					<td>Example value</td>
					<td>Description</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<input v-model="keyValue" type="text" />
					</td>
					<td>
						<input v-model="nameValue" type="text" />
					</td>
					<td>
						<select v-model="typeSelected">
							<option
								v-for="option in typeOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
const keyValue = ref('');
const nameValue = ref('');
const typeSelected = ref('');
const typeOptions = ['STRING', 'NUMBER', 'DATE'];
</script>

<style lang="scss" scoped></style>
