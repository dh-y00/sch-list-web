<template>
    <ListSearch :searchItems="searchItems"/>
    <ListTable />
</template>
<script setup lang="ts">
import ListSearch from '@/components/list/search/ListSearch.vue';
import ListTable from '@/components/list/table/ListTable.vue';
import { ref } from 'vue';
import { SearchItemParams } from '@/components/list/search/model/SearchModel';


const searchItems = ref<Array<SearchItemParams>>([
    {
        type: '1',
        code: "test",
        value: "",
        label: "测试111",
        placeholder: "请输入测试内容"
    }, {
        type: '2',
        label: "测试下拉框",
        code: "sex",
        placeholder: "请输入测试下拉选择内容",
        selectItems: [
            {
                key: "1",
                value: "测试选项"
            }
        ]
    }
]);
</script>

<style lang="css">
</style>