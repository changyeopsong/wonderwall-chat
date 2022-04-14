import {GetStoreCategoriesResponse} from 'App/_dto';

export class StoreCategoriesVO {
    id: number;
    title: string;

    static from(response: GetStoreCategoriesResponse) {
        return new StoreCategoriesVO(response);
    }

    constructor(response: GetStoreCategoriesResponse) {
        this.id = response.id;
        this.title = response.title;
    }
}
