import { MouseEventHandler } from "react";
import { Bookmark } from "react-feather";

import { PropTypes } from "@/libs";
import {
  Container,
  ThumbnailImage,
  BookmarkButton,
} from "./JobOfferThumbnail.style";
import DefaultThumbnail from "@/assets/images/default_thumbnail.png";

interface JobOfferThumbnailProps {
  src: string;
  alt: string;
  isBookmarked: boolean;
  isThumbnail: boolean;
  onBookmarkClick(): void;
}

export const JobOfferThumbnail: React.FC<JobOfferThumbnailProps> = ({
  src,
  alt,
  isThumbnail,
  isBookmarked,
  onBookmarkClick,
}) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
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
};

JobOfferThumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool.isRequired,
  isThumbnail: PropTypes.bool.isRequired,
};

export default JobOfferThumbnail;
