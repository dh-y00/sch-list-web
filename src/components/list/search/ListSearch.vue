<template>
    <div
      :class="['content', { collapsed: isCollapsed }]"
      :style="contentStyle"
    >
    <el-form
        size="small"
        :inline="true"
        label-width="92px"
        label-position="left"
        label-suffix=":"
      >
        <ListSearchItem v-for="(searchItem, index) in props.searchItems" :key="index" 
        :search-item="searchItem" @update-value="updateSearchForm"/>
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
          size="default"
          @click="handleQuery"
          >搜索</el-button
        >
        <el-button icon="el-icon-refresh" size="default" @click="resetQuery"
          >重置</el-button
        >
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref, defineProps, computed, reactive, PropType, defineEmits } from 'vue';
import ListSearchItem from '@/components/list/search/ListSearchItem.vue';
import { SearchItemParams, SearchParamsType } from '@/components/list/search/model/SearchModel';
  const searchForm = reactive({
      domains: Array<{ key: string; value?: string }>(),
  });
  // 点击搜索，调用父类的方法
  const emits = defineEmits(['refreshData']);

  const addDomain = (searchItem: { key: string; value?: string }) => {
    searchForm.domains.push({
      key: searchItem.key,
      value: searchItem.value,
    })
  }

  const props = defineProps({
    searchItems: {
      type: Array as PropType<SearchItemParams[]>,
      required: true
    }
  });

  const isCollapsed = ref<boolean>(true);
  const maxHeight = ref("200px");


  const contentStyle = computed(() => ({
    maxHeight: isCollapsed.value ? "200px" : maxHeight.value,
    transition: "max-height 0.2s ease",
  }));

  const buttonText = computed(() => {
    return isCollapsed.value ? '展开' : '收起'
  });

  // watch(() => props.searchItems, (newVal) => {
  //   addDomain(newVal)
  // });
  // eslint-disable-next-line
  function updateSearchForm(value: {[key: string]: any}) {
    let flag = false;
    searchForm.domains.forEach((domain) => {
      if (domain.key === value.code) {
        domain.value = value.value
        flag = true
      }
    })
    if(!flag) {
      addDomain({
        key: value.code,
        value: value.value
      })
    }
  }

  /**
   * 切换展开/收起
   */
  const toggle = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  const handleQuery = () => {

    // 查询逻辑
    searchForm.domains.forEach((domain) => {
      console.error(domain.key, domain.value)
    })
    emits('refreshData', buildSearchParams());
  };

  const resetQuery = () => {
    // 重置逻辑
  };

  const buildSearchParams = (): SearchParamsType => {
    const searchParams: SearchParamsType = {};
    searchForm.domains.forEach((domain) => {
      searchParams[domain.key] = domain.value;
    })
    return searchParams;
  }
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