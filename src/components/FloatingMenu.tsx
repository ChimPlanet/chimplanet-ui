import { cloneElement, useMemo } from "react";
import { PropTypes, styled } from "@/libs";

interface FloatingAnchorContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  anchorRef: React.MutableRefObject<HTMLDivElement>;
  position: "absolute" | "fixed";
  close(): void;
  zIndex?: number;
  children: JSX.Element;
}

export const FloatingMenu: React.FC<FloatingAnchorContainerProps> = ({
  children,
  anchorRef,
  close,
  position = "absolute",
  zIndex = 100,
  ...props
}) => {
  const isFixed = useMemo(() => position === "fixed", [position]);

  return (
    <Container
      onMouseLeave={close}
      position={position}
      zIndex={zIndex}
      top={
        (isFixed ? 0 : getPageY()) +
        anchorRef.current?.getBoundingClientRect().bottom
      }
      left={anchorRef.current?.getBoundingClientRect().left}
      {...props}
    >
      {cloneElement(children, { close })}
    </Container>
  );
};

FloatingMenu.propTypes = {
  children: PropTypes.element.isRequired,
};

const getPageY = () =>
  window.pageYOffset ||
  document.documentElement.scrollTop ||
  document.body.scrollTop ||
  0;

const Container = styled.div`
  position: ${(props: any) => props.position};
  top: ${(props: any) => props.top}px;
  left: ${(props: any) => props.left}px;
  z-index: ${(props: any) => props.zIndex};
` as any;

export default FloatingMenu;
