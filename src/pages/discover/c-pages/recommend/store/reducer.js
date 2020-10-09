import { Map } from "immutable";

import {
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNER,
  CHANGE_NEW_ALBUM,
  CHAGE_TOP_LIST,
  CHAGE_TOP_LIST_DETAIL,
  CHAGE_NEW_LIST_DETAIL,
  CHAGE_ORIGIN_LIST_DETAIL,
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  topLists: [],
  topListDetails: [],
  newListDetails: [],
  originListDetails: [],
});

function reducer(state = defaultState, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case CHANGE_TOP_BANNER:
      // return state.set({ ...state }, { topBanners: action.topBanners });
      return state.set("topBanners", action.topBanners);

    case CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);

    case CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);

    case CHAGE_TOP_LIST:
      return state.set("topLists", action.topLists);

    case CHAGE_TOP_LIST_DETAIL:
      // console.log(action);
      return state.set("topListDetails", action.topListDetails);

    case CHAGE_NEW_LIST_DETAIL:
      // console.log(action);
      return state.set("newListDetails", action.newListDetails);

    case CHAGE_ORIGIN_LIST_DETAIL:
      // console.log(action);
      return state.set("originListDetails", action.originListDetails);
    default:
      return state;
  }
}

export default reducer;
