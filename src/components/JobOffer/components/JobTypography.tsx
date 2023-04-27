import { PropTypes } from "@/libs";
import { toFormatNumber } from "../utils/number.util";

import { Container, Title, Writer, Detail } from "./JobTypography.style";

interface JobTypographyProps {
  title: string;
  writer: string;
  viewCount: number;
  writeAt: string;
}

export const JobTypography: React.FC<JobTypographyProps> = ({
  title,
  writer,
  viewCount,
  writeAt,
}) => {
  return (
    <Container>
      <Title title={title}>{title}</Title>
      <Writer>{writer}</Writer>
      <Detail>
        {writeAt} &#183; 조회 {toFormatNumber(viewCount)}
      </Detail>
    </Container>
  );
};

JobTypography.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
  writeAt: PropTypes.string.isRequired,
};

export default JobTypography;
