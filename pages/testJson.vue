<template>
	<div class="test-json-page">
		<div class="button-wrapper w-full">
			<button @click="addRow">+{{ $t('add') }}</button>
		</div>
		<table class="input-table">
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
				<tr v-for="(row, idx) in rows" :key="idx">
					<td>
						<input
							v-model="row.keyValue"
							type="text"
							@input="convertIntoJson"
						/>
					</td>
					<td>
						<input v-model="row.nameValue" type="text" />
					</td>
					<td>
						<select v-model="row.typeSelected">
							<option
								v-for="option in row.typeOptions"
								:key="option"
								:value="option"
							>
								{{ option }}
							</option>
						</select>
					</td>
					<td>
						<div class="checkbox-wrapper">
							<input v-model="row.isRequired" type="checkbox" />
							<span>Required</span>
						</div>
					</td>
					<td>
						<input
							v-model="row.exampleValue"
							type="text"
							@input="convertIntoJson"
						/>
					</td>
					<td>
						<input v-model="row.description" type="text" />
						<button v-if="rows.length > 1" @click="deleteRow(idx)">
							{{ $t('delete') }}
						</button>
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
const rows = ref([
	{
		keyValue: '',
		nameValue: '',
		typeSelected: '',
		typeOptions: ['STRING', 'NUMBER', 'DATE'],
		isRequired: false,
		exampleValue: '',
		description: '',
	},
]);

const jsonText = ref('');

const addRow = () => {
	rows.value.push({
		keyValue: '',
		nameValue: '',
		typeSelected: '',
		typeOptions: ['STRING', 'NUMBER', 'DATE'],
		isRequired: false,
		exampleValue: '',
		description: '',
	});
};

const deleteRow = index => {
	rows.value.splice(index, 1);
	convertIntoJson();
};

// 테이블에 입력한 값 JSON 형식으로 변환
const convertIntoJson = () => {
	jsonText.value = '';
	rows.value.forEach((row, index) => {
		jsonText.value += `"${row.keyValue}": "${
			row.exampleValue ? row.exampleValue : ''
		}"`;
		if (index + 1 < rows.value.length) {
			jsonText.value = jsonText.value + ', \n';
		}
	});
	jsonText.value = `{\n ${jsonText.value} \n}`;
};
</script>

<style lang="scss" scoped>
.button-wrapper {
	text-align: right;
}
.input-table {
	margin-bottom: 20px;
}

.checkbox-wrapper {
	display: flex;
	justify-content: center;
	span {
		display: flex;
		align-self: center;
		margin-left: 5px;
	}
}
</style>
