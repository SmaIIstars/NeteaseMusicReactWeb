import styled from "styled-components";

export const ThemeHeaderRCMWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  margin: 10px 5px;

  .dividing-line {
    position: absolute;
    bottom: -4px;

    height: 2px;
    width: 100%;
    background-color: #c10d0c;
  }
`;

export const ThemeHeaderRCMLeft = styled.div`
  flex: 8;
  /* background-color: #aaa; */

  display: flex;
  align-items: center;

  .icon1 {
    width: 30px;
    height: 30px;
    background: url(${require("@/assets/img/sprite_02.png")});
    background-position: -227px -156px;
  }

  .title {
    margin: 0 10px;

    font-size: 20px;
    color: black;
    font-weight: 400;
  }

  .keywords {
    display: flex;
    justify-content: space-between;

    color: #666;

    margin: 0 5px;

    i {
      padding: 0 10px;
    }
    i:hover {
      cursor: default;
    }
  }
`;

export const ThemeHeaderRCMRight = styled.div`
  flex: 2;
  /* background-color: #999; */
  display: flex;
  align-items: center;
  flex-flow: row-reverse;

  .icon2 {
    margin-left: 10px;
    width: 30px;
    height: 30px;
    background: url(${require("@/assets/img/sprite_02.png")});
    background-position: 0px -232px;
  }
`;
