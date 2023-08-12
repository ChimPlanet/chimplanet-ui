import { PropsWithChildren, useState } from "react";
import { RecruitContextState, RecruitContextUpdater } from "./";

export const RecruitProvider = ({ children }: PropsWithChildren) => {
  const [ctx, setCtx] = useState<RecruitContextState>({
    length: 0,
    page: 1,
    perPage: 10,
  });

  return (
    <RecruitContextState.Provider value={ctx}>
      <RecruitContextUpdater.Provider value={setCtx}>
        {children}
      </RecruitContextUpdater.Provider>
    </RecruitContextState.Provider>
  );
};
