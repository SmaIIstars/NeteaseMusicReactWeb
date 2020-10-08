import styled from "styled-components";

export const SongCoverWrapper = styled.div`
  margin: 10px 10px;

  width: 140px;
  height: 180px;

  .pic {
    position: relative;
  }

  .pic > img {
    width: 140px;
    height: 140px;
  }

  .song-title {
    margin: 5px 0 3px 0;

    font-size: 14px;
    font-weight: 500;
  }

  .song-sour {
    font-size: 12px;
    color: #666666;
  }
`;

export const ImgBottom = styled.div`
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: 27px;
  background-color: rgba(0, 0, 0, 0.5);

  color: #cccccc;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon1 {
    width: 16px;
    height: 16px;
    margin-left: 6px;

    background: url(${require("@/assets/img/sprite_icon.png")});

    background-position: 0px -21px;
  }

  .number {
    margin-left: -50px;
  }

  .icon2 {
    width: 16px;
    height: 16px;
    margin-right: 6px;

    background: url(${require("@/assets/img/sprite_icon.png")});
  }
`;
