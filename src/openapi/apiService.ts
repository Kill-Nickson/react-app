import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import router from "../router";
// import { version } from "@/../release";
// import { useHelpersStore } from "../store/common/helpers/helpers_store";
// import { getCookie } from "@/scripts/common";
// import { showToastMessage, updateLoadingId } from "../common/storeHelper";
import {
    AccountsApiFactory,
} from "@/openapi";
import qs from "qs";
import routes from "@/routes";
import ROUTE from "@utils/enums";
// import i18n from "@/common/translation";

/**
 * Abstraction layer for api calls
 * Helps to initialize axios interceptors, headers and offers generic functions for query, get, post, put and delete axios calls
 */
const ApiService = {
    /**
     * Sets axios default URL and default headers & interceptors
     */
    init() {
        axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
        // this.setHeader();
        axios.interceptors.response.use(
            (response) => response,
            (error) => this.errorHandler(error)
        );
    },

    // /**
    //  * Sets default axios headers
    //  */
    // setHeader() {
    //     axios.defaults.withCredentials = true;
    //     axios.defaults.headers = {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         "X-CSRFToken": getCookie("csrftoken"),
    //     };
    // },

    // /**
    //  * Sets Axios default headers with new token
    //  * @param { string } token - new xcsrf token
    //  */
    // setCsrfHeader(token: string | null) {
    //     axios.defaults.headers = {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         "X-CSRFToken": token,
    //     };
    // },

    /**
     * Defines how different errors are generally handled
     * @param { * } error
     */
    errorHandler(error: AxiosError) {
        if (error.response?.status == 400) {

        } else if (error.response?.status == 401) {
            // console.log('Received status 401');
            // routes.navigate(ROUTE.AUTH_LOGIN);
            // router.push("/login");
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
        return axios
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
        return axios.get(`${resource}/${slug}`).catch((error) => {
            return error;
        });
    },

    async post(resource: string, params: any, config: AxiosRequestConfig = {}) {
        return axios
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
        return axios
            .put(`${resource}/${slugString}`, params, config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },

    async delete(resource: string, params: any = {}) {
        return axios.delete(resource + "/", params).catch((error) => {
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
};

export default ApiService;
