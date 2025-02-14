<template>
    <div class="page">
        <div class="left">
            <el-scrollbar class="left-scrollbar">
                <div class="components-list">
                    <div class="components-title">
                        <svg-icon icon="component" />输入型组件
                    </div>
                    <draggable :list="data" animation="300" @start="onStart" @end="onEnd" item-key="id">
                        <template #item="{ element }">
                            <div class="components-item" @click="addComponent(element)" >
                                <div class="components-body">
                                    <svg-icon :icon="element.tagIcon" :className="element.tagIcon" />
                                    {{ element.label  }}
                                </div>
                            </div>
                        </template>
                    </draggable>
                </div>
            </el-scrollbar>
        </div>
    </div>

</template>

<script lang="ts" setup>
import {ref} from "vue";

import draggable from 'vuedraggable'

interface DragElementModel {

    id: number

    label: string

    tagIcon: string


}

const data = ref<Array<DragElementModel>>([{
    id: 1,
    label: '单行文本',
    tagIcon: 'input'
}])

const addComponent = (element: DragElementModel) => {
    console.log(element)
}

const onStart = () => {
    console.error('111')
}

const onEnd = () => {
    console.error('222')
}

</script>

<style scoped lang="scss">
$selectedColor: #f6f7ff;
$lighterBlue: #409EFF;
.left-scrollbar{
  height: calc(100vh - 42px);
  overflow: hidden;
}
.left-scrollbar .el-scrollbar__wrap {
  box-sizing: border-box;
  overflow-x: hidden !important;
  margin-bottom: 0 !important;
}
.left-scrollbar .el-scrollbar__view{
  overflow-x: hidden;
}
.components-list {
  padding: 8px;
  box-sizing: border-box;
  height: 100%;
  .components-item {
    display: inline-block;
    width: 48%;
    margin: 1%;
    transition: transform 0ms !important;
  }
}
.components-title{
  font-size: 14px;
  color: #222;
  margin: 6px 2px;
  .svg-icon{
    color: #666;
    font-size: 18px;
  }
}

.components-draggable{
  padding-bottom: 20px;
}

.components-body {
  padding: 8px 10px;
  background: $selectedColor;
  font-size: 12px;
  cursor: move;
  border: 1px dashed $selectedColor;
  border-radius: 3px;
  .svg-icon{
    color: #777;
    font-size: 15px;
  }
  &:hover {
    border: 1px dashed #787be8;
    color: #787be8;
    .svg-icon {
      color: #787be8;
    }
  }
}
</style>