export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';

export function getPosts() {
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_POSTS_REQUEST });
    return fetch(`v1/posts.json`)
      .then(response => response.json())
      .then(json => dispatch(getPostsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getThingsSuccess(json) {
  return {
    type: GET_POSTS_SUCCESS,
    json
  };
};