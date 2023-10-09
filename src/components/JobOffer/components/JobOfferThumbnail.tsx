import { SharpBookmark } from "@chimplanet/ui/icons";
import { MouseEventHandler } from "react";

import { PropTypes } from "@chimplanet/ui/libs";
import {
  BookmarkButton,
  Container,
  ThumbnailImage,
} from "./JobOfferThumbnail.style";

import defaultImage from "@chimplanet/ui/constants/defaultImage";
import { useScreenType } from "@chimplanet/ui/contexts";

interface JobOfferThumbnailProps {
  src?: string;
  alt: string;
  bookmarked?: boolean;
  onBookmarkClick(): void;
}

export const JobOfferThumbnail: React.FC<JobOfferThumbnailProps> = ({
  src,
  alt,
  bookmarked = false,
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
        src={src ?? defaultImage[screenType]}
        alt={alt}
      />
      <BookmarkButton onClick={handleClick}>
        <SharpBookmark filled={bookmarked} />
      </BookmarkButton>
    </Container>
  );
};

JobOfferThumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default JobOfferThumbnail;
