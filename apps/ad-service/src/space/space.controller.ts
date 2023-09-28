import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpaceService } from "./space.service";
import { SpaceControllerBase } from "./base/space.controller.base";

@swagger.ApiTags("spaces")
@common.Controller("spaces")
export class SpaceController extends SpaceControllerBase {
  constructor(
    protected readonly service: SpaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
