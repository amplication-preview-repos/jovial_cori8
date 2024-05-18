import { PostCategoryUpdateManyWithoutCategoriesInput } from "./PostCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  postCategories?: PostCategoryUpdateManyWithoutCategoriesInput;
};
