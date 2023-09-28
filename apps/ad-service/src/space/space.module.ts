import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpaceModuleBase } from "./base/space.module.base";
import { SpaceService } from "./space.service";
import { SpaceController } from "./space.controller";
import { SpaceResolver } from "./space.resolver";

@Module({
  imports: [SpaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpaceController],
  providers: [SpaceService, SpaceResolver],
  exports: [SpaceService],
})
export class SpaceModule {}
