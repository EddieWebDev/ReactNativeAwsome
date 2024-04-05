import axios from "axios";
import { Post } from "../Types/Pages";

export const FetchPosts = async () => {
  const res = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  return res.data;
};
