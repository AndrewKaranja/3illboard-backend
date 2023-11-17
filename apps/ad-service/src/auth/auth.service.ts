import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Credentials, SignupCredentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";
import { UserService } from "../user/user.service";
import { User } from "src/user/base/User";


@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly userService: UserService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles,firstName,lastName,lastLogin,phoneNumber,email} = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList,firstName,lastName,lastLogin,phoneNumber,email };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
      username: user.username,
      email:user.email,
      id: user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      phoneNumber:user.phoneNumber,
      lastLogin:user.lastLogin
    };
  }


  // register new user

  async signup(signupCredentials: SignupCredentials): Promise<UserInfo> {
    // Extract the username and password from the body of the request
    const { username, password,firstName,lastName,phoneNumber,email,lastLogin } = signupCredentials;
    // Here we attempt to create a new user
    const user = await this.userService.create({
      data: {
        username,
        password,
        firstName,
        lastName,
        lastLogin,
        email,
        phoneNumber,
        roles: ["user"], // Here we assign every new user the `Todo User` role
      },
    });
    // If creating a new user fails throw an error
    if (!user) {
      throw new UnauthorizedException("Could not create user");
    }
    // Create an access token for the newly created user
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    // Return the access token as well as the some details about the user
    return {
      accessToken,
      username: user.username,
      email:user.email,
      id: user.id,
      roles: (user.roles as {roles: string[]}).roles,
      firstName:user.firstName,
      lastName:user.lastName,
      phoneNumber:user.phoneNumber,
      lastLogin:user.lastLogin
    };
  }

// check is user exists
  async me(authorization: string = ""): Promise<User> {
    const bearer = authorization.replace(/^Bearer\s/, "");
    const username = this.tokenService.decodeToken(bearer);
    const result = await this.userService.findOne({
       where: { username },
       select: {
          createdAt: true,
          firstName: true,
          id: true,
          lastName: true,
          phoneNumber: true,
          roles: true,
          updatedAt: true,
          username: true,
       },
    });
    if (!result) {
       throw new NotFoundException(`No resource was found for ${username}`);
    }
 
    return result;
 }

 // check is user exists
 async checkUser(email: string){
  const userStatus= await this.userService.findOne({
    where:{username:email},
    select: {username:true,firstName:true,lastName:true},
  })
  if(!userStatus){
    throw new NotFoundException(`No resource was found for ${email}`);
  }

  return userStatus;
}

}
