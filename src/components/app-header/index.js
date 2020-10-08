import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerLinks } from "@/common/local-data";

import { HeaderWrapper, HeaderLeft, HeaderRigth } from "./style";

export default memo(function SSAppFooter() {
  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3 || index > 4) {
      return (
        <NavLink to={item.link} activeClassName="isSelect">
          <div>{item.title}</div>
          <div className="cor sprite_01"></div>
        </NavLink>
      );
    } else {
      return (
        <a href={item.link}>
          <div>{item.title}</div>
          <div className="cor sprite_01"></div>
        </a>
      );
    }
  };

  // 返回jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <div className="headerLeft-wrapper">
            {/* 图标 */}
            <NavLink to="/">
              <i href="#/" className="logo sprite_01">
                网易云音乐
              </i>
            </NavLink>

            {/* 链接 */}
            <div className="select-list">
              {headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className="link-item">
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </div>
        </HeaderLeft>

        <HeaderRigth>
          <div className="headerRigth-wrapper">
            <Input
              className="searchInput"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            <div className="centerBtn">创作者中心</div>
            <div className="loginBtn">登录</div>
          </div>
        </HeaderRigth>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
