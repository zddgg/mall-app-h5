import axios from 'axios';
import {HttpResponse} from '@/types/global';

export interface CartItem {
    cartId: string;
    storeId: string;
    skuId: string;
    skuNum: number;
    addPrice: number;
    selected: boolean;

}

export interface CartInfo {
    cartId: string;
    storeId: string;
    skuNum: number;
    addPrice: number;
    selected: boolean;
}

export interface SkuInfo {
    skuId: string;
    skuName: string;
    thumbnail: string;
    attrStr: string;
    retailPrice: number;
    minLimit: number;
    maxLimit: number;
}

export interface ActivityInfo {
    activity: boolean;
    activityTypeId: string;
    activityTypeName: string;
    activityId: string;
    activityName: string;
    StartTime: string;
    endTime: string;
}

export interface CartSkuInfo {
    cartInfo: CartInfo;
    skuInfo: SkuInfo;
    activityInfo: ActivityInfo;
}

export interface CartPreferentialInfo {
    preferentialId: string;
    preferentialType: string;
    preferentialTitle: string;
    cartSkuInfos: CartSkuInfo[];
}

export interface CartStoreInfo {
    storeId: string;
    storeName: string;
    cartPreferentialInfos: CartPreferentialInfo[]
}

export interface CartSelectReq {
    actionType: string;
    cartIds: string[];
}

export interface SkuNumUpdateReq {
    actionType: string;
    cartId: string;
}

export function getCartList() {
    return axios.post<HttpResponse<CartStoreInfo[]>>(
        '/api/app/cart/getCartList'
    );
}

export function addCart(params: { skuId: string, skuNum: number }) {
    return axios.post<HttpResponse>(
        '/api/app/cart/addCart', params
    );
}

export function selectCart(params: CartSelectReq) {
    return axios.post<HttpResponse<CartStoreInfo[]>>(
        '/api/app/cart/selectCart', params
    );
}

export function updateSkuNum(params: SkuNumUpdateReq) {
    return axios.post<HttpResponse<CartStoreInfo[]>>(
        '/api/app/cart/updateSkuNum', params
    );
}