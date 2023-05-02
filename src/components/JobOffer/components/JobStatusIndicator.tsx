import { PropTypes } from "@/libs";

import {
  Container,
  GoingIndicator,
  NormalIndicator,
} from "./JobStatusIndicator.style";

interface JobStatusIndicatorProps {
  isClosed: boolean;
  isRegular: boolean;
}

export const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({
  isClosed,
  isRegular,
}) => {
  return (
    <Container>
      <GoingIndicator
        isClosed={isClosed}
        children={isClosed ? "마감" : "구인 중"}
      />
      {isRegular && <NormalIndicator>상시모집</NormalIndicator>}
    </Container>
  );
};

JobStatusIndicator.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  isRegular: PropTypes.bool.isRequired,
};

export default JobStatusIndicator;
