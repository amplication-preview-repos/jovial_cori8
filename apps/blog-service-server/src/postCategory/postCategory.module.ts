import { Module } from "@nestjs/common";
import { PostCategoryModuleBase } from "./base/postCategory.module.base";
import { PostCategoryService } from "./postCategory.service";
import { PostCategoryController } from "./postCategory.controller";
import { PostCategoryResolver } from "./postCategory.resolver";

@Module({
  imports: [PostCategoryModuleBase],
  controllers: [PostCategoryController],
  providers: [PostCategoryService, PostCategoryResolver],
  exports: [PostCategoryService],
})
export class PostCategoryModule {}
