import React, { useState, useRef } from "react";

import PostsContainer from "components/PostsContainer";
import Post from "components/Post";
import InfiniteScroll from "components/InfiniteScroll";
import { getPopularPosts } from "services/api";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const lastPostId = useRef("");

  async function fetchPopularPosts() {
    try {
      const latestPosts = await getPopularPosts({
        lastPostId: lastPostId.current
      });
      lastPostId.current = latestPosts[latestPosts.length - 1].id;
      setPosts((prevPosts) => {
        return [...prevPosts, ...latestPosts];
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <PostsContainer>
      <InfiniteScroll loadMore={fetchPopularPosts}>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </InfiniteScroll>
    </PostsContainer>
  );
};

export default Main;
