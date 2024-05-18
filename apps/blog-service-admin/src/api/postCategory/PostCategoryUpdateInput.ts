import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PostCategoryUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
