import { createContext, useContext } from "react";

interface RecruitContextState {
  length: number;
  cursor: number;
  perPage: number;
}

type RecruitContextUpdater = React.Dispatch<
  React.SetStateAction<RecruitContextState>
>;

const RecruitContextState = createContext<RecruitContextState | null>(null);
const RecruitContextUpdater = createContext<RecruitContextUpdater | null>(null);

const useRecruitContextState = () => {
  const context = useContext(RecruitContextState);
  if (!context) {
    throw new Error(
      "useRecruitContextState must be used within a RecruitContextState"
    );
  }

  return context;
};

const useRecruitContextUpdater = () => {
  const context = useContext(RecruitContextUpdater);
  if (!context) {
    throw new Error(
      "useRecruitContextUpdater must be used within a RecruitContextState"
    );
  }
  return context;
};

export {
  RecruitContextState,
  RecruitContextUpdater,
  useRecruitContextState,
  useRecruitContextUpdater,
};
