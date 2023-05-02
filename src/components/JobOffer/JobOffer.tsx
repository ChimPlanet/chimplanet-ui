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
  direction: "row" | "column";
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
  rowLayoutConfig?: RowLayoutConfig;
}

interface RowLayoutConfig {
  height: number;
  gap: number;
}

export const JobOffer: React.FC<JobOfferProps> = ({
  direction,
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
  rowLayoutConfig,
  ...props
}) => {
  return (
    <Container
      data-direction={direction}
      rowConfig={rowLayoutConfig}
      {...(props as any)}
    >
      <JobOfferThumbnail
        src={thumbnailURL ?? ""}
        alt={title}
        isThumbnail={isThumbnail}
        isBookmarked={isBookmarked}
        onBookmarkClick={onBookmarkClick}
      />
      <div className="job-offer__information">
        <JobStatusIndicator isRegular={isRegular} isClosed={isClosed} />
        <JobTypography
          writer={writer}
          writeAt={writeAt}
          viewCount={viewCount}
          title={title}
        />
      </div>
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

const Container = styled.div<{
  rowConfig?: RowLayoutConfig;
}>`
  transform: translateY(0px);
  transition: transform 0.1s ease-in-out;

  & .job-offer__information {
    margin-top: 15px;
  }

  ${({ rowConfig }) => `
    &[data-direction="row"] {
      display: grid;
      grid-template-columns: ${rowConfig?.height}px auto;
      column-gap: ${rowConfig?.gap}px;
      height: ${rowConfig?.height}px;

      & .job-offer__information {
        margin-top: 0px;
      }
    }
  `}

  &:hover {
    transform: translateY(-10px);
  }
`;
