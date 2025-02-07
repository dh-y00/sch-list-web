<template>
    <SeInput label="测试" placeholder="请输入测试内容"/>
    <SeSelect label="测试下拉框" placeholder="请输入测试下拉选择内容" :selectItems="seSelectVal"/>
</template>

<script setup>
import { ref } from 'vue';
import SeInput from '@/components/list/search/SeInput.vue';
import SeSelect from '@/components/list/search/SeSelect.vue';

const seSelectVal = ref([{
    key: 1,
    value: "测试选项"
}]);

// const props = defineProps({
//     searchItems: {
//         type: Object,
//         required: false
//     }
// });

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