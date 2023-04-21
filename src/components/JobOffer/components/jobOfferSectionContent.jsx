import { useEffect, useLayoutEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useJobOfferFromDynamic } from '@/query/offer';
import { JobOfferMapContent } from '@/common/components/JobOffer';
import { prefetchImages } from '@/utils';
import { useSizeType } from '@/context/sizeTypeContext';
import { OfferWidthMap } from '@/utils/offerSizeMap';

JobOfferSectionContent.propTypes = {
  cursor: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
};

/**
 * @typedef {Object} JobOfferSectionContentProps
 * @property {number} page
 * @property {number} perPage
 * @property {(length: number) => void} setLength
 * @property {number | false} maxLength
 * @property {Function} fetchFunction
 *
 *
 * @param {JobOfferSectionContentProps}
 * @returns
 */
export default function JobOfferSectionContent({
  queryKey,
  cursor,
  perPage,
  setLength,
  fetchFunction,
  maxLength,
}) {
  const { data: offers } = useJobOfferFromDynamic(
    queryKey,
    fetchFunction,
    maxLength,
  );
  const sizeType = useSizeType();

  const offerWidth = useMemo(() => OfferWidthMap[sizeType], [sizeType]);

  const offerColumnGap = useMemo(
    () => (sizeType === 'desktop' ? 20 : 25),
    [sizeType],
  );

  useLayoutEffect(
    () => Array.isArray(offers) && setLength(offers.length),
    [offers],
  );

  // ! 미리 이미지 가져오기
  useEffect(() => {
    if (Array.isArray(offers)) {
      prefetchImages(
        offers.filter(({ isThumbnail }) => isThumbnail),
        (elem) => elem.thumbnailURL,
      );
    }
  }, [offers]);

  return (
    <Container
      moveX={-cursor * (offerWidth + offerColumnGap)}
      gap={offerColumnGap}
      vertical={sizeType === 'mobile'}
    >
      <JobOfferMapContent
        jobs={offers}
        offerWidth={offerWidth}
        offerOrientation={sizeType === 'mobile' ? 'horizontal' : 'vertical'}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: ${({ vertical }) => (!vertical ? 'row' : 'column')};
  gap: ${(p) => `${p.gap}px`};
  width: fit-content;
  transform: ${(p) => `translate3d(${p.moveX}px, 0px, 0px)`};
  transition: transform 0.2s ease-in-out;
`;
