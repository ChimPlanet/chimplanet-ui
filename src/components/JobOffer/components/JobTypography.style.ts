import { styled } from "@chimplanet/ui/libs";

export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => theme.media.mobile`
    font-size: 14px;
  `}
`;

export const Writer = styled.p`
  margin-top: 12px;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ theme }) => theme.media.mobile`
    font-size: 14px;
  `}
`;

export const Detail = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.tertiary};
`;
