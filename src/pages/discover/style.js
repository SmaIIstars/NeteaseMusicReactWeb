import styled from "styled-components";

export const SSDiscoverWrapper = styled.div`
  width: 100%;
  .subMenuWrapper {
    background-color: #c20c0c;
    height: 30px;
  }

  .wrap-v2 {
    height: 100%;
  }
`;

export const SSTopMenu = styled.div`
  position: relative;
  left: -35px;

  padding-bottom: 5px;
  width: 744px;
  font-size: 12px;
  color: white;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .subMenuItem {
    > a {
      text-decoration: none;
      padding: 5px 10px;
      color: white;
    }
  }

  .active,
  .subMenuItem > a:hover {
    border-radius: 20px;
    background-color: #9b0909;
  }
`;
