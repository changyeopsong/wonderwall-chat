import {GetStoreCategoriesResponse} from 'App/_dto';
import {fetch} from '_utils/Api';
const ApiPrefix = 'http://localhost:3003';

export const getStoreCategories = (): Promise<GetStoreCategoriesResponse[]> => fetch({url: `${ApiPrefix}/categories`});
