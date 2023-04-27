import { Children, useCallback, useState } from "react";

import { useCarouselCounter, useCarouselEvents } from "./carouselHooks";
import useNormalize from "./hooks/useNormalize";
import CarouselItem from "./CarouselItem";

interface CarouselContentProps {
  children: JSX.Element[];
  itemWidth: number;
  index: number;
  setCursor: any;
  enableAnimationRef: any;
  translateDuration: number;
  length: number;
  delay: number;
  isStop: boolean;
  setIsStop: any;
  onClick: any;
}

export const CarouselContent: React.FC<CarouselContentProps> = ({
  children,
  itemWidth,
  index,
  setCursor,
  enableAnimationRef,
  translateDuration,
  length,
  delay,
  isStop,
  setIsStop,
  onClick,
}) => {
  // 마우스 드래그 반영
  const [delta, setDelta] = useState(0);

  const normalize = useNormalize(length);

  const handleDeltaConfirm = useCallback(
    (isUp = true) => {
      // 애니메이션 활성화
      enableAnimationRef.current = true;
      // 스왑 (영역의 1/3 이상을 넘길때 다음 cursor로 넘어감)
      if (Math.abs(delta) >= itemWidth / 3)
        setCursor((prev: number) => prev - Math.sign(delta));
      // 클릭 판정 (스왑이 아니고, 마우스를 땐 경우)
      else if (isUp) onClick(normalize(index));
      // delta 값 초기화
      setDelta(0);
    },
    [delta, setDelta, enableAnimationRef, onClick, index, normalize]
  );

  useCarouselCounter(setCursor, delay, isStop);

  const events = useCarouselEvents(
    index,
    setCursor,
    normalize,
    setIsStop,
    setDelta,
    handleDeltaConfirm
  );

  // 최적화를 위해서 css object 사용함.
  const styles = {
    transform: `translate3d(${
      -(index + length) * itemWidth + delta
    }px,0px,0px)`,
    // width: `${length * itemWidth * 3}px`,
    transition: enableAnimationRef.current
      ? `all ${translateDuration}ms ease-in-out`
      : "none",
  };
  return (
    <div className="carousel-content__container" style={styles} {...events}>
      {Children.map(children, (child, i) => {
        return <CarouselItem key={-i - 1} child={child} />;
      })}
      {Children.map(children, (child, i) => {
        return <CarouselItem key={i} child={child} />;
      })}
      {Children.map(children, (child, i) => {
        return <CarouselItem key={i + length} child={child} />;
      })}
    </div>
  );
};
export default CarouselContent;
