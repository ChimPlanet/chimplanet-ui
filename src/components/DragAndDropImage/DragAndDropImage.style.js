import styled from 'styled-components';

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
  z-index: ${({ zIndex }) => zIndex};
`;

export const Image = styled.img``;
