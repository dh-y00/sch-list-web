<template>
    <SeInput v-if="props.searchItem?.type == SearchTypeEnum.INPUT.valueOf()" 
    :label="props.searchItem.label" :placeholder="props.searchItem.placeholder" 
    :value="props.searchItem.value"
    @updateValue="updateValue"/>
    <SeSelect v-else-if="props.searchItem?.type === SearchTypeEnum.SELECT.valueOf()" 
    :label="props.searchItem.label" :placeholder="props.searchItem.placeholder" 
    :selectItems="props.searchItem.selectItems"/>
</template>

<script setup lang="ts">
import { defineProps, watch, defineEmits, PropType } from 'vue';
import SeInput from '@/components/list/search/SeInput.vue';
import SeSelect from '@/components/list/search/SeSelect.vue';
import { SearchItemParams } from '@/components/list/search/model/SearchModel';
import {SearchTypeEnum} from '@/constant/SearchConstant'

const props = defineProps({
    searchItem: {
        type: Object as PropType<SearchItemParams>,
        required: false
    }
});

watch(() => props.searchItem, (newVal, oldVal) => {
    console.log('searchTerms changed from', oldVal, 'to', newVal);
});

const emits = defineEmits(['updateValue']);

// eslint-disable-next-line
function updateValue(value: any) {
    emits('updateValue', {code: props.searchItem?.code, value});
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