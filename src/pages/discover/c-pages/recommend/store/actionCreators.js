import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
} from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
} from "@/network/recommend";

// changeAction
const changeTopBannersActions = (res) => ({
  type: CHANGE_TOP_BANNER,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  newAlbums: res.monthData,
});

// getAction
export const getTopBannerAction = () => {
  // 在这里是返回一个函数，可以通过传入参数先进行其他操作
  return (dispatch) => {
    getTopBanners().then((res) => {
      const { data } = res;
      // console.log(res);
      dispatch(changeTopBannersActions(data));
    });
  };
};

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      const { data } = res;
      // console.log(data);
      dispatch(changeHotRecommendAction(data));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      const { data } = res;
      dispatch(changeNewAlbumAction(data));
    });
  };
};
