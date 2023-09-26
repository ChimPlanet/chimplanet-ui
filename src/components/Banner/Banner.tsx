import { ReactElement, useRef, useState } from "react";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "./Banner.style";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);

import { ChevronLeft, ChevronRight } from "react-feather";

interface Props {
  elements: JSX.Element[];
}

export const Banner = ({ elements }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndx] = useState(1);

  if (!Array.isArray(elements)) {
    throw new Error("배너는 배열이여야 합니다.");
  }

  if (elements.length === 0) return null;

  return (
    <Container>
      <Swiper
        autoHeight
        spaceBetween={20}
        loop
        centeredSlides
        grabCursor
        slidesPerView="auto"
        slidesOffsetBefore={0}
        direction="horizontal"
        initialSlide={0}
        effect="slide"
        autoplay={{
          delay: 5000,
          stopOnLastSlide: false,
        }}
        speed={500}
        onBeforeInit={(s) => {
          swiperRef.current = s;
        }}
        onSlideChange={(s) => setCurrentIndx(s.realIndex)}
      >
        <div className="swiper-wrapper">{createSwiperItems(elements)}</div>
        <div className="banner__indicator-con">
          <div className="banner__indicator-content">
            <button onClick={() => swiperRef.current?.slidePrev()}>
              <ChevronLeft />
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <ChevronRight />
            </button>
            <span className="banner__indicator-cursor">{`${
              (currentIndex % elements.length) + 1
            } / ${elements.length}`}</span>
          </div>
        </div>
      </Swiper>
    </Container>
  );
};

export default Banner;

const ITEM_TYPES = ["prev", "active", "post"] as const;

const createSwiperItems = (nodes: ReactElement[]) =>
  ITEM_TYPES.reduce((acc, t) => {
    acc.push(
      ...nodes?.map((n, i) => <SwiperSlide key={`${t}-${i}`}>{n}</SwiperSlide>)
    );

    return acc;
  }, [] as JSX.Element[]);
