<template>
    <div
      :class="['content', { collapsed: isCollapsed }]"
      :style="contentStyle"
    >
    <el-form
        ref="queryForm"
        size="small"
        :inline="true"
        label-width="92px"
        label-position="left"
        label-suffix=":"
      >
        <ListSearchItem v-for="(searchItem, index) in props.searchItems" :key="index" :search-item="searchItem"/>
      </el-form>
    </div>
    <div class="form-op-container">
      <el-button type="text" @click="toggle" v-if="parseInt(maxHeight) > 210">
        <div class="button-text">
          {{ buttonText }}
          <div :class="{ isTransIcon: !isCollapsed }">
            <span class="iconfont icon-zhankai"></span>
          </div>
        </div>
      </el-button>
      <div class="header_btns left_spacing">
        <el-button
          type="primary"
          icon="el-icon-search"
          size="mini"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery"
          >重置</el-button
        >
      </div>
    </div>
</template>
<script setup>
import { ref, watch, defineProps, onMounted, computed } from 'vue';
import ListSearchItem from '@/components/list/search/ListSearchItem.vue';
  const props = defineProps({
    searchItems: {
      type: Array,
      required: true
    }
  });

  const isCollapsed = ref(true);
  const maxHeight = ref("200px");
  const msg = ref("200px");


  const contentStyle = computed(() => ({
    maxHeight: isCollapsed.value ? "200px" : maxHeight.value,
    transition: "max-height 0.2s ease",
  }));

  watch(() => props.searchItems, (newVal, oldVal) => {
    console.log('searchTerms changed from', oldVal, 'to', newVal);
  });

  onMounted(() => {
    console.log(`the component is now mounted.`)
    msg.value = "aaaaa"
  })

  const handleQuery = () => {
    // 查询逻辑
  };

  const resetQuery = () => {
    // 重置逻辑
  };
</script>
<style lang="css">
  .content {
    overflow: hidden;
  }
  .left_spacing {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-op-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: 10px;
  }
  .button-text {
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 12px;
    .icon-zhankai {
      font-size: 11px;
    }
  }
</style>