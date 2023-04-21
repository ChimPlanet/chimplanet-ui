import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SectionLeftIcon, SectionRightIcon } from '@/common/icons';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} JobOfferSectionHeaderProps
 * @property {string} title
 * @property {boolean} isNext
 * @property {boolean} isPrev
 * @property {()=>void} nextPage
 * @property {()=>void} prevPage
 * @property {boolean} hideArrow
 *
 *
 *
 * @param {JobOfferSectionHeaderProps}
 * @returns
 */
export default function JobOfferSectionHeader({
  title,
  isNext,
  isPrev,
  nextPage,
  prevPage,
  hideArrow,
  goTo,
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Detail>
        <Link to={goTo}>{goTo && '자세히보기'}</Link>
      </Detail>
      <ControlBox>
        {!hideArrow && (
          <>
            <Arrow enable={isPrev} onClick={prevPage}>
              <SectionLeftIcon />
            </Arrow>
            <Arrow enable={isNext} onClick={nextPage}>
              <SectionRightIcon />
            </Arrow>
          </>
        )}
      </ControlBox>
    </Container>
  );
}

JobOfferSectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

const Container = styled.div`
  user-select: none;
  display: grid;
  grid-template-columns: auto auto 60px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const Detail = styled.div`
  text-align: right;
  margin-top: 2px;
  margin-right: 30px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.help};
`;

const ControlBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Arrow = styled.span`
  cursor: pointer;

  & svg {
    fill: ${({ enable, theme }) => (enable ? theme.colors.main : '#AAB1BC')};
  }
`;
