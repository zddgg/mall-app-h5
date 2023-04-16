import axios from 'axios';
import {HttpResponse} from "@/types/global";

export interface LoginData {
    mobile: string;
    bizId: string;
    authCode: string;
}

export interface UserInfo {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
    introduction?: string;
    personalWebsite?: string;
    jobName?: string;
    organizationName?: string;
    locationName?: string;
    phone?: string;
    registrationDate?: string;
    accountId?: string;
    certification?: number;
}

export interface LoginRes {
    userId: string;
    username: string;
    avatar: string;
    email: string;
    mobile: string;
    token: string;
}

export interface SmsSendRes {
    bizId: string;
}

export function login(data: LoginData) {
    return axios.post<HttpResponse<LoginRes>>('/api/app/user/loginBySmsCode', data);
}

export function sendSmsCode(data: LoginData) {
    return axios.post<HttpResponse<SmsSendRes>>('/api/app/user/sms/sendCode', data);
}

export function logout() {
    return axios.post<HttpResponse<LoginRes>>('/api/app/user/logout');
}

export function getUserInfo() {
    return axios.post<HttpResponse<UserInfo>>('/api/app/user/info');
}
