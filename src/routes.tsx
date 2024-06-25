import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { ROUTE } from "@utils/enums";
import ProductEdit from "./pages/products/ProductEdit";
import ProductsList from "./pages/products/ProductsList";
import { ProtectedAuthLayout, ProtectedMainLayout } from "@pages";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";

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