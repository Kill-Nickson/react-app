import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from "axios";
// import router from "../router";
// import { version } from "@/../release";
// import { useHelpersStore } from "../store/common/helpers/helpers_store";
// import { getCookie } from "@/scripts/common";
// import { showToastMessage, updateLoadingId } from "../common/storeHelper";
import {
    AccountsApiFactory,
    ProductsApiFactory,
} from "@/openapi";
import qs from "qs";
import routes from "@/routes";
import ROUTE from "@utils/enums";
import { persistor, store } from "@store";
import { refreshAccess } from "@store-services/auth/authSlice";
import { setupCache } from 'axios-cache-interceptor';
// import i18n from "@/common/translation";

interface ExtendedAxiosRequestConfig<D = any> extends InternalAxiosRequestConfig<D> {
    _isRetry?: boolean;
}

// Extend AxiosError to use the extended configuration
class ExtendedAxiosError<T = unknown, D = any> extends AxiosError<T, D> {
    constructor(
        message?: string,
        code?: string,
        config?: ExtendedAxiosRequestConfig<D>,
        request?: any,
        response?: AxiosResponse<T, D>
    ) {
        super(message, code, config, request, response);
    }

    declare config?: ExtendedAxiosRequestConfig<D>;
}

/**
 * Abstraction layer for api calls
 * Helps to initialize axios interceptors, headers and offers generic functions for query, get, post, put and delete axios calls
 */

// const api = axios;

const api = setupCache(axios, {
    ttl: 5 * 60 * 1000, // 5 minutes
    cachePredicate: { statusCheck: (status) => [200].includes(status) },
    cacheTakeover: false
});

const ApiService = {
    /**
     * Sets axios default URL and default headers & interceptors
     */
    init() {
        api.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
        api.interceptors.request.use(
            (config) => {
                const state = store.getState().persistedReducer;
                const token = state.auth.access_token;

                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        api.interceptors.response.use(
            (response) => response,
            (error) => {this.errorHandler(error)}
        );
    },

    /**
     * Defines how different errors are generally handled
     * @param { * } error
     */
    async errorHandler(error: ExtendedAxiosError) {
        if (error.response?.status == 400) {

        } else if (error.response?.status === 401) {
            if (error.config && !error.config._isRetry) {
                error.config._isRetry = true;
                const { access, refresh } = await store.dispatch(refreshAccess()).unwrap()
                
                if (refresh) {
                    error.config.headers['Authorization'] = `Bearer ${access}`;
                    api(error.config);
                } else {
                    persistor.purge();
                }
            }
        } else if (error.response?.status == 403) {
            console.log('Received status 403');
            // showToastMessage(
            //     i18n.global.t("attention"),
            //     i18n.global.t("feedback.no_permission_to_view")
            // );
        } else if (error.response?.status == 404) {
            // router.push("/error-404");
            routes.navigate(ROUTE.APP_ROOT)
            // updateLoadingId("isLoadingData", true);
        } else if (error.response?.status == 422) {
            console.log('Received status 422');
            // if (error.response?.data) {
            //     const data = error.response?.data;
            //     if ("summary" in data) {
            //         showToastMessage(
            //             i18n.global.t("attention"),
            //             data["summary"]
            //         );
            //     }
            //     const helpersStore = useHelpersStore();
            //     helpersStore.SET_ERROR_ID_OBJECT(data);
            // }
        } else if (error.response?.status == 423) {
            // Do nothing - 2-factor authorization code required
        } else if (error.response?.status == 429) {
            // Do nothing - handled inside page logic
        } else if (error.response?.status == 500) {
            console.log('Received status 500');
            // showToastMessage(
            //     i18n.global.t("attention"),
            //     "Internal Server Error!"
            // );
        } else {
            console.log('Unknown Error!');
            // showToastMessage(i18n.global.t("attention"), "Unknown Error!");
        }
        throw error;
    },

    async query(resource: string, params: any) {
        return api
            .get(resource + "/", {
                ...params,
                paramsSerializer: (serializedParams) => {
                    return qs.stringify(serializedParams, {
                        encode: false,
                        indices: false,
                    });
                },
            })
            .catch((error) => {
                return error;
            });
    },

    async get(resource: string, slug = "") {
        slug = slug ? slug + "/" : "";
        return api.get(`${resource}/${slug}`).catch((error) => {
            return error;
        });
    },

    async post(resource: string, params: any, config: AxiosRequestConfig = {}) {
        return api
            .post(`${resource}/`, params, config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },

    async update(
        resource: string,
        slug: string,
        params: any,
        config: AxiosRequestConfig
    ) {
        const slugString = slug != null ? `${slug}/` : "";
        return api
            .put(`${resource}/${slugString}`, params, config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },

    async delete(resource: string, params: any = {}) {
        return api.delete(resource + "/", params).catch((error) => {
            return error;
        });
    },
    //     return new AuditsApi();
    // },

    // utils() {
    //     return UtilsApiFactory();
    // },

    // notifications() {
    //     return NotificationsApiFactory();
    // },

    // incidents() {
    //     return IncidentsApiFactory();
    // },

    accounts() {
        return AccountsApiFactory();
    },

    products() {
        return ProductsApiFactory();
    },

    // clearCache() {
    //     cache.store.clear();
    // },

    // invalidateCache(url: string) {
    //     const cacheKey = cache.adapter.getCacheKey({
    //         method: 'get',
    //         url: url,
    //     });
    //     cache.store.removeItem(cacheKey);
    // }

};

export default ApiService;
