import { SortOrder } from "../../util/SortOrder";

export type PostCategoryOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  updatedAt?: SortOrder;
};
