/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Space,
  Advertisment,
  Booking,
  Rating,
  User,
} from "@prisma/client";

export class SpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SpaceCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceCountArgs>
  ): Promise<number> {
    return this.prisma.space.count(args);
  }

  async findMany<T extends Prisma.SpaceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceFindManyArgs>
  ): Promise<Space[]> {
    return this.prisma.space.findMany(args);
  }
  async findOne<T extends Prisma.SpaceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceFindUniqueArgs>
  ): Promise<Space | null> {
    return this.prisma.space.findUnique(args);
  }
  async create<T extends Prisma.SpaceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>
  ): Promise<Space> {
    return this.prisma.space.create<T>(args);
  }
  async update<T extends Prisma.SpaceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>
  ): Promise<Space> {
    return this.prisma.space.update<T>(args);
  }
  async delete<T extends Prisma.SpaceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>
  ): Promise<Space> {
    return this.prisma.space.delete(args);
  }

  async findAdvertisments(
    parentId: string,
    args: Prisma.AdvertismentFindManyArgs
  ): Promise<Advertisment[]> {
    return this.prisma.space
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .advertisments(args);
  }

  async findBookings(
    parentId: string,
    args: Prisma.BookingFindManyArgs
  ): Promise<Booking[]> {
    return this.prisma.space
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .bookings(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<Rating[]> {
    return this.prisma.space
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.space
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
