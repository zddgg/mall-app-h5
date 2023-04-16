import axios from 'axios';
import {HttpResponse, PaginationRes} from '@/types/global';

export interface BackendCategoryTree {
    categoryId: string;
    categoryName: string;
    parentNo: string;
    level: number;
    children: BackendCategoryTree[];
}

export function queryCategoryTree() {
    return axios.post<HttpResponse<BackendCategoryTree[]>>(
        '/api/app/product/category/tree'
    );
}