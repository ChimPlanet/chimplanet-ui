import { ChevronLeft, ChevronRight } from "@/icons";

import { Container, Button, Indicator } from "./CarouselIndicator.style";

interface CarouselIndicatorProps {
  maxLength: number;
  cursor: number;
  setCursor: any;
  setIsStop(status: boolean): void;
}

export const CarouselIndicator: React.FC<CarouselIndicatorProps> = ({
  maxLength,
  cursor,
  setCursor,
  setIsStop,
}) => {
  return (
    <Container
      className="carousel-handle"
      onMouseEnter={() => setIsStop(true)}
      onMouseLeave={() => setIsStop(false)}
    >
      <Button onClick={() => setCursor(cursor - 1)}>
        <ChevronLeft />
      </Button>
      <Button onClick={() => setCursor(cursor + 1)}>
        <ChevronRight />
      </Button>
      <Indicator>{`${
        [maxLength, cursor + 1, 1].sort()[1]
      } / ${maxLength}`}</Indicator>
    </Container>
  );
};

export default CarouselIndicator;
