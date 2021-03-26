import React, { useEffect, useState } from "react";

import PostsContainer from "components/PostsContainer";
import Post from "components/Post";
import { getPopularPosts } from "services/api";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPopularPosts() {
      try {
        const posts = await getPopularPosts();
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    }

    fetchPopularPosts();
  }, []);

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} excerpt={post.excerpt} />
      ))}
    </PostsContainer>
  );
};

export default Main;
