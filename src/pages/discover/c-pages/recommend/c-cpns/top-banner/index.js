import React, { memo, useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import {
  RecommendWrapper,
  BannerLeft,
  BannerRight,
  BannerControl,
} from "./style";
import { Carousel } from "antd";

export default memo(function SSTopBanner() {
  // 自己的state
  const [currentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联: 获取数据、进行操作
  // 这两个hook都是在react-redux里
  // useSelector 源码默认是 === 比较，不是进行浅层比较，消耗性能
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners,

      // 已经转成immutable结构的数据
      // topBanners: state.get("recommend").get("topBanners"),
      // getIn传入可迭代数据
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const changeImage = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  // 业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

  return (
    <RecommendWrapper bgImage={bgImage}>
      <div className="banner-content wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            beforeChange={changeImage}
            effect="fade"
            autoplay
          >
            {topBanners.map((item, index) => {
              return (
                <div key={item.imageUrl} className="banner-item">
                  <img
                    src={item.imageUrl}
                    alt={item.typeTitle}
                    className="image"
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </RecommendWrapper>
  );
});
