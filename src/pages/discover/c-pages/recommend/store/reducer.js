import { Map } from "immutable";

import {
  CHANGE_HOT_RECOMMEND,
  CHANGE_TOP_BANNER,
  CHANGE_NEW_ALBUM,
} from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
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

    default:
      return state;
  }
}

export default reducer;
