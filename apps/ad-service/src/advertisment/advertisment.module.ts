import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvertismentModuleBase } from "./base/advertisment.module.base";
import { AdvertismentService } from "./advertisment.service";
import { AdvertismentController } from "./advertisment.controller";
import { AdvertismentResolver } from "./advertisment.resolver";

@Module({
  imports: [AdvertismentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdvertismentController],
  providers: [AdvertismentService, AdvertismentResolver],
  exports: [AdvertismentService],
})
export class AdvertismentModule {}
