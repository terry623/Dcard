import { fetchData } from "./base";

export const getPopularPosts = (params) =>
  fetchData("/api/posts", "GET", params);
