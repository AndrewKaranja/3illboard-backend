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
import { SpaceService } from "../space.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SpaceCreateInput } from "./SpaceCreateInput";
import { SpaceWhereInput } from "./SpaceWhereInput";
import { SpaceWhereUniqueInput } from "./SpaceWhereUniqueInput";
import { SpaceFindManyArgs } from "./SpaceFindManyArgs";
import { SpaceUpdateInput } from "./SpaceUpdateInput";
import { Space } from "./Space";
import { AdvertismentFindManyArgs } from "../../advertisment/base/AdvertismentFindManyArgs";
import { Advertisment } from "../../advertisment/base/Advertisment";
import { AdvertismentWhereUniqueInput } from "../../advertisment/base/AdvertismentWhereUniqueInput";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { BookingWhereUniqueInput } from "../../booking/base/BookingWhereUniqueInput";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SpaceControllerBase {
  constructor(
    protected readonly service: SpaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Space })
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: SpaceCreateInput): Promise<Space> {
    return await this.service.create({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        availability: true,
        bookingFee: true,
        country: true,
        county: true,
        createdAt: true,
        description: true,
        dimensions: true,
        distanceToGround: true,
        facingRoad: true,
        farthestVisibility: true,
        id: true,
        landmark: true,
        legalDocs: true,
        location: true,
        maintenanceCharge: true,
        maintenanceInterval: true,
        minListingPeriod: true,
        ownerId: true,
        photos: true,
        price: true,
        pricingPeriod: true,
        showPriceAs: true,
        spaceContact: true,
        spaceFeatures: true,
        spaceId: true,
        spaceRestrictions: true,
        spaceTitle: true,
        spaceType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visibleAtNight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Space] })
  @ApiNestedQuery(SpaceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Space[]> {
    const args = plainToClass(SpaceFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        availability: true,
        bookingFee: true,
        country: true,
        county: true,
        createdAt: true,
        description: true,
        dimensions: true,
        distanceToGround: true,
        facingRoad: true,
        farthestVisibility: true,
        id: true,
        landmark: true,
        legalDocs: true,
        location: true,
        maintenanceCharge: true,
        maintenanceInterval: true,
        minListingPeriod: true,
        ownerId: true,
        photos: true,
        price: true,
        pricingPeriod: true,
        showPriceAs: true,
        spaceContact: true,
        spaceFeatures: true,
        spaceId: true,
        spaceRestrictions: true,
        spaceTitle: true,
        spaceType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visibleAtNight: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Space })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: SpaceWhereUniqueInput
  ): Promise<Space | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        availability: true,
        bookingFee: true,
        country: true,
        county: true,
        createdAt: true,
        description: true,
        dimensions: true,
        distanceToGround: true,
        facingRoad: true,
        farthestVisibility: true,
        id: true,
        landmark: true,
        legalDocs: true,
        location: true,
        maintenanceCharge: true,
        maintenanceInterval: true,
        minListingPeriod: true,
        ownerId: true,
        photos: true,
        price: true,
        pricingPeriod: true,
        showPriceAs: true,
        spaceContact: true,
        spaceFeatures: true,
        spaceId: true,
        spaceRestrictions: true,
        spaceTitle: true,
        spaceType: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },

        visibleAtNight: true,
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
  @swagger.ApiOkResponse({ type: Space })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() data: SpaceUpdateInput
  ): Promise<Space | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          availability: true,
          bookingFee: true,
          country: true,
          county: true,
          createdAt: true,
          description: true,
          dimensions: true,
          distanceToGround: true,
          facingRoad: true,
          farthestVisibility: true,
          id: true,
          landmark: true,
          legalDocs: true,
          location: true,
          maintenanceCharge: true,
          maintenanceInterval: true,
          minListingPeriod: true,
          ownerId: true,
          photos: true,
          price: true,
          pricingPeriod: true,
          showPriceAs: true,
          spaceContact: true,
          spaceFeatures: true,
          spaceId: true,
          spaceRestrictions: true,
          spaceTitle: true,
          spaceType: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          visibleAtNight: true,
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
  @swagger.ApiOkResponse({ type: Space })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: SpaceWhereUniqueInput
  ): Promise<Space | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          availability: true,
          bookingFee: true,
          country: true,
          county: true,
          createdAt: true,
          description: true,
          dimensions: true,
          distanceToGround: true,
          facingRoad: true,
          farthestVisibility: true,
          id: true,
          landmark: true,
          legalDocs: true,
          location: true,
          maintenanceCharge: true,
          maintenanceInterval: true,
          minListingPeriod: true,
          ownerId: true,
          photos: true,
          price: true,
          pricingPeriod: true,
          showPriceAs: true,
          spaceContact: true,
          spaceFeatures: true,
          spaceId: true,
          spaceRestrictions: true,
          spaceTitle: true,
          spaceType: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },

          visibleAtNight: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/advertisments")
  @ApiNestedQuery(AdvertismentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "read",
    possession: "any",
  })
  async findManyAdvertisments(
    @common.Req() request: Request,
    @common.Param() params: SpaceWhereUniqueInput
  ): Promise<Advertisment[]> {
    const query = plainToClass(AdvertismentFindManyArgs, request.query);
    const results = await this.service.findAdvertisments(params.id, {
      ...query,
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

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/advertisments")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async connectAdvertisments(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: AdvertismentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisments: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/advertisments")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async updateAdvertisments(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: AdvertismentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisments: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/advertisments")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async disconnectAdvertisments(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: AdvertismentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      advertisments: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/bookings")
  @ApiNestedQuery(BookingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async findManyBookings(
    @common.Req() request: Request,
    @common.Param() params: SpaceWhereUniqueInput
  ): Promise<Booking[]> {
    const query = plainToClass(BookingFindManyArgs, request.query);
    const results = await this.service.findBookings(params.id, {
      ...query,
      select: {
        adId: true,
        advertiserId: true,
        bookingId: true,
        createdAt: true,
        endDate: true,
        id: true,

        space: {
          select: {
            id: true,
          },
        },

        startDate: true,
        totalPrice: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async connectBookings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async updateBookings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/bookings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async disconnectBookings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: BookingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      bookings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ratings")
  @ApiNestedQuery(RatingFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async findManyRatings(
    @common.Req() request: Request,
    @common.Param() params: SpaceWhereUniqueInput
  ): Promise<Rating[]> {
    const query = plainToClass(RatingFindManyArgs, request.query);
    const results = await this.service.findRatings(params.id, {
      ...query,
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

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async connectRatings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async updateRatings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ratings")
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async disconnectRatings(
    @common.Param() params: SpaceWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
