import { styled, number, string, bool, func } from "@/libs";

import JobTypography from "./components/JobTypography";
import JobStatusIndicator from "./components/JobStatusIndicator";
import JobOfferThumbnail from "./components/JobOfferThumbnail";

export interface JobOfferProps
  extends Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "id"
  > {
  id: number;
  thumbnailURL?: string;
  isThumbnail: boolean;
  title: string;
  viewCount: number;
  writeAt: string;
  writer: string;
  isClosed: boolean;
  isRegular: boolean;
  redirectURL: string;
  isBookmarked: boolean;
  onBookmarkClick(): void;
}

export const JobOffer: React.FC<JobOfferProps> = ({
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
}) => {
  return (
    <Container {...(props as any)}>
      <JobOfferThumbnail
        src={thumbnailURL ?? ""}
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
};

JobOffer.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  thumbnailURL: string,
  viewCount: number.isRequired,
  writeAt: string.isRequired,
  isClosed: bool.isRequired,
  isThumbnail: bool.isRequired,
  writer: string.isRequired,
  isBookmarked: bool.isRequired,
  isRegular: bool.isRequired,
  onBookmarkClick: func.isRequired,
};

export default JobOffer;

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
