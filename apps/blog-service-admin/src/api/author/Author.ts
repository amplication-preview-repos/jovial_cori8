import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";

export type Author = {
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
