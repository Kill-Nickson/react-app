import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";

import { persistor, store } from "@store";
import i18n from '@utils/i18next';
import routes from "./routes";
import "./index.css";
import ApiService from "./openapi/apiService";
import { I18nextProvider } from "react-i18next";

const apiService = ApiService;
apiService.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={routes} />
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
