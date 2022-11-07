import axios from "axios";
import { IFormOrder } from "../InterfacesTypes/FormOrderTypes";
import { IDefaultSetGoods, IFilter } from "../InterfacesTypes/GoodsInterface";
import { ILogInData, IProfile } from "../Redux/Reducers/UserProfile";

const URL = "https://6369162d15219b84960f026c.mockapi.io";

export const BaseRequest = axios.create({
    baseURL: URL,
    // withCredentials: true,
});

export const FetchAllGoods = () => BaseRequest.get("/allGoods");

// export const GetFetchGoods = (goodsType: string) =>
//     BaseRequest.get<Array<IDefaultSetGoods>>(`${goodsType}`);
export const GetFetchGoods = (goodsType: string) =>
    BaseRequest.get<Array<IDefaultSetGoods>>(`${goodsType}`);

export const FetchOneGoodsType = (goodsType: string) => {
    return BaseRequest.get<Array<IDefaultSetGoods>>(
        `/allGoods?type=${goodsType}`
    );
};

export const FetchOneItem = (id: number) => {
    return BaseRequest.get<Array<IDefaultSetGoods>>(`allGoods?id=${id}`);
};
export const FetchAllNoFilterGoods = (page: number) => {
    return async () => {
        const totalPages = Math.ceil(
            (await BaseRequest.get<Array<IDefaultSetGoods>>(`allGoods`)).data
                .length / 10
        );
        const currentPage = await BaseRequest.get(
            `allGoods?page=${page}&limit=10`
        );
        return { totalPages, currentPage };
    };
};
//--------------------------------
export const getTotalItem = (url: string) => {
    return BaseRequest.get<Array<IDefaultSetGoods>>(`${url}`);
};
export const getAllTotalGoods = (url: string) => {
    return BaseRequest.get<Array<IDefaultSetGoods>>(`${url}`);
};
//------------------------------

export const FetchFilterGoods = (data: IFilter) => {
    const byPrice = data.byPrice ? `&sortBy=price&order=${data.byPrice}` : "";
    const byType = data.byType ? `&type=${data.byType}` : "";
    return BaseRequest.get<Array<IDefaultSetGoods>>(
        `allGoods?${byPrice + byType}`
    );
};

export const FetchAddOrder = (order: any) => {
    return BaseRequest.post("/orders", { ...order });
};
export const FetchDiscounList = () => {
    return BaseRequest.get("/discount");
};
///////profile////
export const FetchSigIn = (profile: IProfile) => {
    return BaseRequest.post("/users", { ...profile });
};
export const FetchLogIn = (logInData: ILogInData) => {
    return BaseRequest.get(
        `/users?name=${logInData.name}&password=${logInData.password}`
    );
};
////admin///
export const FetchGetAllOrders = () => {
    return BaseRequest.get<Array<IFormOrder>>("/orders?sortBy=id");
};
export const FetchGetAllProfiles = () => {
    return BaseRequest.get("/users");
};

export const FetchPostNewGoods = (goods: any) => {
    return BaseRequest.post("/allGoods", { ...goods });
};

export const FetchPatchGoods = (goods: any, id: number) => {
    return BaseRequest.put(`/allGoods/${id}`, { ...goods });
};

export const FetchDeleteGoods = (id: number) => {
    return BaseRequest.delete(`/allGoods/${id}`);
};
