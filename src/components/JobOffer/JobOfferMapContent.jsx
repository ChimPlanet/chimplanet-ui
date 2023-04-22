import PropTypes from "prop-types";

import JobOffer from "./JobOffer";

/**
 * @typedef {object} JobOfferMapContentProps
 * @property {(id: string | number) => boolean} isBookmarked
 * @property {any[]} jobs
 * @property {(offer: any) => void} onClick
 * @property {(id: string|number) => void} onBookmarkClick
 * @property {number} offerWidth
 *
 * @param {{jobs: import("@/utils/job").JobOfferVO[], offerWidth?: number}}
 */

export default function JobOfferMapContent({
  jobs,
  offerWidth = 250,
  onClick,
  onBookmarkClick,
  isBookmarked,
}) {
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
          isBookmarked={isBookmarked(offer.id)}
          isClosed={offer.isClosed}
          isRegular={offer.isRegular}
          onBookmarkClick={() => onBookmarkClick(offer.id)}
          style={{
            width: offerWidth,
          }}
        />
      ))}
    </>
  );
}

JobOfferMapContent.propTypes = {
  jobs: PropTypes.array,
};
