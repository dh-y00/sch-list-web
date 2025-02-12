import Http from "@/http";
import { ListDataParams, ListDataResponse } from "@/http/model/ListDataModel";
import { FailFunc, SucFunc } from "@/http/model/HttpModel";
// import ListDataParams from "../model/ListDataModel";

const listDataApi = {

    listData: (listDataParams: ListDataParams, suc: SucFunc<ListDataResponse>, fail: FailFunc) => {
        new Http<ListDataResponse>('/api/ui/list', {
            params: listDataParams
        }).get(suc, fail)
    }
}

export default listDataApi;