import { PropsWithChildren, createContext, useContext } from "react";

export interface RecruitItemContextState {
  id: number;
  title: string;
  viewCount: number;
  writeAt: string;
  writer: string;
  closed: boolean;
  regular: boolean;
  thumbnailURL?: string;
  redirectURL: string;
  bookmarked: boolean;
}

const RecruitItemContextState = createContext<RecruitItemContextState | null>(
  null
);

const useRecruitItem = () => {
  const context = useContext(RecruitItemContextState);
  if (!context) {
    throw new Error(
      "useRecruitContextState must be used within a RecruitContextState"
    );
  }
  return context;
};

const withRecruitItem = <
  T extends PropsWithChildren<{ item: RecruitItemContextState }>
>(
  Component: React.FC<T>
) => {
  return (props: T) => {
    return (
      <RecruitItemContextState.Provider value={props.item}>
        <Component {...props} />
      </RecruitItemContextState.Provider>
    );
  };
};

export { RecruitItemContextState, useRecruitItem, withRecruitItem };
