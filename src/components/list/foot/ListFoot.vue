<template>
    <div class="list-foot">
        <el-pagination
            :current-page="props.pagination?.current"
            :page-size="props.pagination.pageSize"
            :page-sizes="pageSizes"
            :size="size"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="props.pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            />
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref, PropType, defineEmits } from 'vue';
import type { ComponentSize } from 'element-plus'
import { PaginationBaseParams } from '@/components/list/foot/model/PaginationModel';

const props = defineProps({
    pagination: {
        type: Object as PropType<PaginationBaseParams>,
        required: true
    },
    disabled: {
        type: Boolean,
        default: false
    },
    background: {
        type: Boolean,
        default: true
    }
});

const emits = defineEmits(['updateCurrent', 'updatePageSize']);

const pageSizes = ref<Array<number>>([10, 50, 100, 200, 400, 1000])

const size = ref<ComponentSize>('default')


const handleSizeChange = (val: number) => {
    console.log(`每页 ${val} 条`);
    emits('updatePageSize', val);
}

const handleCurrentChange = (val: number) => {
    console.log(`当前页: ${val}`);
    emits('updateCurrent', val);
}

</script>

<style scoped>
.list-foot {
    text-align: center;
    padding: 10px;
    background-color: #f9f9f9;
}
</style>