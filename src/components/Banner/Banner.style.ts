import { styled } from "@/libs";

export const horizontalPadding = 10;

export const Container = styled.section`
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.media.desktop`
    ${`.carousel__container {
      width: ${theme.widths.desktop + 2 * horizontalPadding}px;
      height: 375px;
    }`}
  `}
  ${({ theme }) => theme.media.tablet`
    ${`.carousel__container {
      width: ${theme.widths.tablet + 2 * horizontalPadding}px;
      height: 200px;
    }`}
  `}
  
  ${({ theme }) => theme.media.mobile`
    ${`
      .carousel__container {
        width: ${290 + 2 * horizontalPadding}px;
        height: 180px;
      }
      .carousel-handle {
        display: none;
      }
    `}
  `}
`;

export const AnchorBannerItem = styled.div`
  height: 100%;
  -webkit-user-drag: none;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop + 2 * horizontalPadding}px`};
  `}
  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet + 2 * horizontalPadding}px`};
  `}

  ${({ theme }) => theme.media.mobile`
    ${`width: ${290 + 2 * horizontalPadding}px`};
  `}

  & img {
    padding: 0px ${horizontalPadding}px;
    border-radius: 25px;
  }
`;
