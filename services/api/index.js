import { fetchData } from "./base";

export const getPopularPosts = ({ lastPostId }) =>
  fetchData(
    `/api/posts${lastPostId ? `?lastPostId=${lastPostId}` : ""}`,
    "GET"
  );
