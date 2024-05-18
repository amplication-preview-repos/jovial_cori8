import { Category } from "../category/Category";
import { Post } from "../post/Post";

export type PostCategory = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
};
