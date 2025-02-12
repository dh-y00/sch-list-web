interface ListConfigSearchHttpModel {
    /**
     * 搜索项 code
     */
    code: string;

    /**
     * 搜索项名称
     */
    name: string;

    /**
     * 搜索项类型
     */
    type: string;

    /**
     * 搜索默认值
     */
    value: any;
}

interface ColumnConfigHttpModel {

    /**
     * 列 code
     */
    code: string;

    /**
     * 列名称
     */
    name: string;

    /**
     * 是否排序
     */
    isSort: boolean;

    /**
     * 列宽度
     */
    colWidth: string;
    sort: number;
}

interface BtnConfigHttpModel {

    /**
     * 按钮名称
     */
    name: string,

    /**
     * 按钮 code
     */
    code: string,

    /**
     * 按钮类型
     */
    type: string,
    
    /**
     * 点击按钮的route
     */
    route: string,
    
    /**
     * 展示方式
     */
    showMethod: string,
    
    /**
     * 按钮排的顺序
     */
    sort: number,

    /**
     * 按钮参数
     */
    btnParams: Array<string>
}

interface ListConfigHttpModel {

    pageId: string;

    pageName: string;

    isChoose: boolean;

    isColConfig: boolean;

    isRefresh: boolean;

    pageVersion: string;

    searchFields: Array<ListConfigSearchHttpModel>;

    btnConfig: Array<BtnConfigHttpModel>; // 根据实际情况可以更改类型

    column: Array<ColumnConfigHttpModel>;
}


export {
    ListConfigSearchHttpModel, ColumnConfigHttpModel, ListConfigHttpModel, BtnConfigHttpModel
}