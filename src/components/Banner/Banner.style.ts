import { styled } from "@/libs";

export const Container = styled.section`
  --indicator-width: 1060px;
  position: relative;
  & img {
    border-radius: 30px / 25px;
    width: 100%;
  }

  & .banner__indicator-con {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .banner__indicator-content {
    width: var(--indicator-width);
    margin-bottom: 18px;
    margin-left: 20px;
    height: 36px;
    display: flex;
    column-gap: 16px;
  }
  & .banner__indicator-content > * {
    background-color: #191919;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    border: none;
    border-radius: 100px;
  }
  & .banner__indicator-content > button {
    width: 36px;
  }
  & .banner__indicator-cursor {
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
  }

  & svg {
    margin: auto;
    height: 100%;
  }

  ${({ theme }) => theme.media.desktop`
      height: 375px;
      --indicator-width: 1060px;
      & .swiper-slide {
        width: 1060px !important;
      }
  `}
  ${({ theme }) => theme.media.tablet`
      height: 200px;
      --indicator-width: 720px;
      .carousel-handle {
        display: none;
      }
      & .swiper-slide {
        width: 720px !important;
      }
  `}
  
  ${({ theme }) => theme.media.mobile`
        height: 180px;
        --indicator-width: 290px;
      & .banner__indicator-con {
        display: none;
      }
      & .swiper-slide {
        width: 290px !important;
      }
  `}
`;
