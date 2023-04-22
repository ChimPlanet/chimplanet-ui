import styled from "styled-components";
import PropTypes from "prop-types";

import JobTypography from "./components/JobTypography";
import JobStatusIndicator from "./components/JobStatusIndicator";
import JobOfferThumbnail from "./components/JobOfferThumbnail";

/**
 * @typedef {object} JobOfferProps
 * @property {number} id
 * @property {string} thumbnailURL
 * @property {boolean} isThumbnail
 * @property {string} title
 * @property {number} viewCount
 * @property {string} writeAt
 * @property {string} writer
 * @property {boolean} isClosed
 * @property {boolean} isRegular
 * @property {boolean} isBookmarked
 * @property {()=>void} onBookmarkClick
 *
 * @param {JobOfferProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>}
 */
export default function JobOffer({
  id,
  title,
  thumbnailURL,
  isThumbnail,
  viewCount,
  writeAt,
  isClosed,
  isRegular,
  writer = "침플래닛",
  isBookmarked = false,
  onBookmarkClick,
  ...props
}) {
  return (
    <Container {...props}>
      <JobOfferThumbnail
        src={thumbnailURL}
        alt={title}
        isThumbnail={isThumbnail}
        isBookmarked={isBookmarked}
        onBookmarkClick={onBookmarkClick}
      />
      <Information>
        <JobStatusIndicator isRegular={isRegular} isClosed={isClosed} />
        <JobTypography
          writer={writer}
          writeAt={writeAt}
          viewCount={viewCount}
          title={title}
        />
      </Information>
    </Container>
  );
}

JobOffer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailURL: PropTypes.string,
  viewCount: PropTypes.number.isRequired,
  writeAt: PropTypes.string.isRequired,
  isClosed: PropTypes.bool.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
  writer: PropTypes.string,
  isBookmarked: PropTypes.bool,
  isRegular: PropTypes.bool,
  onBookmarkClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  transform: translateY(0px);
  transition: transform 0.1s ease-in-out;

  ${({ theme }) => theme.media.mobile`
    display: grid;
    grid-template-columns: 120px auto;
    column-gap: 20px;
    height: 120px;
  `}

  &:hover {
    transform: translateY(-10px);
  }
`;

const Information = styled.div`
  margin-top: 20px;

  ${({ theme }) => theme.media.mobile`
    margin-top: 0px;
  `}
`;
