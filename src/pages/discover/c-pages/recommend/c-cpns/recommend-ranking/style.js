import styled from "styled-components";

export const RankingWrapper = styled.div`
  margin: 40px 0;

  background: url(${require("@/assets/img/recommend-top-bg.png")}) no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .ranking-item {
    width: 33.4%;
    flex: 1;
  }
`;
