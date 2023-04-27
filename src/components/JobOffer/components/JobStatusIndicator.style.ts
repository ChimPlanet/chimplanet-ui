import { styled } from "@/libs";

export const Container = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const Indicator = styled.span`
  display: inline-block;
  padding: 2px 13px;
  /* padding-top: 5px; */
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 4px;
  color: ${({ color }) => color};
  margin-right: 8px;
  font-style: normal;
`;
