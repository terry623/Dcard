import React from "react";

import PostsContainer from "components/PostsContainer";
import Post from "components/Post";

const posts = [
  { title: 123, excerpt: 456 },
  { title: 123, excerpt: 456 },
  { title: 123, excerpt: 456 }
];

const Main = () => {
  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} excerpt={post.excerpt} />
      ))}
    </PostsContainer>
  );
};

export default Main;
