import JobOffer, { JobOfferProps } from "./JobOffer";

interface JobOfferMapContentProps {
  jobs: any[];
  offerWidth: number;
  direction: JobOfferProps["direction"];
  isBookmarked(offer: any): boolean;
  onClick(offer: any): void;
  onBookmarkClick(offer: any): void;
}

export const JobOfferMapContent: React.FC<JobOfferMapContentProps> = ({
  jobs,
  offerWidth = 250,
  direction = "column",
  onClick,
  onBookmarkClick,
  isBookmarked,
}) => {
  return (
    <>
      {jobs.map((offer) => (
        <JobOffer
          direction={direction}
          onClick={() => onClick(offer)}
          key={offer.id}
          id={offer.id}
          thumbnailURL={offer.thumbnailURL}
          isThumbnail={offer.isThumbnail}
          title={offer.title}
          writer={offer.writer}
          writeAt={offer.regDate}
          redirectURL={offer.redirectURL}
          viewCount={offer.viewCount}
          isBookmarked={isBookmarked(offer)}
          isClosed={offer.isClosed}
          isRegular={offer.isRegular}
          onBookmarkClick={onBookmarkClick.bind(null, offer)}
          style={{
            width: offerWidth,
          }}
        />
      ))}
    </>
  );
};

export default JobOfferMapContent;
