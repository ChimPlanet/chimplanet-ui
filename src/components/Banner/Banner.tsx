import { useCallback, useMemo } from "react";

import { useScreenType } from "@/contexts";

import { Carousel } from "./Carousel";
import { horizontalPadding, Container, AnchorBannerItem } from "./Banner.style";

const carouselConfig = {
  delay: 5000,
  translateDuration: 500,
};

export const Banner = ({ banners }: { banners: any[] }) => {
  const screenType = useScreenType();

  const handleClick = useCallback(
    (index: number) =>
      Array.isArray(banners) && window.open(banners[index].redirectUrl),
    [banners]
  );

  const itemWidth = useMemo(() => {
    switch (screenType) {
      case "desktop":
        return 1060;
      case "tablet":
        return 720;
      case "mobile":
        return 290;
    }
  }, [screenType]);

  return (
    <Container>
      <Carousel
        onClick={handleClick}
        itemWidth={itemWidth + 2 * horizontalPadding}
        observedValueToReset={screenType}
        {...carouselConfig}
      >
        {banners?.map(({ id, sourceUrl, redirectUrl }) => (
          <AnchorBannerItem key={id}>
            <img
              referrerPolicy="no-referrer"
              width={itemWidth}
              src={sourceUrl}
              alt={redirectUrl}
            />
          </AnchorBannerItem>
        ))}
      </Carousel>
    </Container>
  );
};

export default Banner;
