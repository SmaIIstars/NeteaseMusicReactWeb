import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: nowrap;

  padding: 22px 0;
`;

export const TitleLeft = styled.div``;

export const TitleRight = styled.div`
  .title {
    margin-top: 10px;
    margin-left: 5px;
    font-size: 14px;
    color: #333333;
    font-weight: 600;

    text-align: center;
  }

  .icon1,
  .icon2 {
    display: inline-block;
    width: 22px;
    height: 22px;
    padding: 10px;
    margin: 10px 5px;
  }
  .icon1 {
    background-position: -267px -205px;
  }
  .icon1:hover {
    background-position: -267px -235px;

    cursor: pointer;
  }

  .icon2 {
    background-position: -299px -206px;

    cursor: pointer;
  }
  .icon2:hover {
    background-position: -299px -236px;
  }
`;

export const RankingList = styled.div`
  font-size: 14px;

  .song-item {
    display: flex;
  }
  .index {
    flex: 1;

    text-align: center;
    width: 35px;
    height: 34px;
    line-height: 34px;
  }

  .song-item:nth-child(1) > i,
  .song-item:nth-child(2) > i,
  .song-item:nth-child(3) > i {
    color: #c10d0c;
  }

  .song-name {
    display: inline-block;

    flex: 5;

    height: 34px;
    line-height: 34px;
  }

  .song-item:hover {
    cursor: pointer;

    .play,
    .add,
    .collation {
      display: inline-block;
    }
  }

  .go-all {
    left: 60%;
    position: relative;
    line-height: 34px;
  }

  .operation {
    position: relative;
    padding-right: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .play,
    .add,
    .collation {
      display: none;

      width: 18px;
      height: 18px;
      /* background-color: red; */
    }

    .add {
      margin: 0 5px;
      background-position: 2px -697px;
    }

    .play {
      background-position: -266px -267px;
    }

    .collation {
      background-position: -295px -267px;
    }
  }
`;
