import React from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "@/router";

import store from "@/store";
import SSAppHeader from "@/components/app-header";
import SSAppFooter from "@/components/app-footer";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <SSAppHeader />
        {renderRoutes(routes)}
        {/* <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
          <li>列表17</li>
          <li>列表18</li>
          <li>列表19</li>
          <li>列表20</li>
        </ul> */}
        <SSAppFooter />
      </HashRouter>
    </Provider>
  );
}
