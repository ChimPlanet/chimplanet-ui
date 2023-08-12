import { PropsWithChildren, useLayoutEffect } from "react";
import { useRecruitContextUpdater } from "./RecruitContext";
import { RecruitItemContextState } from "./RecruitItemContext";

type ItemType = RecruitItemContextState;

export interface Props {
  items: ItemType[];
  renderItem: (item: ItemType) => React.ReactNode;
}

export interface ItemProps {
  item: ItemType;
}

export const RecruitItems = <T,>({ items, renderItem }: Props) => {
  if (!Array.isArray(items)) {
    throw Error("items must be array");
  }

  const setRecruitCtx = useRecruitContextUpdater();

  useLayoutEffect(() => {
    setRecruitCtx((ctx) => ({ ...ctx, length: items.length }));
  }, [items.length]);

  return (
    <>
      {items.map((item) => (
        <RecruitItem key={item.id} item={item}>
          {renderItem(item)}
        </RecruitItem>
      ))}
    </>
  );
};

export const RecruitItem = ({
  item,
  children,
}: PropsWithChildren<ItemProps>) => {
  return (
    <RecruitItemContextState.Provider value={item}>
      {children}
    </RecruitItemContextState.Provider>
  );
};
