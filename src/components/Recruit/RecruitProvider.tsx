import { Fragment, useState } from "react";
import { RecruitContextState, RecruitContextUpdater } from "./RecruitContext";

export const RecruitProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [ctx, setCtx] = useState<RecruitContextState>({
    length: 0,
    cursor: 0,
    perPage: 3,
  });

  return (
    <RecruitContextState.Provider value={ctx}>
      <RecruitContextUpdater.Provider value={setCtx}>
        <Fragment>{children}</Fragment>
      </RecruitContextUpdater.Provider>
    </RecruitContextState.Provider>
  );
};
