<template>
  <div>
    <el-table
      ref="singleTableRef"
      :data="props.tableDatas"
      :row-key="row => row.id"
    >
    <el-table-column
        type="selection"
        reserve-selection
        width="60"
        fixed
      ></el-table-column>
      <el-table-column type="index" label="序号" width="50" align="center" />
      <el-table-column v-for="(item) in props.tableColItems" :key="item.code" :label="item.name" :align="item.name? item.name: 'center'" :prop="item.code">
        <template #default="{ row }">
          {{ row[item.code] ? row[item.code] : "--" }}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default="scope">
          <div>
            <el-button link type="primary" size="small" 
              @click="handAction(scope.$index, scope.row, btn)" v-for="(btn, index) in props.actionBtns" :key="index">
              {{ btn.name }}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, defineProps, watch } from 'vue';
import { ElTable } from 'element-plus'
import { TableColParams, TableRowBtnParams } from '@/components/list/table/model/TableModel';


const props = defineProps({
    tableColItems: {
      type: Array as PropType<TableColParams[]>,
      required: true
    },
    tableDatas: {
      type: Array as PropType<object[]>,
      required: true
    },
    actionBtns: {
      type: Array as PropType<TableRowBtnParams[]>,
      required: false
    }
});

watch(props.tableDatas, (newVal) => {
    console.log('tableDatas changed', newVal);
})

const handAction = (index: number, row: object, btn: TableRowBtnParams) => {
    console.log('click row1', props.actionBtns);
    console.log('click row', index, row, btn);
}

const singleTableRef = ref<InstanceType<typeof ElTable>>()

</script>

<style scoped>
.table {
    /* Component styles go here */
}
</style>