import { styled } from "@chimplanet/ui/libs";

export const OverlayContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const OverlayPane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ zIndex }: { zIndex: number }) => zIndex};
`;

export const Image = styled.img``;
