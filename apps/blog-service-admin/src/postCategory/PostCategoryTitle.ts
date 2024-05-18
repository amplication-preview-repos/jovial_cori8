import { PostCategory as TPostCategory } from "../api/postCategory/PostCategory";

export const POSTCATEGORY_TITLE_FIELD = "id";

export const PostCategoryTitle = (record: TPostCategory): string => {
  return record.id?.toString() || String(record.id);
};
