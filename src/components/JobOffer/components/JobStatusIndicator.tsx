import { PropTypes } from "@/libs";

import { Container, Indicator } from "./JobStatusIndicator.style";

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
      <Indicator
        color={isClosed ? "#ED2040" : "#00BD2F"}
        children={isClosed ? "마감" : "구인 중"}
      />
      {isRegular && <Indicator color="#969696">상시모집</Indicator>}
    </Container>
  );
};

JobStatusIndicator.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  isRegular: PropTypes.bool.isRequired,
};

export default JobStatusIndicator;
