import { PostCategoryCreateNestedManyWithoutCategoriesInput } from "./PostCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  postCategories?: PostCategoryCreateNestedManyWithoutCategoriesInput;
};
