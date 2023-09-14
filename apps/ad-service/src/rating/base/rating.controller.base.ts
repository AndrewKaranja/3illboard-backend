/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RatingService } from "../rating.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RatingCreateInput } from "./RatingCreateInput";
import { RatingWhereInput } from "./RatingWhereInput";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingUpdateInput } from "./RatingUpdateInput";
import { Rating } from "./Rating";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RatingControllerBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rating })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: RatingCreateInput): Promise<Rating> {
    return await this.service.create({
      data: {
        ...data,

        space: data.space
          ? {
              connect: data.space,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        advertiserId: true,
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        reviewId: true,

        space: {
          select: {
            id: true,
          },
        },

        spaceId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Rating] })
  @ApiNestedQuery(RatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Rating[]> {
    const args = plainToClass(RatingFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        advertiserId: true,
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        reviewId: true,

        space: {
          select: {
            id: true,
          },
        },

        spaceId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        advertiserId: true,
        comment: true,
        createdAt: true,
        id: true,
        rating: true,
        reviewId: true,

        space: {
          select: {
            id: true,
          },
        },

        spaceId: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body() data: RatingUpdateInput
  ): Promise<Rating | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          space: data.space
            ? {
                connect: data.space,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          advertiserId: true,
          comment: true,
          createdAt: true,
          id: true,
          rating: true,
          reviewId: true,

          space: {
            select: {
              id: true,
            },
          },

          spaceId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          advertiserId: true,
          comment: true,
          createdAt: true,
          id: true,
          rating: true,
          reviewId: true,

          space: {
            select: {
              id: true,
            },
          },

          spaceId: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
