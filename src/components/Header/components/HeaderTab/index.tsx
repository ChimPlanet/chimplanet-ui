import { styled, PropTypes } from "@/libs";
import { Menu, Search } from "@/icons";

import { BookmarkButton } from "@/components";
import Logo from "./logo";
import MenuBar from "./menuBar";
import OrnamentalSearchBar from "./ornamentalSearchBar";
import { useHeader } from "@/components/Header/context/headerContext";

interface HeaderTabProps {
  activeSearchTab(): void;
  mobile: boolean;
}

export const HeaderTab: React.FC<HeaderTabProps> = ({
  activeSearchTab,
  mobile,
}) => {
  const { activeMobileMenu } = useHeader();

  const handleMobileMenu = () => {
    if (activeMobileMenu) activeMobileMenu();
  };

  return (
    <Container>
      <UpperContainer>
        <Group>
          <Logo />
          <OrnamentalSearchBar onClick={activeSearchTab} />
        </Group>
        {!mobile ? (
          <BookmarkButton />
        ) : (
          <div>
            <IconButton onClick={activeSearchTab} children={<Search />} />
            <IconButton onClick={handleMobileMenu} children={<Menu />} />
          </div>
        )}
      </UpperContainer>
      <BottomContainer>
        <MenuBar />
      </BottomContainer>
    </Container>
  );
};

HeaderTab.propTypes = {
  activeSearchTab: PropTypes.func.isRequired,
};

export default HeaderTab;

const Container = styled.div``;

const UpperContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BottomContainer = styled.div``;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const IconButton = styled.button`
  & svg {
    margin: auto;
  }
`;
