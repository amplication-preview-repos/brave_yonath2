import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  image?: InputJsonValue;
  likes?: LikeUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
