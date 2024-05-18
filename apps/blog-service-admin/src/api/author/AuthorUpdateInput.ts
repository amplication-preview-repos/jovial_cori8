import { CommentUpdateManyWithoutAuthorsInput } from "./CommentUpdateManyWithoutAuthorsInput";
import { PostUpdateManyWithoutAuthorsInput } from "./PostUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  comments?: CommentUpdateManyWithoutAuthorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  posts?: PostUpdateManyWithoutAuthorsInput;
};
