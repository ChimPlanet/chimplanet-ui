import { styled } from "@chimplanet/ui/libs";
import { createElement, useMemo } from "react";
import { useRecruitContextState, useRecruitContextUpdater } from "./";

export interface Props {
  children: React.ReactNode;
  as?: React.ElementType;
  renderControl?: null | ((handle: ControlHandle) => React.ReactNode);
}

interface ControlHandle {
  isNext: boolean;
  isPrev: boolean;
  nextPage: () => void;
  prevPage: () => void;
}

export const RecruitHeader = ({
  children,
  renderControl,
  as = "div",
}: Props) => {
  const state = useRecruitContextState();
  const setRecruitCtx = useRecruitContextUpdater();

  const h = useMemo<ControlHandle>(() => {
    const { cursor, perPage, length } = state;

    const o = {
      isNext: length > cursor + perPage,
      isPrev: cursor > 0,
      nextPage: () =>
        o.isNext &&
        setRecruitCtx((ctx) => ({ ...ctx, cursor: ctx.cursor + 1 })),
      prevPage: () =>
        o.isPrev &&
        setRecruitCtx((ctx) => ({ ...ctx, cursor: ctx.cursor - 1 })),
    };
    return o;
  }, [state]);

  const content = createElement(as, null, children);

  return (
    <Container>
      {content}
      {renderControl && renderControl(h)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
