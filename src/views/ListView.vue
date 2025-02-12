<template>
    <ListSearch :searchItems="searchItems" v-on:refreshData="searchDataRefresh"/>
    <ListTable :tableColItems="tableColItems" 
        :tableDatas="tableDatas" :actionBtns="tableRowActionBtnItems"/>
    <ListFoot :pagination="pagination" v-on:updateCurrent="updateCurrent" v-on:updatePageSize="updatePageSize"/>
</template>
<script setup lang="ts">
import ListSearch from '@/components/list/search/ListSearch.vue';
import ListTable from '@/components/list/table/ListTable.vue';
import ListFoot from '@/components/list/foot/ListFoot.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { SearchItemParams, SearchParamsType } from '@/components/list/search/model/SearchModel';
import { TableColParams, TableRowBtnParams } from '@/components/list/table/model/TableModel';
import { PaginationBaseParams } from '@/components/list/foot/model/PaginationModel';
import listConfigApi from '@/http/api/ListConfigApi';
import listDataApi from '@/http/api/ListDataApi';
import { ListDataParams } from '@/http/model/ListDataModel';
import { BtnTypeEnum } from '@/constant/BtnConstant';

const route = useRoute();
const listId = ref<string>(route.params.listId as string);
// const queryParam = ref(route.query.paramName); // 替换为你的查询参数名称
// 所搜框元素
const searchItems = ref<Array<SearchItemParams>>([]);
// 表格列元素
const tableColItems = ref<Array<TableColParams>>([]);
// 表格行操作按钮元素
const tableRowActionBtnItems = ref<Array<TableRowBtnParams>>([]);
// 表格数据
const tableDatas = ref<Array<object>>([]);
// 列表加载的参数
const listDataParams = ref<ListDataParams>();

watch(listId, (oldVal, newVal) => {
    console.log('pathParams changed from', oldVal, 'to', newVal);
})

/**
 * 做一些初始化的动作
 */
onMounted(() => {
    // 加载一下当前页面的配置
    listConfigApi.listConfg(listId.value, (res) => {
        searchItems.value = res.searchFields.map((item) => {
            return {
                type: item.type,
                code: item.code,
                label: item.name,
                placeholder: '请输入'
            }
        });
        tableColItems.value = res.column.map((item) => {
            return {
                code: item.code,
                name: item.name
            }
        });
        tableRowActionBtnItems.value = res.btnConfig.filter(bc => {
            return bc.type === BtnTypeEnum.ROW_BTN.valueOf();
        }).map((item) => {
            return {
                name: item.name,
                code: item.code,
                route: item.route,
                showMethod: item.showMethod,
                sort: item.sort,
                btnParams: item.btnParams
            }
        });
    }, (code, msg) => {
        console.log('加载配置失败', code, msg);
    });
    // 初始化一下参数
    listDataParams.value = {
        pageId: listId.value,
        pageNum: 1,
        pageSize: 10
    }
    getListData();
})

const pagination = ref<PaginationBaseParams>({
    current: 1,
    pageSize: 10,
    total: 100
});

/**
 * 获取一下列表数据
 */
const getListData = () => {
    if (!listDataParams.value) return;
    listDataApi.listData(listDataParams.value, (res) => {
        tableDatas.value = res.rows;
    }, (code, e) => {
        console.error('获取列表数据失败', code, e);
    });
}

const searchDataRefresh = (searchParams: SearchParamsType) => {
    console.log('searchDataRefresh', searchParams);
    listDataParams.value = {
        ...listDataParams.value,
        ...searchParams,
        pageId: listDataParams.value?.pageId || ''
    }
    getListData();
}

const updateCurrent = (val: number) => {
    pagination.value.current = val;
}

const updatePageSize = (val: number) => {
    pagination.value.pageSize = val;
};
</script>

<style lang="css">
</style>