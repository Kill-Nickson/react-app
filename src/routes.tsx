import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/layouts";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { ROUTE } from "@utils/enums";
// import ProductsList from "./pages/products/ProductsList";
import ProductEdit from "./pages/products/ProductEdit";
import ProductsList from "./pages/products/ProductsList";

const routes = createBrowserRouter([
    {
        path: ROUTE.MAIN_ABSOLUTE,
        element: <Layout />,
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
            }
            /* Auth */
            // {
            //   path: ROUTE.AUTH_LAYOUT_ABSOLUTE,
            //   element: <AuthLayout />,
            //   children: [
            //     {
            //       path: ROUTE.AUTH_LOGIN,
            //       element: <AuthLogin />,
            //     },
            //     {
            //       path: ROUTE.AUTH_REGISTER,
            //       element: <AuthRegister />,
            //     },
            //   ],
            // },
            /* Products */
            // {
            //   path: ROUTE.CMS_LAYOUT_ABSOLUTE,
            //   element: <CMSLayout />,
            //   children: [
            //     {
            //       path: ROUTE.CMS_PWA_LAYOUT,
            //       element: <PWALayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_CREATE,
            //           element: <PWACreate />,
            //         },
            //         {
            //           path: ROUTE.CMS_LIST,
            //           element: <PWAList />,
            //         },
            //         {
            //           path: ROUTE.CMS_EDIT,
            //           element: <PWAEdit />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_PIXEL_LAYOUT,
            //       element: <PixelLayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_LIST,
            //           element: <PixelList />,
            //         },
            //         {
            //           path: ROUTE.CMS_CREATE,
            //           element: <PixelCreate />,
            //         },
            //         {
            //           path: ROUTE.CMS_PIXEL_UPDATE,
            //           element: <PixelUpdate />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_ANALYTIC_LAYOUT,
            //       element: <AnalyticLayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_LIST,
            //           element: <AnalyticList />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_STATISTIC_LAYOUT,
            //       element: <StatisticLayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_LIST,
            //           element: <StatisticList />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_TRANSACTION_LAYOUT,
            //       element: <TransactionLayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_LIST,
            //           element: <TransactionList />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_SUPPORT_LAYOUT,
            //       element: <SupportLayout />,
            //       children: [
            //         {
            //           path: ROUTE.CMS_SUPPORT_DEPOSIT,
            //           element: <SupportDeposit />,
            //         },
            //       ],
            //     },
            //     {
            //       path: ROUTE.CMS_TEAM_LAYOUT,
            //       element: <TeamLayout />,
            //       children: [
            //         {
            //           index: true,
            //           element: <TeamManager />,
            //         },
            //       ],
            //     },
            //   ],
            // },
        ],
    },
]);

export default routes;