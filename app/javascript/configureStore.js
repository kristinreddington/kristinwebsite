import { createStore, applyMiddleware } from "redux";

import thunk from 'redux-thunk';

import rootReducer from "./reducers";

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { 
  posts: [
    {
      name: "test",
      guid: "123"
    }
  ] 
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      )
    )
  );
  return store;
}; 