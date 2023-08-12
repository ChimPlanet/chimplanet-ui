import { RecruitHeader } from "./RecruitHeader";
import { RecruitItem, RecruitItems } from "./RecruitItems";
import { RecruitProvider } from "./RecruitProvider";

export * from "./RecruitContext";
export * from "./RecruitItemContext";

const Recruit = Object.assign(RecruitProvider, {
  Header: RecruitHeader,
  Items: RecruitItems,
  Item: RecruitItem,
});

export { Recruit };
