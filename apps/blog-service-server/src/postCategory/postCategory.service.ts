import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostCategoryServiceBase } from "./base/postCategory.service.base";

@Injectable()
export class PostCategoryService extends PostCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
