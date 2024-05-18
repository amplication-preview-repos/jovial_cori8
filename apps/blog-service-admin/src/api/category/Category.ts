import { PostCategory } from "../postCategory/PostCategory";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  postCategories?: Array<PostCategory>;
  updatedAt: Date;
};
