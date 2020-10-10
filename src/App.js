import React from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

import routes from "@/router";

import store from "@/store";
import SSAppHeader from "@/components/app-header";
import SSAppFooter from "@/components/app-footer";
import SSAppPlayBar from "@/pages/play/app-play-bar";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SSAppHeader />
        {renderRoutes(routes)}

        <SSAppFooter />
        <SSAppPlayBar />
      </HashRouter>
    </Provider>
  );
}
