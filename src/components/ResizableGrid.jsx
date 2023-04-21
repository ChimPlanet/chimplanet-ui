import { useSizeType } from "@/context/sizeTypeContext";
import { cloneElement, useMemo } from "react";
import styled from "styled-components";
/**
 * @typedef {object} ResizableGridProps
 * @property {import('react').ReactNode} children
 *
 *
 * @param {ResizableGridProps & import('react').DetailedHTMLProps<HTMLDivElement>} param0
 * @returns
 */
export function ResizableGrid({ children, ...props }) {
  const sizeType = useSizeType();

  const columns = useMemo(() => (sizeType === "desktop" ? 4 : 3), [sizeType]);

  return (
    <Container columns={columns} {...props}>
      {cloneElement(children, { columns })}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
`;

export default ResizableGrid;
