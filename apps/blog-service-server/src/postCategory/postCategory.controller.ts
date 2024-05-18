import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostCategoryService } from "./postCategory.service";
import { PostCategoryControllerBase } from "./base/postCategory.controller.base";

@swagger.ApiTags("postCategories")
@common.Controller("postCategories")
export class PostCategoryController extends PostCategoryControllerBase {
  constructor(protected readonly service: PostCategoryService) {
    super(service);
  }
}
