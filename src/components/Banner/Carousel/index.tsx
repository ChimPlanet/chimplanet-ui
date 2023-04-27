import {
  Children,
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import CarouselContent from "./CarouselContent";
import CarouselIndicator from "./CarouselIndicator";
import { PropTypes } from "@/libs";

// 최적화를 위해서 css sheet를 사용함.
import "./carousel.css";

interface CarouselProps {
  itemWidth: number;
  observedValueToReset: any;
  children: JSX.Element[];
  translateDuration: number;
  delay: number;
  onClick(cursor: number): void;
}

export const Carousel: React.FC<CarouselProps> = ({
  children,
  observedValueToReset,
  ...props
}) => {
  const enableAnimationRef = useRef(true);
  const [index, setIndex] = useState(0);
  // 자동 Slider 동작 조절
  const [isStop, setIsStop] = useState(false);
  const length = useMemo(() => Children.count(children), [children]);

  useEffect(() => {
    setIndex(0);
  }, [observedValueToReset]);

  const setCursor = useCallback(
    (valueOrCallback: React.SetStateAction<number>, enable = true) => {
      enableAnimationRef.current = enable;
      if (valueOrCallback != undefined) setIndex(valueOrCallback);
    },
    [setIndex, enableAnimationRef]
  );

  return (
    <div className="carousel__container">
      <CarouselContent
        children={children}
        index={index}
        length={length}
        setCursor={setCursor}
        enableAnimationRef={enableAnimationRef}
        isStop={isStop}
        setIsStop={setIsStop}
        {...props}
      />
      <CarouselIndicator
        maxLength={length}
        cursor={index}
        setCursor={setCursor}
        setIsStop={setIsStop}
      />
    </div>
  );
};

Carousel.propTypes = {
  itemWidth: PropTypes.number.isRequired,
  translateDuration: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};

export default Carousel;
