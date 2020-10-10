import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  padding-bottom: 55px;

  .footerWraper {
    width: 980px;
    left: 0;
    right: 0;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }
`;

export const FooterLeft = styled.div`
  margin-top: 15px;
  line-height: 24px;

  .copyright-up {
    display: flex;
    justify-content: space-between;

    .line {
      padding: 0 10px;
      color: #999999;
    }

    .copyright-item {
      color: #999999;
    }
  }

  .copyright-down {
    color: #666;

    .police-logo {
      width: 14px;
      height: 14px;
      background: url(${require("@/assets/img/police.png")}) no-repeat;
      background-size: cover;
      display: inline-block;
      margin-right: 2px;
      vertical-align: -2px;
    }
  }
`;

export const FooterRight = styled.div`
  flex: 1;

  margin-left: 40px;

  display: flex;
  justify-content: space-between;

  .imgItem {
    display: flex;
    justify-content: center;
    flex-flow: column;
    align-items: center;
  }

  .sprite_footer_02 {
    background: url(${require("@/assets/img/sprite_footer_02.png")}) no-repeat 0
      9999px;
  }

  .imgItem > a {
    background-size: 200%;
    height: 45px;
    width: 50px;
  }

  .imgItem:nth-child(1) > a {
    background-position: 4px 0px;
  }
  .imgItem:nth-child(2) > a {
    background-position: -54px -96px;
  }
  .imgItem:nth-child(3) > a {
    background-position: 4px 0;
  }
  .imgItem:nth-child(4) > a {
    background-position: -54px -48px;
  }
  .imgItem:nth-child(5) > a {
    background-position: 4px -95px;
  }
`;
