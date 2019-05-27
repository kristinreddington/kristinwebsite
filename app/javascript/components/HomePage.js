import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';

function getPosts() {
  console.log('getPosts() Action!')
  return {
    type: GET_POSTS_REQUEST
  }
}

class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getPostsBtn" onClick={() => this.props.getPosts()}>Get Posts</button>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  posts: state => state.posts,
});

const mapDispatchToProps = { getPosts };

export default connect(structuredSelector, mapDispatchToProps )(HomePage);
