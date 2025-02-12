interface PaginationBaseParams {
    /**
     * 当前页码
     */
    current: number,
    /**
     * 每页显示的条数
     */
    pageSize: number,
    /**
     * 总条数
     */
    total: number,
}

export {
    PaginationBaseParams
}
