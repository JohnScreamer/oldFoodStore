import { ISelect } from "../InterfacesTypes/GoodsInterface";

export const filterByPrice: ISelect[] = [
    { name: "Від дорогих до дешевих", value: "desc" },
    { name: "ВІд дешевих до дорогих", value: "asc" },
];

export const filterByName: ISelect[] = [
    { name: "Гарячі страви", value: "hotDish" },
    { name: "Пиво", value: "beer" },
    { name: "Супи", value: "soup" },
    { name: "Закуски", value: "snack" },
    { name: "Напої", value: "drinks" },
    { name: "Алкоголь", value: "alcohol" },
];

interface IUseRequest {
    byPrice: ISelect | null;
    byType: ISelect | null;
    page?: number;
}

export const useRequest = (limit: number, url: string): any => {
    const sortPriceType = (data: IUseRequest) => {
        const filterPrice = data.byPrice
            ? `&sortBy=price&orderBy=${data.byPrice}`
            : "";
        const filterType = data.byType ? `&type=${data.byType}` : "";
        return `${url}?${filterPrice + filterType}&page=${
            data.page
        }&limit=${limit}`;
    };

    const forTotalPages = (data: IUseRequest) => {
        const filterPrice = data.byPrice
            ? `&sortBy=price&orderBy=${data.byPrice}`
            : "";
        const filterType = data.byType ? `&type=${data.byType}` : "";
        return `${url}?${filterPrice + filterType}`;
    };

    return { sortPriceType, forTotalPages };
};
