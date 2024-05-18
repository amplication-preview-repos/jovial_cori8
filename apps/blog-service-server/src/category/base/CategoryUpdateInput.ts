/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PostCategoryUpdateManyWithoutCategoriesInput } from "./PostCategoryUpdateManyWithoutCategoriesInput";
import { Type } from "class-transformer";

@InputType()
class CategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => PostCategoryUpdateManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => PostCategoryUpdateManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => PostCategoryUpdateManyWithoutCategoriesInput, {
    nullable: true,
  })
  postCategories?: PostCategoryUpdateManyWithoutCategoriesInput;
}

export { CategoryUpdateInput as CategoryUpdateInput };
