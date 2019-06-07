import { combineReducers } from 'redux';

import { postsReducer } from './posts.tsx';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;