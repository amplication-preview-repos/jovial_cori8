/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PostCategoryWhereUniqueInput } from "./PostCategoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PostCategoryUpdateInput } from "./PostCategoryUpdateInput";

@ArgsType()
class UpdatePostCategoryArgs {
  @ApiProperty({
    required: true,
    type: () => PostCategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PostCategoryWhereUniqueInput)
  @Field(() => PostCategoryWhereUniqueInput, { nullable: false })
  where!: PostCategoryWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PostCategoryUpdateInput,
  })
  @ValidateNested()
  @Type(() => PostCategoryUpdateInput)
  @Field(() => PostCategoryUpdateInput, { nullable: false })
  data!: PostCategoryUpdateInput;
}

export { UpdatePostCategoryArgs as UpdatePostCategoryArgs };