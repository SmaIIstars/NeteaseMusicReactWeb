import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { RankingWrapper } from "./style";

import { getTopListAction } from "../../store/actionCreators";
import SSThemeHeaderRCM from "@/components/theme-header-rcm";
import SSTopRanking from "@/components/top-ranking";

export default memo(function SSRecommendRanking() {
  // state

  // redux hooks
  const {
    topLists,
    topListDetails,
    newListDetails,
    originListDetails,
  } = useSelector(
    (state) => ({
      topLists: state.getIn(["recommend", "topLists"]),
      topListDetails: state.getIn(["recommend", "topListDetails"]),
      newListDetails: state.getIn(["recommend", "newListDetails"]),
      originListDetails: state.getIn(["recommend", "originListDetails"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction());
    // dispatch(getTopListDetailAction());
  }, [dispatch]);

  // other hooks

  // 业务逻辑
  // console.log(topLists);
  console.log(topListDetails);
  console.log(newListDetails);
  console.log(originListDetails);

  return (
    <div>
      <SSThemeHeaderRCM title={"榜单"} />

      <RankingWrapper>
        <div className="ranking-item">
          <SSTopRanking
            info={topLists[0]}
            songs={topListDetails ? topListDetails.slice(0, 10) : []}
          ></SSTopRanking>
        </div>

        <div className="ranking-item">
          <SSTopRanking
            info={topLists[1]}
            songs={newListDetails ? newListDetails.slice(0, 10) : []}
          ></SSTopRanking>
        </div>

        <div className="ranking-item">
          <SSTopRanking
            info={topLists[2]}
            songs={originListDetails ? originListDetails.slice(0, 10) : []}
          ></SSTopRanking>
        </div>
      </RankingWrapper>
    </div>
  );
});
