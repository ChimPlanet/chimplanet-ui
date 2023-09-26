import { PropTypes, styled } from "@chimplanet/ui/libs";

import JobOfferThumbnail from "./components/JobOfferThumbnail";
import JobStatusIndicator from "./components/JobStatusIndicator";
import JobTypography from "./components/JobTypography";

export interface UIOfferVO {
  id: number;
  title: string;
  writer: string;
  like: number;
  view: number;
  writeAt: Date;
  redirectURL: string;
  thumbnailURL?: string;
  bookmarked?: boolean;
  closed: boolean;
  regular: boolean;
}

export interface JobOfferProps {
  data: UIOfferVO;
  direction: "row" | "column";
  bookmarked?: boolean;
  onClick?(): void;
  onBookmarkClick(): void;
  rowLayoutConfig?: RowLayoutConfig;
  style?: React.CSSProperties;
}

interface RowLayoutConfig {
  height: number;
  gap: number;
}

export const JobOffer: React.FC<JobOfferProps> = ({
  data,
  direction,
  rowLayoutConfig,
  style,
  onClick,
  onBookmarkClick,
}) => {
  const {
    title,
    thumbnailURL,
    regular,
    closed,
    writer,
    writeAt,
    view,
    bookmarked,
  } = data;

  return (
    <Container
      data-direction={direction}
      rowConfig={rowLayoutConfig}
      onClick={onClick}
      style={style}
    >
      <JobOfferThumbnail
        src={thumbnailURL}
        alt={title}
        bookmarked={bookmarked}
        onBookmarkClick={onBookmarkClick}
      />
      <div className="job-offer__information">
        <JobStatusIndicator regular={regular} closed={closed} />
        <JobTypography
          writer={writer}
          writeAt={writeAt}
          viewCount={view}
          title={title}
        />
      </div>
    </Container>
  );
};

JobOffer.propTypes = {
  bookmarked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  onBookmarkClick: PropTypes.func.isRequired,
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
