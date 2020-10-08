import React, { memo } from "react";

import { copyrightLinks, imgLinks } from "@/common/local-data";

import { FooterWrapper, FooterLeft, FooterRight } from "./style";

export default memo(function SSAppHeader() {
  // 页面代码
  function showCopyright(item, index) {
    // 这里前3个是路由跳转，第4个是页面跳转，第五个是弹出框，先不做细分，全部都做网页跳转
    if (index < 5) {
      return (
        <a
          href={item.link}
          target="_blank"
          className="copyright-item"
          rel="noopener noreferrer"
        >
          {item.title}
        </a>
      );
    }
  }

  function showImage(item, index) {
    // 2、4为路由跳转，1、3、5为页面跳转，统一做网页跳转
    return (
      <>
        <a href={item.link} className="sprite_footer_02">
          {" "}
        </a>
        <span style={{ marginTop: "5px", color: "#999999", cursor: "default" }}>
          {item.title}
        </span>
      </>
    );
  }

  // 返回jsx
  return (
    <FooterWrapper>
      <div className="footerWraper">
        <FooterLeft>
          <div className="copyright-up">
            {copyrightLinks.map((item, index) => {
              return (
                <div key={item.title}>
                  <span>{showCopyright(item, index)}</span>
                  <span className="line">|</span>
                </div>
              );
            })}
          </div>
          <div className="copyright-down">
            <div>
              <span style={{ marginRight: "14px" }}>
                网易公司版权所有©1997-2020
              </span>
              <span>杭州乐读科技有限公司运营：</span>
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                浙网文[2018]3506-263号
              </a>
            </div>
            <div>
              <span>违法和不良信息举报电话：0571-89853516</span>
              <span>举报邮箱：</span>
              <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
            </div>
            <div>
              <span style={{ marginRight: "14px" }}>粤B2-20090191-18</span>
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noopener noreferrer"
              >
                工业和信息化部备案管理系统网站
              </a>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "14px" }}
              >
                <span className="police-logo"></span>
                <span>浙公网安备 33010902002564号</span>
              </a>
            </div>
          </div>
        </FooterLeft>

        <FooterRight>
          {imgLinks.map((item, index) => {
            return (
              <div key={item.title} className="imgItem">
                {showImage(item, index)}
              </div>
            );
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  );
});
