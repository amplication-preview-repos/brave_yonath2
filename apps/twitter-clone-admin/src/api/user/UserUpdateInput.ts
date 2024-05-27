import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string | null;
};
