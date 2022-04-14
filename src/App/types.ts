import {StoreCategoriesVO} from './_vo/storeCategories.vo';

export interface AppContext {
    productCategories: StoreCategoriesVO[];
    alert: (message: string) => void;
    onApiError: (e: Error) => void;
}
