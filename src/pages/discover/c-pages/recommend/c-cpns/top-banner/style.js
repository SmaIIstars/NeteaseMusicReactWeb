import styled from "styled-components";

export const RecommendWrapper = styled.div`
  position: relative;
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner-content {
    /* background-color: greenyellow; */
    height: 285px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const BannerLeft = styled.div`
  width: calc(100% - 235px);
  .slick-track {
    height: 285px;
  }

  .banner-item {
    height: 285px;
    overflow: hidden;
    .image {
      height: 100%;
    }
  }
`;

export const BannerRight = styled.div`
  height: 100%;
  width: 235px;
  background: url(${require("@/assets/img/download.png")});
  background-position: -10px 0px;
`;

export const BannerControl = styled.div`
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    top: 50%;
    transform: translateY(-50%);

    cursor: pointer;
  }

  .btn:hover {
    background-color: #333;
  }

  .left {
    left: 200px;
    background: url(${require("@/assets/img/banner-control-left.png")});
  }

  .right {
    right: 200px;
    background: url(${require("@/assets/img/banner-control-right.png")});
  }
`;
