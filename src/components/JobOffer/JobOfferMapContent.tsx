import { CSSProperties, useMemo } from "react";
import JobOffer, { JobOfferProps, UIOfferVO } from "./JobOffer";

interface Props {
  offers: UIOfferVO[];
  offerWidth?: number;
  direction?: JobOfferProps["direction"];
  rowLayoutConfig: JobOfferProps["rowLayoutConfig"];
  onClick(offer: any): void;
  onBookmarkClick(offer: any): void;
}

export const JobOfferMapContent: React.FC<Props> = ({
  offers,
  offerWidth = 250,
  direction = "column",
  rowLayoutConfig,
  onClick,
  onBookmarkClick,
}) => {
  const style = useMemo(
    () =>
      ({
        width: offerWidth,
      } as CSSProperties),
    [offerWidth]
  );

  return (
    <>
      {offers.map((offer) => (
        <JobOffer
          data={offer}
          direction={direction}
          onClick={() => onClick(offer)}
          key={offer.id}
          onBookmarkClick={() => onBookmarkClick(offer)}
          style={style}
          rowLayoutConfig={rowLayoutConfig}
        />
      ))}
    </>
  );
};

export default JobOfferMapContent;
