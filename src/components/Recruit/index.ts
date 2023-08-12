export * from "./RecruitContext";
export * from "./RecruitItemContext";

import { RecruitHeader } from "./RecruitHeader";
import { RecruitItem, RecruitItems } from "./RecruitItems";
import { RecruitProvider } from "./RecruitProvider";

export default Object.assign(RecruitProvider, {
  Header: RecruitHeader,
  Items: RecruitItems,
  Item: RecruitItem,
});
