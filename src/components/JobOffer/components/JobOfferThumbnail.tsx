import { MouseEventHandler } from "react";
import { Bookmark } from "@/icons";

import { PropTypes } from "@/libs";
import {
  Container,
  ThumbnailImage,
  BookmarkButton,
} from "./JobOfferThumbnail.style";

import defaultImage from "@/constants/defaultImage";
import { useScreenType } from "@/contexts";

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
  const screenType = useScreenType();

  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onBookmarkClick();
  };
  return (
    <Container>
      <ThumbnailImage
        referrerPolicy="no-referrer"
        src={isThumbnail ? src : defaultImage[screenType]}
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
