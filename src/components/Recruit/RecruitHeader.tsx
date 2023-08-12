import { styled } from "@/libs";
import { useMemo } from "react";
import { useRecruitContextState, useRecruitContextUpdater } from "./";

export interface Props {
  title: React.ReactNode;
  renderControl?: (handle: ControlHandle) => React.ReactNode;
}

interface ControlHandle {
  isNext: boolean;
  isPrev: boolean;
  nextPage: () => void;
  prevPage: () => void;
}

export const RecruitHeader = ({ title, renderControl }: Props) => {
  const { page, perPage, length } = useRecruitContextState();
  const setRecruitCtx = useRecruitContextUpdater();

  const h = useMemo<ControlHandle>(() => {
    const o = {
      isNext: length > page * perPage,
      isPrev: page > 1,
      nextPage: () =>
        o.isNext && setRecruitCtx((ctx) => ({ ...ctx, page: ctx.page + 1 })),
      prevPage: () =>
        o.isPrev && setRecruitCtx((ctx) => ({ ...ctx, page: ctx.page - 1 })),
    };
    return o;
  }, [length, page, perPage]);

  return (
    <HeaderLayout>
      <div>{title}</div>
      <div>{renderControl && renderControl(h)}</div>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
