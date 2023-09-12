import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdvertismentServiceBase } from "./base/advertisment.service.base";

@Injectable()
export class AdvertismentService extends AdvertismentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
