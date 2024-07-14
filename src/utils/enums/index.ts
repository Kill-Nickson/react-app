export enum ROUTE {
    APP_ROOT = '/',

    /* AUTH */
    AUTH_LAYOUT = '/auth',
    AUTH_LOGIN = '/auth/login',
    AUTH_REGISTER = '/auth/register',

    /* PRODUCTS */
    PRODUCTS_LIST = '/products',
    PRODUCT_EDIT = '/products/:id',  
    PRODUCT_CREATE = '/products/create',  
}

export default ROUTE;