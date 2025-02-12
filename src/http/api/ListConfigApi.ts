import Http from '@/http'
import { SucFunc, FailFunc } from '@/http/model/HttpModel';
import { ListConfigHttpModel } from '@/http/model/ListConfigModel';

const listConfigApi = {
    /**
     * @description 获取列表配置
     */
    listConfg: (list_id: string, suc: SucFunc<ListConfigHttpModel>, fail: FailFunc) => {
        new Http<ListConfigHttpModel>('/api/ui/list/config', {
            pathParams: [list_id]
        }).get(suc, fail)
    }
}

export default listConfigApi;