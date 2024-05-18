import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type PostCategoryWhereInput = {
  category?: CategoryWhereUniqueInput;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
};
