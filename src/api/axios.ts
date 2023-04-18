import type {AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from 'axios';
import {getToken} from '@/utils/auth';
import {HttpResponse} from '@/types/global';
import {showNotify} from "vant";
import {useRouter} from "vue-router";
import {useUserStore} from "@/store";

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // let each request carry token
        // this example using the JWT token
        // Authorization is a custom headers key
        // please modify it according to the actual situation
        const token = getToken();
        if (token) {
            if (!config.headers) {
                config.headers = {};
            }
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // do something
        return Promise.reject(error);
    }
);
// add response interceptors
axios.interceptors.response.use(
    (response: AxiosResponse<HttpResponse>) => {
        const res = response.data;
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== '0000') {
            showNotify(res.msg);
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (
                ['50008', '50012', '50014'].includes(res.code) &&
                response.config.url !== '/api/user/info'
            ) {
                const userStore = useUserStore();
                userStore.logout();
                window.location.reload();
            }
            return Promise.reject(new Error(res.msg || 'Error'));
        }
        return res;
    },
    (error) => {
        showNotify('请求异常')
        return Promise.reject(error);
    }
);
