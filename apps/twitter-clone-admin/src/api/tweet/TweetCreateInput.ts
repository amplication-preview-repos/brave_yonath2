import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  image?: InputJsonValue;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
