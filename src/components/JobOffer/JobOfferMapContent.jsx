import PropTypes from 'prop-types';

import { BookmarkContext } from '@/utils/Context/bookmarkContext';
import useBookmark from '@/hooks/useBookmark';
import { useArticleContext } from '@/context/articleContext';

import JobOffer from './JobOffer';

/**
 * @param {{jobs: import("@/utils/job").JobOfferVO[], offerWidth?: number, toggleBookmark(id: number):void}}
 */

export default function JobOfferMapContent({ jobs, offerWidth = 250 }) {
  const [, { open }] = useArticleContext();
  const { toggle } = useBookmark();
  const bookmarkSet = BookmarkContext.getInstance().getBookmarkSet();

  return (
    <>
      {jobs.map((offer) => (
        <JobOffer
          onClick={open.bind(null, offer)}
          key={offer.id}
          id={offer.id}
          thumbnailURL={offer.thumbnailURL}
          isThumbnail={offer.isThumbnail}
          title={offer.title}
          writer={offer.writer}
          writeAt={offer.regDate}
          redirectURL={offer.redirectURL}
          viewCount={offer.viewCount}
          isBookmarked={bookmarkSet.has(offer.id)}
          isClosed={offer.isClosed}
          isRegular={offer.isRegular}
          onBookmarkClick={() => toggle(offer.id)}
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
