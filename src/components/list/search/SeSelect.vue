<template>
    <el-form-item :label="props.label">
        <el-select :placeholder="props.placeholder" style="width: 240px">
            <el-option v-for="item in props.selectItems" :key="item.key" :label="item.value" :value="item.key" />
        </el-select>
    </el-form-item>
</template>

<script setup>

import { defineProps } from 'vue';

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

</script>

<style scoped>
/* Your component styles go here */
.se-select-item {
}
</style>