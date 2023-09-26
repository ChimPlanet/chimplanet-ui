import { styled } from "@chimplanet/ui/libs";
import { useCallback, useMemo, useState } from "react";

import { useScreenType } from "@chimplanet/ui/contexts";
import { useHeader, wrapHeaderContext } from "../context/headerContext";
import HeaderTab from "./HeaderTab";

export const Header = wrapHeaderContext(() => {
  const { SearchTabComponent } = useHeader();

  const [activeTab, setActiveTab] = useState("header");
  const screenType = useScreenType();

  const isDesktop = useMemo(() => screenType === "desktop", [screenType]);

  const activeSearchTab = useCallback(() => {
    setActiveTab("search");
  }, [setActiveTab]);

  const activeHeaderTab = useCallback(() => {
    setActiveTab("header");
  }, [setActiveTab]);

  return (
    <>
      {activeTab === "search" && (
        <BackgroundSheet data-desktop={isDesktop} onClick={activeHeaderTab} />
      )}
      <Container>
        <Content>
          <HeaderTab desktop={isDesktop} activeSearchTab={activeSearchTab} />
          {activeTab === "search" && SearchTabComponent && (
            <SearchTabComponent
              desktop={isDesktop}
              activeHeaderTab={activeHeaderTab}
              afterSearch={activeHeaderTab}
            />
          )}
        </Content>
      </Container>
    </>
  );
});

export default Header;

const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderColors.primary}`};
  background-color: ${({ theme }) => theme.bgColors.secondary};
`;

const Content = styled.div`
  margin: 0 auto;
  padding-top: 12px;

  ${({ theme }) => theme.media.desktop`
    ${`width: ${theme.widths.desktop}px`};
  `}

  ${({ theme }) => theme.media.tablet`
    ${`width: ${theme.widths.tablet}px`};
  `}

  ${({ theme }) => theme.media.mobile`
    ${`width: ${theme.widths.mobile}`};
  `}
`;

const BackgroundSheet = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.107);

  &[data-desktop="false"] {
    background-color: ${({ theme }) => theme.bgColors.secondary};
  }
`;
