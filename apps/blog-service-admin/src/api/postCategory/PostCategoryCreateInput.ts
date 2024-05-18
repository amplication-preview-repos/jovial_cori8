import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PostCategoryCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
};
