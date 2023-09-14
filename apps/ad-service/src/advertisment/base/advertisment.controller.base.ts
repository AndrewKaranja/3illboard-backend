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
import { AdvertismentService } from "../advertisment.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdvertismentCreateInput } from "./AdvertismentCreateInput";
import { AdvertismentWhereInput } from "./AdvertismentWhereInput";
import { AdvertismentWhereUniqueInput } from "./AdvertismentWhereUniqueInput";
import { AdvertismentFindManyArgs } from "./AdvertismentFindManyArgs";
import { AdvertismentUpdateInput } from "./AdvertismentUpdateInput";
import { Advertisment } from "./Advertisment";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdvertismentControllerBase {
  constructor(
    protected readonly service: AdvertismentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Advertisment })
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(
    @common.Body() data: AdvertismentCreateInput
  ): Promise<Advertisment> {
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
        adId: true,
        advertiserId: true,
        content: true,
        createdAt: true,
        duration: true,
        id: true,

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
  @swagger.ApiOkResponse({ type: [Advertisment] })
  @ApiNestedQuery(AdvertismentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Advertisment[]> {
    const args = plainToClass(AdvertismentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        adId: true,
        advertiserId: true,
        content: true,
        createdAt: true,
        duration: true,
        id: true,

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
  @swagger.ApiOkResponse({ type: Advertisment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: AdvertismentWhereUniqueInput
  ): Promise<Advertisment | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        adId: true,
        advertiserId: true,
        content: true,
        createdAt: true,
        duration: true,
        id: true,

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
  @swagger.ApiOkResponse({ type: Advertisment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: AdvertismentWhereUniqueInput,
    @common.Body() data: AdvertismentUpdateInput
  ): Promise<Advertisment | null> {
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
          adId: true,
          advertiserId: true,
          content: true,
          createdAt: true,
          duration: true,
          id: true,

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
  @swagger.ApiOkResponse({ type: Advertisment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: AdvertismentWhereUniqueInput
  ): Promise<Advertisment | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          adId: true,
          advertiserId: true,
          content: true,
          createdAt: true,
          duration: true,
          id: true,

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
