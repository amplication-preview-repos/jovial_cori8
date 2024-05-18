import { PostCategoryWhereInput } from "./PostCategoryWhereInput";
import { PostCategoryOrderByInput } from "./PostCategoryOrderByInput";

export type PostCategoryFindManyArgs = {
  where?: PostCategoryWhereInput;
  orderBy?: Array<PostCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
