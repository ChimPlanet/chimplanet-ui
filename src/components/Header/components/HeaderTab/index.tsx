import { Menu, Search } from "@chimplanet/ui/icons";
import { Link, PropTypes, styled } from "@chimplanet/ui/libs";

import { BookmarkButton } from "@chimplanet/ui/components";
import { useHeader } from "@chimplanet/ui/components/Header/context/headerContext";
import { HOME_PATH } from "@chimplanet/ui/constants/route";
import { ChimplanetIcon } from "@chimplanet/ui/icons";
import MenuBar from "./menuBar";
import OrnamentalSearchBar from "./ornamentalSearchBar";

interface HeaderTabProps {
  activeSearchTab(): void;
  desktop: boolean;
}

export const HeaderTab: React.FC<HeaderTabProps> = ({
  activeSearchTab,
  desktop,
}) => {
  const {
    activeMobileMenu,
    hideMenuBar,
    alternativeComponent,
    alternativeMenuComponent,
  } = useHeader();

  const handleMobileMenu = () => {
    if (activeMobileMenu) activeMobileMenu();
  };

  return (
    <Container>
      <UpperContainer>
        {alternativeComponent ?? (
          <Group>
            <Logo data-desktop={`${desktop}`} to={HOME_PATH}>
              <ChimplanetIcon mid={!desktop} />
            </Logo>
            <OrnamentalSearchBar onClick={activeSearchTab} />
          </Group>
        )}
        {desktop ? (
          <BookmarkButton />
        ) : (
          <MobileIcons>
            <IconButton onClick={activeSearchTab} children={<Search />} />
            <IconButton onClick={handleMobileMenu} children={<Menu />} />
          </MobileIcons>
        )}
      </UpperContainer>
      {!hideMenuBar && (
        <BottomContainer>
          {alternativeMenuComponent ? (
            alternativeMenuComponent
          ) : (
            <MenuBar desktop={desktop} />
          )}
        </BottomContainer>
      )}
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
  padding-bottom: 10px;
`;

const BottomContainer = styled.div`
  margin-top: 15px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const Logo = styled(Link)`
  &[data-desktop="false"] {
    padding-left: 15px;
  }
`;

const IconButton = styled.button`
  color: ${({ theme }) => theme.textColors.primary};
  & svg {
    margin: auto;
  }
`;

const MobileIcons = styled.div`
  margin-right: 25px;
`;
