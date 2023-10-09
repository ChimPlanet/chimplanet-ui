import { PropTypes } from "@chimplanet/ui/libs";
import { toFormatDate, toFormatNumber } from "../utils/number.util";

import { Container, Detail, Title, Writer } from "./JobTypography.style";

interface JobTypographyProps {
  title: string;
  writer: string;
  viewCount: number;
  writeAt: Date;
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
        {toFormatDate(writeAt)} &#183; 조회 {toFormatNumber(viewCount)}
      </Detail>
    </Container>
  );
};

JobTypography.propTypes = {
  title: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  viewCount: PropTypes.number.isRequired,
};

export default JobTypography;
