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
					<td class="flex content-center justify-center">
						<input v-model="isRequired" type="checkbox" />
						Required
					</td>
					<td>
						<input v-model="exampleValue" type="text" />
					</td>
					<td>
						<input v-model="description" type="text" />
					</td>
				</tr>
			</tbody>
		</table>

		<div class="json-area-wrapper">
			<textarea
				v-model="jsonText"
				name="json-area"
				cols="30"
				rows="10"
			></textarea>
		</div>
	</div>
</template>

<script setup>
const keyValue = ref('');
const nameValue = ref('');
const typeSelected = ref('');
const typeOptions = ['STRING', 'NUMBER', 'DATE'];
const isRequired = ref(false);
</script>

<style lang="scss" scoped></style>
