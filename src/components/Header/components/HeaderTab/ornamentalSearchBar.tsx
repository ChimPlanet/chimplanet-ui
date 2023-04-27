import { Search } from "@/icons";

import { styled, PropTypes } from "@/libs";

export const OrnamentalSearchBar = ({ onClick }: { onClick(): void }) => {
  return (
    <Container onClick={onClick}>
      <SearchInput placeholder="#태그 검색" />
      <WrapIcon>
        <Search />
      </WrapIcon>
    </Container>
  );
};

OrnamentalSearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default OrnamentalSearchBar;

const Container = styled.div`
  display: grid;
  padding: 10px 20px;
  border-radius: 100px;
  width: 350px;
  grid-template-columns: auto 16px;
  background-color: ${({ theme }) => theme.backgroundColor.input};

  ${({ theme }) => theme.media.mobile`
    display: none;
  `}
`;

const SearchInput = styled.input`
  padding: 0px;
  margin: 0px;
  outline: none;
  color: ${({ theme }) => theme.colors.sub};

  &:focus {
    outline: none;
  }
`;
const WrapIcon = styled.div`
  & svg {
    margin: auto;
  }
`;
