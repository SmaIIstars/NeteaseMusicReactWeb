import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { SSDiscoverWrapper, SSTopMenu } from "./style";

import { DiscoverSubMenu } from "@/common/local-data";

export default memo(function SSDiscover(props) {
  const routes = props.route.routes;

  return (
    <SSDiscoverWrapper>
      <div className="subMenuWrapper">
        <SSTopMenu className="wrap-v2">
          {DiscoverSubMenu.map((item, index) => {
            return (
              <div key={item.title} className="subMenuItem">
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </SSTopMenu>
      </div>

      {renderRoutes(routes)}
    </SSDiscoverWrapper>
  );
});
