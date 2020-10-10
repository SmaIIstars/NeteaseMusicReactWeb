import styled from "styled-components";

export const LoginButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 0px 0px;

  flex-flow: wrap;
  height: 126px;
  .login-title {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
  }

  .login-botton {
    display: block;
    width: 100px;
    height: 31px;
    line-height: 31px;

    margin-bottom: 12px;

    text-align: center;
    color: white;
    background: #c20c0c;
    border-radius: 5px;
  }

  .login-botton:hover {
    text-decoration: none;
    background: red;
  }
`;
