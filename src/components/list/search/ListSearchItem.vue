<template>
    <SeInput v-if="props.searchItem.type == ITEM_TYPE.INPUT" 
    :label="props.searchItem.label" :placeholder="props.searchItem.placeholder" 
    :value="props.searchItem.value"
    @updateValue="updateValue"/>
    <SeSelect v-else-if="props.searchItem.type === ITEM_TYPE.SELECT" :label="props.searchItem.label" :placeholder="props.searchItem.placeholder" :selectItems="props.searchItem.selectItems"/>
</template>

<script setup>
import { defineProps, watch, defineEmits } from 'vue';
import SeInput from '@/components/list/search/SeInput.vue';
import SeSelect from '@/components/list/search/SeSelect.vue';

const props = defineProps({
    searchItem: {
        type: Object,
        required: false
    }
});

const ITEM_TYPE = {
    INPUT: 1,
    SELECT: 2
};

watch(() => props.searchItem, (newVal, oldVal) => {
    console.log('searchTerms changed from', oldVal, 'to', newVal);
});

const emits = defineEmits(['updateValue']);

function updateValue(value) {
    emits('updateValue', {code: props.searchItem.code, value});
}

</script>

<style scoped>
.list-search-item {
    border: 1px solid #ccc;
    padding: 16px;
    margin: 8px 0;
}

.list-search-item h2 {
    margin: 0 0 8px;
}

.list-search-item p {
    margin: 0;
}
</style>