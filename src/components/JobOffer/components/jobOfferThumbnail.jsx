import { styled } from "@/libs";
import PropTypes from "prop-types";

import { Bookmark } from "react-feather";
import DefaultThumbnail from "../../../assets/images/default_thumbnail.png";

/**
 * @typedef {object} JobOfferThumbnailProps
 * @property {string} src
 * @property {string} alt
 * @property {boolean} isBookmarked
 * @property {boolean} isThumbnail
 * @property {()=>void} onBookmarkClick
 *
 * @param {JobOfferThumbnailProps}
 * @returns
 */
export default function JobOfferThumbnail({
  src,
  alt,
  isThumbnail,
  isBookmarked,
  onBookmarkClick,
}) {
  const handleClick = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };
  return (
    <Container>
      <ThumbnailImage
        referrerPolicy="no-referrer"
        src={isThumbnail ? src : DefaultThumbnail}
        alt={alt}
      />
      <BookmarkButton onClick={handleClick}>
        <Bookmark />
      </BookmarkButton>
    </Container>
  );
}

JobOfferThumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
};

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 250px;

  ${({ theme }) => theme.media.tablet`
    height: 220px;
  `}
  ${({ theme }) => theme.media.mobile`
    height: 120px;
  `}
`;

const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0px auto;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 18px;
  margin-right: 18px;
`;
