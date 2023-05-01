import JobOffer from "./JobOffer";

interface JobOfferMapContentProps {
  isBookmarked(offer: any): boolean;
  jobs: any[];
  onClick(offer: any): void;
  onBookmarkClick(offer: any): void;
  offerWidth: number;
}

export const JobOfferMapContent: React.FC<JobOfferMapContentProps> = ({
  jobs,
  offerWidth = 250,
  onClick,
  onBookmarkClick,
  isBookmarked,
}) => {
  return (
    <>
      {jobs.map((offer) => (
        <JobOffer
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
          onBookmarkClick={() => onBookmarkClick(offer)}
          style={{
            width: offerWidth,
          }}
        />
      ))}
    </>
  );
};

export default JobOfferMapContent;
