/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PostCategory } from "./PostCategory";
import { PostCategoryCountArgs } from "./PostCategoryCountArgs";
import { PostCategoryFindManyArgs } from "./PostCategoryFindManyArgs";
import { PostCategoryFindUniqueArgs } from "./PostCategoryFindUniqueArgs";
import { CreatePostCategoryArgs } from "./CreatePostCategoryArgs";
import { UpdatePostCategoryArgs } from "./UpdatePostCategoryArgs";
import { DeletePostCategoryArgs } from "./DeletePostCategoryArgs";
import { Category } from "../../category/base/Category";
import { Post } from "../../post/base/Post";
import { PostCategoryService } from "../postCategory.service";
@graphql.Resolver(() => PostCategory)
export class PostCategoryResolverBase {
  constructor(protected readonly service: PostCategoryService) {}

  async _postCategoriesMeta(
    @graphql.Args() args: PostCategoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PostCategory])
  async postCategories(
    @graphql.Args() args: PostCategoryFindManyArgs
  ): Promise<PostCategory[]> {
    return this.service.postCategories(args);
  }

  @graphql.Query(() => PostCategory, { nullable: true })
  async postCategory(
    @graphql.Args() args: PostCategoryFindUniqueArgs
  ): Promise<PostCategory | null> {
    const result = await this.service.postCategory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PostCategory)
  async createPostCategory(
    @graphql.Args() args: CreatePostCategoryArgs
  ): Promise<PostCategory> {
    return await this.service.createPostCategory({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        post: args.data.post
          ? {
              connect: args.data.post,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PostCategory)
  async updatePostCategory(
    @graphql.Args() args: UpdatePostCategoryArgs
  ): Promise<PostCategory | null> {
    try {
      return await this.service.updatePostCategory({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          post: args.data.post
            ? {
                connect: args.data.post,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PostCategory)
  async deletePostCategory(
    @graphql.Args() args: DeletePostCategoryArgs
  ): Promise<PostCategory | null> {
    try {
      return await this.service.deletePostCategory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: PostCategory
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Post, {
    nullable: true,
    name: "post",
  })
  async getPost(@graphql.Parent() parent: PostCategory): Promise<Post | null> {
    const result = await this.service.getPost(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}