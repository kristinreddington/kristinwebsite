interface Post {
    name: string,
    guid: string
  };
  
  const initialState: Post[] = [];
  
  export function postsReducer(state = initialState, action): Post[] {
    console.log("postsReducer type:", action.type);
    switch (action.type) {
      case "GET_POSTS_SUCCESS": 
        return action.json.posts;
    }
    return state;
  }
