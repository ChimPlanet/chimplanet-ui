import { RecruitHeader } from "./RecruitHeader";
import { RecruitProvider } from "./RecruitProvider";

export * from "./RecruitContext";
export * from "./RecruitItemContext";

const Recruit = Object.assign(RecruitProvider, {
  Header: RecruitHeader,
});

export { Recruit };
