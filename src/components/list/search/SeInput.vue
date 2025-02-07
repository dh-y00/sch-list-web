<template>
    <el-form-item :label="props.label">
        <el-input :placeholder="props.placeholder" clearable style="width: 240px" />
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
    }
});
</script>

<style scoped>
.se-input {
    /* Add your styles here */
}
</style>