<template>
    <SeInput v-if="props.searchItem.type == ITEM_TYPE.INPUT" label="测试" placeholder="请输入测试内容"/>
    <SeSelect v-else-if="props.searchItem.type === ITEM_TYPE.SELECT" label="测试下拉框" placeholder="请输入测试下拉选择内容" :selectItems="seSelectVal"/>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue';
import SeInput from '@/components/list/search/SeInput.vue';
import SeSelect from '@/components/list/search/SeSelect.vue';

const seSelectVal = ref([{
    key: 1,
    value: "测试选项"
}]);

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