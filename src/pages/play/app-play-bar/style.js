import styled from "styled-components";

export const AppPlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 53px;
  background-size: cover;
  background-position: 0px -105px;
  background-repeat: repeat-x;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  margin-top: 1px;
`;

export const ContentLeft = styled.div`
  flex: 1;
  /* background-color: red; */

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .sprite_playbar:hover {
    cursor: pointer;
  }

  .play {
    width: 36px;
    height: 36px;

    background-position: 0px -204px;
  }
  .play:hover {
    background-position: -40px -204px;
  }

  .pre {
    width: 28px;
    height: 28px;

    background-position: 0px -130px;
  }
  .pre:hover {
    background-position: -30px -130px;
  }

  .next {
    width: 28px;
    height: 28px;

    background-position: -80px -130px;
  }
  .next:hover {
    background-position: -110px -130px;
  }
`;

export const ContentMid = styled.div`
  flex: 5;
  /* background-color: orange; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  .mid-left {
    /* background-color: red; */
    text-align: center;
    padding: 10px;
  }
  .mid-right {
    flex: 1;
    display: flex;
    align-items: center;
    flex-flow: wrap;

    .mid-mid-up {
      width: 100%;
      margin-top: 15px;

      display: flex;
      align-items: center;

      .song-name {
        color: white;
        margin: 0 5px;
      }

      .mv {
        display: inline-block;
        width: 19px;
        height: 17px;

        background-position: 0px -58px;
      }

      .mv:hover {
        background-position: -20px -58px;
      }

      .singer {
        margin-left: 10px;
        color: #9b9b9b;
      }

      .share {
        display: inline-block;
        width: 14px;
        height: 15px;

        margin-left: 10px;

        background-position: -109px -103px;
      }

      .share:hover {
        background-position: -129px -103px;
      }
    }
    .mid-mid-down {
      width: 100%;
      display: flex;
      align-items: center;

      .slider {
        flex: 1;

        .ant-slider {
          .ant-slider-rail {
            background: url(${require("@/assets/img/progress_bar.png")});
            background-position-y: -31px;
          }

          .ant-slider-track {
            background: url(${require("@/assets/img/progress_bar.png")});
            background-position-y: -70px;
          }

          .ant-slider-handle {
            background: url(${require("@/assets/img/sprite_icon.png")});
            background-position: -42px -283px;

            border: none;
          }
        }

        .time {
          flex: 1;
        }
      }

      .time {
        margin-left: 10px;
        color: white;
        .div {
          margin: 0 5px;
        }
      }
    }
  }
`;

export const ContentRight = styled.div`
  flex: 1.5;

  margin-left: 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .btn {
    width: 25px;
    height: 25px;

    cursor: pointer;
  }

  .icon1 {
    background-position: -88px -163px;
  }
  .icon1:hover {
    background-position: -88px -189px;
  }

  .icon2 {
    background-position: -113px -163px;
  }
  .icon2:hover {
    background-position: -113px -189px;
  }

  .icon3 {
    background-position: -137px -250px;
  }

  .icon4 {
    background-position: -1px -248px;
  }
  .icon4:hover {
    background-position: -30px -248px;
  }

  .icon5 {
    background-position: -1px -344px;
  }
  .icon5:hover {
    background-position: -30px -344px;
  }

  .icon6 {
    width: 59px;
    background-position: -42px -68px;
  }
  .icon6:hover {
    background-position: -42px -98px;
  }
`;
