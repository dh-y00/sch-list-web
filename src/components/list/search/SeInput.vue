<template>
    <el-form-item :label="props.label">
        <el-input :placeholder="props.placeholder" 
            clearable style="width: 240px" 
            v-model="localValue"/>
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
    value: {
        type: String,
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
.se-input {
    /* Add your styles here */
}
</style>