import {
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHAGE_TOP_LIST,
  CHAGE_TOP_LIST_DETAIL,
  CHAGE_NEW_LIST_DETAIL,
  CHAGE_ORIGIN_LIST_DETAIL,
} from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopLists,
  getTopListDetails,
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

const changegetTopListAction = (res) => ({
  type: CHAGE_TOP_LIST,
  topLists: res.list.slice(0, 3),
});

const changegetTopListDetailAction = (res) => ({
  type: CHAGE_TOP_LIST_DETAIL,
  topListDetails: res.playlist.tracks,
});

const changegetNewListDetailAction = (res) => ({
  type: CHAGE_NEW_LIST_DETAIL,
  newListDetails: res.playlist.tracks,
});

const changegetOriginListDetailAction = (res) => ({
  type: CHAGE_ORIGIN_LIST_DETAIL,
  originListDetails: res.playlist.tracks,
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

export const getTopListAction = () => {
  return (dispatch) => {
    getTopLists().then((res) => {
      const { data } = res;
      dispatch(changegetTopListAction(data));
      dispatch(getTopListDetailAction(data.list[0].id));
      dispatch(getNewListDetailAction(data.list[1].id));
      dispatch(getOriginListDetailAction(data.list[2].id));
    });
  };
};

export const getTopListDetailAction = (id) => {
  return (dispatch) => {
    getTopListDetails(id).then((res) => {
      const { data } = res;
      // console.log(data);
      dispatch(changegetTopListDetailAction(data));
    });
  };
};

export const getNewListDetailAction = (id) => {
  return (dispatch) => {
    getTopListDetails(id).then((res) => {
      const { data } = res;
      // console.log(data);
      dispatch(changegetNewListDetailAction(data));
    });
  };
};

export const getOriginListDetailAction = (id) => {
  return (dispatch) => {
    getTopListDetails(id).then((res) => {
      const { data } = res;
      // console.log(data);
      dispatch(changegetOriginListDetailAction(data));
    });
  };
};
