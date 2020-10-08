import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { HOT_RECOMMEND_LIMIT } from "../../store/constants";

import { getHotRecommendAction } from "../../store/actionCreators";
import SSThemeHeaderRCM from "@/components/theme-header-rcm";
import SSSongCover from "@/components/song-cover";

import { HotRecommendWrapper } from "./style";

export default memo(function SSHotRecommend() {
  // state

  // redux hooks
  // 注意这里拿到的是一个对象，需要进行解构
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <div>
      <SSThemeHeaderRCM
        title={"热门推荐"}
        keywords={["话语", "话语", "话语", "话语"]}
      />
      <HotRecommendWrapper>
        {hotRecommends.map((item, index) => {
          return (
            <i key={item.id}>
              <SSSongCover info={item} />
            </i>
          );
        })}
      </HotRecommendWrapper>
    </div>
  );
});
