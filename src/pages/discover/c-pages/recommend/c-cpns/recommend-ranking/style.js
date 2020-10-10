import styled from "styled-components";

export const RankingWrapper = styled.div`
  margin: 40px 0;

  background: url(${require("@/assets/img/recommend-top-bg.png")}) no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;

  .ranking-item1 {
    width: 33.3%;
  }
  .ranking-item2 {
    padding-left: 19px;
    width: 33.3%;
  }
  .ranking-item3 {
    width: 33.3%;
    padding-left: 40px;
  }
`;
