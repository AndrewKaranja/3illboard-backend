import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdvertismentResolverBase } from "./base/advertisment.resolver.base";
import { Advertisment } from "./base/Advertisment";
import { AdvertismentService } from "./advertisment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Advertisment)
export class AdvertismentResolver extends AdvertismentResolverBase {
  constructor(
    protected readonly service: AdvertismentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
