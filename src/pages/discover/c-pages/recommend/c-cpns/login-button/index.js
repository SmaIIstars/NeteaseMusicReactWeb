import React, { memo } from "react";

import { LoginButtonWrapper } from "./style";

export default memo(function SSLoginButton() {
  return (
    <LoginButtonWrapper className="sprite_02">
      <span className="login-title">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </span>
      <a href="#/" className="login-botton">
        用户登录
      </a>
    </LoginButtonWrapper>
  );
});
