/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  PostCategory as PrismaPostCategory,
  Category as PrismaCategory,
  Post as PrismaPost,
} from "@prisma/client";

export class PostCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PostCategoryCountArgs, "select">
  ): Promise<number> {
    return this.prisma.postCategory.count(args);
  }

  async postCategories<T extends Prisma.PostCategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCategoryFindManyArgs>
  ): Promise<PrismaPostCategory[]> {
    return this.prisma.postCategory.findMany<Prisma.PostCategoryFindManyArgs>(
      args
    );
  }
  async postCategory<T extends Prisma.PostCategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCategoryFindUniqueArgs>
  ): Promise<PrismaPostCategory | null> {
    return this.prisma.postCategory.findUnique(args);
  }
  async createPostCategory<T extends Prisma.PostCategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCategoryCreateArgs>
  ): Promise<PrismaPostCategory> {
    return this.prisma.postCategory.create<T>(args);
  }
  async updatePostCategory<T extends Prisma.PostCategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCategoryUpdateArgs>
  ): Promise<PrismaPostCategory> {
    return this.prisma.postCategory.update<T>(args);
  }
  async deletePostCategory<T extends Prisma.PostCategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PostCategoryDeleteArgs>
  ): Promise<PrismaPostCategory> {
    return this.prisma.postCategory.delete(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.postCategory
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }

  async getPost(parentId: string): Promise<PrismaPost | null> {
    return this.prisma.postCategory
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }
}