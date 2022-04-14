export declare enum StoreCategoryActive {
    Inactive = 0,
    Active = 1
}

export declare class StoreCategory {
    id: number;
    title: string;
    num: number;
    active: StoreCategoryActive;
}

export declare class GetStoreCategoriesResponse {
    id: number;
    title: string;
    static from(storeCategory: StoreCategory): GetStoreCategoriesResponse;
    constructor(storeCategory: StoreCategory);
}
