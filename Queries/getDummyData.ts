import { Post } from "../Types/Pages";

export const FetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = (await res.json()) as Post[];
  return json;
};
