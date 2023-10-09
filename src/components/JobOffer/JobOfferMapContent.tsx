import { CSSProperties, Fragment, useMemo } from "react";
import JobOffer, { JobOfferProps, UIOfferVO } from "./JobOffer";

interface Props {
  offers: UIOfferVO[];
  offerWidth?: number | string;
  direction?: JobOfferProps["direction"];
  rowLayoutConfig: JobOfferProps["rowLayoutConfig"];
  onClick(offer: UIOfferVO): void;
  onBookmarkClick(offer: UIOfferVO): void;
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
    <Fragment>
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
    </Fragment>
  );
};

export default JobOfferMapContent;
