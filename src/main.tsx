import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { persistor, store } from "@store";
import { Layout, Main, NotFound } from "@pages";

import "./index.css";

const routes = createBrowserRouter([
  {
    // path: ROUTE.ABSOLUTE,
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Main />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <I18nextProvider i18n={i18n}> */}
          <RouterProvider router={routes} />
        {/* </I18nextProvider> */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);