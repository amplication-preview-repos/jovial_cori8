import * as graphql from "@nestjs/graphql";
import { PostCategoryResolverBase } from "./base/postCategory.resolver.base";
import { PostCategory } from "./base/PostCategory";
import { PostCategoryService } from "./postCategory.service";

@graphql.Resolver(() => PostCategory)
export class PostCategoryResolver extends PostCategoryResolverBase {
  constructor(protected readonly service: PostCategoryService) {
    super(service);
  }
}
