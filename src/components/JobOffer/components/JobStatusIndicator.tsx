import { PropTypes } from "@chimplanet/ui/libs";

import {
  Container,
  GoingIndicator,
  NormalIndicator,
} from "./JobStatusIndicator.style";

interface JobStatusIndicatorProps {
  closed: boolean;
  regular: boolean;
}

export const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({
  closed,
  regular,
}) => {
  return (
    <Container>
      <GoingIndicator closed={closed} children={closed ? "마감" : "구인 중"} />
      {regular && <NormalIndicator>상시모집</NormalIndicator>}
    </Container>
  );
};

JobStatusIndicator.propTypes = {
  closed: PropTypes.bool.isRequired,
  regular: PropTypes.bool.isRequired,
};

export default JobStatusIndicator;
