import {
  FC,
  cloneElement,
  useMemo,
  DetailedHTMLProps,
  HTMLAttributes,
} from "react";

import { styled } from "@/libs";
import { useScreenType } from "@/contexts";
import { ScreenType } from "chimplanet-ui";

interface ResizableGridProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  calcNumberOfColumns(screenType: ScreenType): number;
  children: JSX.Element;
}

export const ResizableGrid: FC<ResizableGridProps> = ({
  children,
  calcNumberOfColumns,
  ...props
}) => {
  const screenType = useScreenType();

  const columns = useMemo(
    () => calcNumberOfColumns(screenType),
    [screenType, calcNumberOfColumns]
  );

  return (
    <Container columns={columns} {...props}>
      {cloneElement(children, { columns })}
    </Container>
  );
};

const Container = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
` as any;
