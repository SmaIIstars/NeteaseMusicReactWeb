import React, { memo } from "react";

import {
  ThemeHeaderRCMWrapper,
  ThemeHeaderRCMLeft,
  ThemeHeaderRCMRight,
} from "./style";

export default memo(function SSThemeHeaderRCM(props) {
  // 也可以使用表单验证 propTypes
  const { title, keywords = [] } = props;

  // 业务逻辑
  // 去掉最后一个 |
  const showKeywords = (item, index) => {
    if (index < keywords.length - 1) {
      return (
        <span key={item}>
          <a href="#/">{item}</a>
          <i>|</i>
        </span>
      );
    } else {
      return (
        <span key={item}>
          <a href="#/">{item}</a>
        </span>
      );
    }
  };

  return (
    <ThemeHeaderRCMWrapper>
      <ThemeHeaderRCMLeft>
        <i className="icon1"></i>
        <span className="title">{title}</span>
        <span className="keywords">
          {keywords.map((item, index) => (
            <span key={index}>{showKeywords(item, index)}</span>
          ))}
        </span>
      </ThemeHeaderRCMLeft>

      <ThemeHeaderRCMRight>
        <i className="icon2"></i>
        <a href="#/">更多</a>
      </ThemeHeaderRCMRight>
      <div className="dividing-line"></div>
    </ThemeHeaderRCMWrapper>
  );
});
