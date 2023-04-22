import { styled } from "@/libs";
import PropTypes from "prop-types";

/**
 * @typedef {object} JobStatusIndicatorProps
 * @property {boolean} isClosed
 * @property {boolean} isRegular
 *
 * @param {JobStatusIndicatorProps}
 * @returns
 */
export default function JobStatusIndicator({ isClosed, isRegular }) {
  return (
    <Container>
      <Indicator
        color={isClosed ? "#ED2040" : "#00BD2F"}
        children={isClosed ? "마감" : "구인 중"}
      />
      {isRegular && <Indicator color="#969696">상시모집</Indicator>}
    </Container>
  );
}

JobStatusIndicator.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  isRegular: PropTypes.bool.isRequired,
};

const Container = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const Indicator = styled.span`
  display: inline-block;
  padding: 2px 13px;
  /* padding-top: 5px; */
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 4px;
  color: ${({ color }) => color};
  margin-right: 8px;
  font-style: normal;
`;
