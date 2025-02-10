<template>
  <div>
    <el-table
      ref="tableRef"
      :data="tableMockData"
    >
    <el-table-column
        type="selection"
        reserve-selection
        width="60"
        prop="date"
        fixed
      ></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let tableMockData = ref([{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]);

</script>

<style scoped>
.table {
    /* Component styles go here */
}
</style>