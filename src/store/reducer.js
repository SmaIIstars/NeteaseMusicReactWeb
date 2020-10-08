import { combineReducers } from "redux-immutable";

import { reducer as recommend } from "@/pages/discover/c-pages/recommend/store";

// 注意这里的简写！！！
const cReducer = combineReducers({
  recommend,
});

export default cReducer;
