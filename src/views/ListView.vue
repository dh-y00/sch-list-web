<template>
    <ListSearch :searchItems="searchItems"/>
</template>
<script setup>
import ListSearch from '@/components/list/ListSearch.vue';
import { ref } from 'vue';
const searchItems = ref([
    {
        type: 1,
        code: "test",
        value: "",
        label: "测试",
        placeholder: "请输入测试内容"
    }, {
        type: 2,
        label: "测试下拉框",
        code: "sex",
        placeholder: "请输入测试下拉选择内容",
        selectItems: [
            {
                key: 1,
                value: "测试选项"
            }
        ]
    }
]);
</script>

<style lang="css">
</style>