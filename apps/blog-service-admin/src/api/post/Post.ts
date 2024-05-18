import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";
import { PostCategory } from "../postCategory/PostCategory";

export type Post = {
  author?: Author | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  postCategories?: Array<PostCategory>;
  title: string | null;
  updatedAt: Date;
};
