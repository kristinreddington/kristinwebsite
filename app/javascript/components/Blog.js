import React, { Component } from "react"; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { List } from 'semantic-ui-react'

import { getPosts } from '../actions';

class Blog extends React.Component {
  render () {
    const { posts } = this.props;
    const postsList = posts.map((post) => {
      return (
        <List.Item>
          <List.Icon name='arrow circle right' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>{post.name}</List.Header>
            <List.Description as='a'>{post.guid}</List.Description>
          </List.Content>
        </List.Item>  
      );
    })

    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getPostsBtn" onClick={() => this.props.getPosts()}>get posts</button>
        <br />
        <List divided relaxed>{ postsList }</List>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  posts: state => state.posts,
}); 

const mapDispatchToProps = { getPosts };

export default connect(structuredSelector, mapDispatchToProps)(Blog);

