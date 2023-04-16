import axios from 'axios';
import {HttpResponse} from '@/types/global';

export interface SkuFeed {
    spuId: string,
    skuId: string,
    skuName: string;
    retailPrice: number;
    thumbnail: string;
}

export interface SkuAttr {
    id: string,
    name: string,
    active: boolean,
    disable: boolean,
}

export interface SkuAttrOption {
    id: string,
    name: string,
    list: SkuAttr[],
}

export interface Goods {
    skuId: string,
    price: string,
    imagePath: string,
}

export interface SkuAttrMap {
    skuId: string,
    attrMap: {
        [x: string]: string
    }
}

export interface SkuAttrOptionsResp {
    skuAttrOptions: SkuAttrOption[],
    goods: Goods,
    skuAttrMaps: SkuAttrMap[]
}

export function querySkuFeed() {
    return axios.post<HttpResponse<SkuFeed[]>>(
        '/api/app/product/goods/skuFeed'
    );
}

export function querySkuAttrOptions(params: { skuId: string }) {
    return axios.post<HttpResponse<SkuAttrOptionsResp>>(
        '/api/app/product/goods/skuAttrOptions', params
    );
}