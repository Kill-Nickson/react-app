import { createBrowserRouter } from "react-router-dom";
import { ROUTE } from "@utils/enums";
import { AuthLogin, AuthRegister } from "@/pages/auth";
import { ProductCreate, ProductEdit, ProductsList } from "@/pages/products";
import { ProtectedAuthLayout, ProtectedMainLayout, HomePage, NotFound } from "@pages";

const routes = createBrowserRouter([
    {
        path: ROUTE.APP_ROOT,
        element: <ProtectedMainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: ROUTE.PRODUCTS_LIST,
                element: <ProductsList />,
            },
            {
                path: ROUTE.PRODUCT_EDIT,
                element: <ProductEdit />
            },
            {
                path: ROUTE.PRODUCT_CREATE,
                element: <ProductCreate />
            },
        ]
    },
    {
        path: ROUTE.AUTH_LAYOUT,
        element: <ProtectedAuthLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: ROUTE.AUTH_LOGIN,
                element: <AuthLogin />,
            },
            {
              path: ROUTE.AUTH_REGISTER,
              element: <AuthRegister />,
            },
        ]
    },
]);

export default routes;