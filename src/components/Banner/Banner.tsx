import { useRef, useState } from "react";

import { Container } from "./Banner.style";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar]);

import { ChevronLeft, ChevronRight } from "react-feather";

export const Banner = ({ banners }: { banners: any[] }) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndx] = useState(1);
  return (
    banners && (
      <Container>
        <Swiper
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
          <div className="swiper-wrapper">{createSwiperItems(banners)}</div>
          <div className="banner__indicator-con">
            <div className="banner__indicator-content">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <ChevronLeft />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <ChevronRight />
              </button>
              <span className="banner__indicator-cursor">{`${
                (currentIndex % banners.length) + 1
              } / ${banners.length}`}</span>
            </div>
          </div>
        </Swiper>
      </Container>
    )
  );
};

export default Banner;

const ITEM_TYPES = ["prev", "active", "post"] as const;

const createSwiperItems = (banners: any[]) =>
  ITEM_TYPES.reduce((acc, t) => {
    acc.push(
      ...banners?.map(({ id, sourceUrl, redirectUrl, redirectType }) => (
        <SwiperSlide key={`${t}-${id}`}>
          <a
            href={redirectUrl}
            target={redirectType === "NewTab" ? "_blank" : "_self"}
          >
            <img
              referrerPolicy="no-referrer"
              src={sourceUrl}
              alt={redirectUrl}
            />
          </a>
        </SwiperSlide>
      ))
    );

    return acc;
  }, [] as JSX.Element[]);
