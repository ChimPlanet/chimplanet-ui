import { styled } from "@chimplanet/ui/libs";

export const Container = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const BaseIndicator = styled.span`
  display: inline-block;
  padding: 2px 13px;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: 8px;
  font-style: normal;
`;

export const GoingIndicator = styled(BaseIndicator)<{ closed: boolean }>(
  ({ theme, closed }) => ({
    borderColor: theme.specialColors[closed ? "negative" : "positive"],
    color: theme.specialColors[closed ? "negative" : "positive"],
  })
);

export const NormalIndicator = styled(BaseIndicator)(({ theme }) => ({
  borderColor: theme.specialColors.normal,
  color: theme.specialColors.normal,
}));
