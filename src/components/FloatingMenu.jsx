import PropTypes from "prop-types";
import { cloneElement } from "react";
import { styled } from "@/libs";

/**
 * @typedef {object} FloatingAnchorContainerProps
 * @property {JSX.Element} children
 * @property {React.MutableRefObject<HTMLDivElement>} anchorRef
 * @property {"absolute"|"fixed"} position
 * @property {()=>void} close
 *
 */
export function FloatingMenu({
  children,
  anchorRef,
  position = "absolute",
  close,
  zIndex = 100,
  ...props
}) {
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
}

FloatingMenu.propTypes = {
  children: PropTypes.node.isRequired,
};

const Container = styled.div`
  position: ${(props) => props.position};
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  z-index: ${(props) => props.zIndex};
`;

export default FloatingMenu;
