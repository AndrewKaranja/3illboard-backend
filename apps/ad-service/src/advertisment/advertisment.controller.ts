import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdvertismentService } from "./advertisment.service";
import { AdvertismentControllerBase } from "./base/advertisment.controller.base";

@swagger.ApiTags("advertisments")
@common.Controller("advertisments")
export class AdvertismentController extends AdvertismentControllerBase {
  constructor(
    protected readonly service: AdvertismentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
