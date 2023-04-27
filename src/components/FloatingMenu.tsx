import { cloneElement } from "react";
import { PropTypes, styled } from "@/libs";

interface FloatingAnchorContainerProps {
  anchorRef: React.MutableRefObject<HTMLDivElement>;
  position: "absolute" | "fixed";
  close(): void;
  zIndex: string;
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
  return (
    <Container
      onMouseLeave={close}
      position={position}
      zIndex={zIndex}
      top={anchorRef.current?.getBoundingClientRect().bottom}
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

const Container = styled.div`
  position: ${(props: any) => props.position};
  top: ${(props: any) => props.top}px;
  left: ${(props: any) => props.left}px;
  z-index: ${(props: any) => props.zIndex};
` as any;

export default FloatingMenu;
