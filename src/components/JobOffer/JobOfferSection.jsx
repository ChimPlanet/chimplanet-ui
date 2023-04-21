import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Suspense, useCallback } from 'react';

import JobOfferSectionContent from './components/jobOfferSectionContent';
import JobOfferSectionHeader from './components/jobOfferSectionHeader';
import useJobSection from '@/common/components/JobOffer/hooks/useJobSection';
import JobSelectionSkeleton from '@/components/Skeletons/JobSectionSkeleton';
import { useSizeType } from '@/context/sizeTypeContext';
import { GreenRightChevronIcon } from '@/common/icons';
import { Link } from 'react-router-dom';

/**
 * @typedef {Object} JobOfferSectionProps
 * @property {string} title
 * @property {boolean?} hideArrow
 * @property {Function} fetchFunction
 * @property {string} queryKey
 * @property {number} maxLength
 * @property {string?} goTo
 *
 *
 * @param {JobOfferSectionProps} props
 * @returns
 */
export default function JobOfferSection({
  queryKey,
  fetchFunction,
  title,
  hideArrow = false,
  goTo,
  maxLength,
}) {
  const { context, dispatch, ActionType } = useJobSection();

  const setLength = useCallback(
    (length) => dispatch({ type: ActionType.SET_LENGTH, payload: length }),
    [dispatch],
  );

  const sizeType = useSizeType();

  const nextPage = useCallback(
    () => dispatch({ type: ActionType.NEXT }),
    [dispatch],
  );
  const prevPage = useCallback(
    () => dispatch({ type: ActionType.PREV }),
    [dispatch],
  );

  return (
    <Container>
      <JobOfferSectionHeader
        title={title}
        goTo={sizeType !== 'mobile' && goTo}
        hideArrow={hideArrow}
        isNext={context.isNext}
        isPrev={context.isPrev}
        nextPage={nextPage}
        prevPage={prevPage}
      />
      <Suspense fallback={<JobSelectionSkeleton />}>
        <JobOfferSectionContent
          queryKey={queryKey}
          fetchFunction={fetchFunction}
          setLength={setLength}
          perPage={context.perPage}
          cursor={context.cursor}
          maxLength={maxLength}
        />
      </Suspense>
      {sizeType === 'mobile' && goTo && (
        <Footer to={goTo}>
          <FooterText>자세히보기</FooterText>
          <GreenRightChevronIcon />
        </Footer>
      )}
    </Container>
  );
}

JobOfferSection.propTypes = {
  fetchFunction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const Container = styled.section`
  min-height: 460px;
  overflow-x: hidden;
  /* width: ${(props) => props.width}; */
`;

const Footer = styled(Link)`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const FooterText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.logo};
  margin-right: 15px;
`;
