import React, { memo } from "react";

import SSTopBanner from "./c-cpns/top-banner";
import SSHotRecommend from "./c-cpns/hot-recommend";
import SSPersonalRecommend from "./c-cpns/personal-recommend";
import SSNewAlbum from "./c-cpns/new-album";
import SSRecommendRanking from "./c-cpns/recommend-ranking";

import {
  HotRecommendWrapper,
  HotContent,
  HotContentLeft,
  HotContentRight,
} from "./style";

function SSRecommend() {
  return (
    <HotRecommendWrapper>
      {/* 轮播图 */}
      <SSTopBanner />

      {/* 推荐内容 */}
      <HotContent className="wrap-v2">
        {/* 内容左侧 */}
        <HotContentLeft>
          <SSHotRecommend />
          <SSPersonalRecommend />
          <SSNewAlbum />
          <SSRecommendRanking />
        </HotContentLeft>

        {/* 内容右侧 */}
        <HotContentRight></HotContentRight>
      </HotContent>
    </HotRecommendWrapper>
  );
}

export default memo(SSRecommend);

// redux普通流程

// function SSRecommend(props) {
//   const { getBanners, topBanners } = props;
//   console.log(props);

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>Banner:{topBanners.length}</h2>
//     </div>
//   );
// }

// const mapStateToProps = (state) => {
//   // console.log(state);
//   return {
//     topBanners: state.recommend.topBanners,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   getBanners: () => {
//     dispatch(getTopBannersAction());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(memo(SSRecommend));
