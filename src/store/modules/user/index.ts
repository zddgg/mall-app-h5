import {defineStore} from 'pinia';
import {getUserInfo, login as userLogin, LoginData, logout as userLogout, UserInfo,} from '@/api/user';
import {clearToken, setToken} from '@/utils/auth';
import {removeRouteListener} from '@/utils/route-listener';

const useUserStore = defineStore('user', {
    state: (): UserInfo => ({
        name: undefined,
        avatar: undefined,
        job: undefined,
        organization: undefined,
        location: undefined,
        email: undefined,
        introduction: undefined,
        personalWebsite: undefined,
        jobName: undefined,
        organizationName: undefined,
        locationName: undefined,
        phone: undefined,
        registrationDate: undefined,
        accountId: undefined,
        certification: undefined,
    }),

    getters: {
        userInfo(state: UserInfo): UserInfo {
            return {...state};
        },
    },

    actions: {
        // Set user's information
        setInfo(partial: Partial<UserInfo>) {
            this.$patch(partial);
        },

        // Reset user's information
        resetInfo() {
            this.$reset();
        },

        // Get user's information
        async info() {
            const {data} = await getUserInfo();

            this.setInfo(data);
        },

        // Login
        async login(loginForm: LoginData) {
            try {
                const res = await userLogin(loginForm);
                localStorage.setItem('user-info', JSON.stringify(res.data));
                setToken(res.data.token);
            } catch (err) {
                clearToken();
                throw err;
            }
        },
        logoutCallBack() {
            this.resetInfo();
            clearToken();
            removeRouteListener();
            localStorage.removeItem('user-info');
        },
        // Logout
        async logout() {
            try {
                // await userLogout();
            } finally {
                this.logoutCallBack();
            }
        },
    },
});

export default useUserStore;
