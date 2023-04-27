import { element } from "prop-types";

export const CarouselItem = ({ child }: { child: JSX.Element }) => {
  return <div className="carousel-item__container">{child}</div>;
};
CarouselItem.propTypes = {
  child: element.isRequired,
};

export default CarouselItem;
