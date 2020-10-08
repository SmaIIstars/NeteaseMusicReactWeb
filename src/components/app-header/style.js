import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: white;

  .content {
    height: 70px;
    /* background: blue; */

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  .headerLeft-wrapper {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .logo {
      display: inline-block;
      width: 177px;
      height: 100%;
      background-position: 0 0;

      text-indent: -9999px;
    }

    .select-list {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .link-item {
        position: relative;
        font-size: 14px;
        height: 100%;

        a {
          line-height: 70px;
          display: block;
          width: 100%;
          height: 100%;
          color: #ccc;
        }

        a:hover {
          text-decoration: none;
        }

        .isSelect .cor {
          position: absolute;
          display: block;
          left: 50%;
          top: 65px;
          width: 12px;
          height: 7px;
          margin-left: -6px;
          overflow: hidden;
          background-position: -226px 0;
          background-color: transparent;
        }
      }

      .isSelect,
      .link-item:hover {
        background-color: #000;
      }

      .link-item div {
        display: block;
        padding: 0 20px;
      }

      .link-item:last-child {
        ::after {
          content: "";
          position: absolute;
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;

          /* 在这里需要当成一个模块进行引入 */
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
        }
      }
    }
  }
`;

export const HeaderRigth = styled.div`
  .headerRigth-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .searchInput {
      margin-right: 15px;
      width: 160px;
      background-position: 0 -99px;
      background-color: #fff;
      border-radius: 32px;
    }

    .centerBtn,
    .loginBtn {
      border: 1px solid #4f4f4f;
      padding: 3px 10px;
      margin: 0 10px;
      color: #ccc;
      background-color: #242424;
      border-radius: 32px;
    }

    .centerBtn:hover,
    .loginBtn:hover {
      border: 1px solid #ccc;
      cursor: pointer;
    }

    .loginBtn {
      padding: 3px 10px;
    }
  }

  .searchInput > .ant-input {
    font-size: 12px;
  }
`;
