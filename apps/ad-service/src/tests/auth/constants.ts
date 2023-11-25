import { Credentials } from "../../auth/Credentials";
import { UserInfo } from "../../auth/UserInfo";

export const VALID_ID = "1";

export const TEST_USER: UserInfo = {
  id: "cl7qmjh4h0000tothyjqapgj5",
  roles: ["User"],
  username: "ofek@gmail.com",
  email:"ofek@gmail.com",
  firstName:"Omollo",
  lastName:"fekuchi",
  phoneNumber:"254712345475",
  lastLogin: new Date("2023-10-24T11:42:24.207+00:00")
};
export const SIGN_TOKEN = "SIGN_TOKEN";
export const VALID_CREDENTIALS: Credentials = {
  username: "Valid User",
  password: "Valid User Password",
};
export const INVALID_CREDENTIALS: Credentials = {
  username: "Invalid User",
  password: "Invalid User Password",
};
