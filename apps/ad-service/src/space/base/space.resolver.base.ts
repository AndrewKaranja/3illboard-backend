/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSpaceArgs } from "./CreateSpaceArgs";
import { UpdateSpaceArgs } from "./UpdateSpaceArgs";
import { DeleteSpaceArgs } from "./DeleteSpaceArgs";
import { SpaceCountArgs } from "./SpaceCountArgs";
import { SpaceFindManyArgs } from "./SpaceFindManyArgs";
import { SpaceFindUniqueArgs } from "./SpaceFindUniqueArgs";
import { Space } from "./Space";
import { AdvertismentFindManyArgs } from "../../advertisment/base/AdvertismentFindManyArgs";
import { Advertisment } from "../../advertisment/base/Advertisment";
import { BookingFindManyArgs } from "../../booking/base/BookingFindManyArgs";
import { Booking } from "../../booking/base/Booking";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { User } from "../../user/base/User";
import { SpaceService } from "../space.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Space)
export class SpaceResolverBase {
  constructor(
    protected readonly service: SpaceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "read",
    possession: "any",
  })
  async _spacesMeta(
    @graphql.Args() args: SpaceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Space])
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "read",
    possession: "any",
  })
  async spaces(@graphql.Args() args: SpaceFindManyArgs): Promise<Space[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Space, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "read",
    possession: "own",
  })
  async space(
    @graphql.Args() args: SpaceFindUniqueArgs
  ): Promise<Space | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Space)
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "create",
    possession: "any",
  })
  async createSpace(@graphql.Args() args: CreateSpaceArgs): Promise<Space> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Space)
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "update",
    possession: "any",
  })
  async updateSpace(
    @graphql.Args() args: UpdateSpaceArgs
  ): Promise<Space | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Space)
  @nestAccessControl.UseRoles({
    resource: "Space",
    action: "delete",
    possession: "any",
  })
  async deleteSpace(
    @graphql.Args() args: DeleteSpaceArgs
  ): Promise<Space | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Advertisment], { name: "advertisments" })
  @nestAccessControl.UseRoles({
    resource: "Advertisment",
    action: "read",
    possession: "any",
  })
  async resolveFieldAdvertisments(
    @graphql.Parent() parent: Space,
    @graphql.Args() args: AdvertismentFindManyArgs
  ): Promise<Advertisment[]> {
    const results = await this.service.findAdvertisments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Booking], { name: "bookings" })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async resolveFieldBookings(
    @graphql.Parent() parent: Space,
    @graphql.Args() args: BookingFindManyArgs
  ): Promise<Booking[]> {
    const results = await this.service.findBookings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Rating], { name: "ratings" })
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  async resolveFieldRatings(
    @graphql.Parent() parent: Space,
    @graphql.Args() args: RatingFindManyArgs
  ): Promise<Rating[]> {
    const results = await this.service.findRatings(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async resolveFieldUser(
    @graphql.Parent() parent: Space
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
