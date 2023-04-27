import { styled, Link } from "@/libs";

export default function Logo() {
  return <LogoLink to="/">침플래닛</LogoLink>;
}

const LogoLink = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.logo};

  ${({ theme }) => theme.media.mobile`
      font-size: 18px;
      padding-left: 15px;
  `}
`;
