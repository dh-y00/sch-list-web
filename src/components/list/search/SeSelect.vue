<template>
    <el-form-item :label="props.label">
        <el-select :placeholder="props.placeholder" style="width: 240px" v-model="localValue">
            <el-option v-for="item in props.selectItems" :key="item.key" 
            :label="item.value" :value="item.key"  />
        </el-select>
    </el-form-item>
</template>

<script setup lang="ts">

import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
    label: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: false,
    },
    selectItems: {
        type: Array,
        required: false
    }
});

const emits = defineEmits(['updateValue']);

const localValue = ref(props.value);

watch(() => props.value, (newValue) => {
    localValue.value = typeof newValue === 'object' ? newValue : '';
});

watch(localValue, (newValue) => {
    emits('updateValue', newValue);
});

</script>

<style scoped>
/* Your component styles go here */
.se-select-item {
}
</style>