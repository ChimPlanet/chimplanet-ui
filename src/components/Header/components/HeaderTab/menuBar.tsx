import { useState, useCallback, useRef, MutableRefObject } from "react";
import { styled, Link, useLocation } from "@/libs";
import { Menu } from "@/icons";

import { JOB_PATH, HOME_PATH, OFFICIAL_PATH } from "@/constants/route";
import { FloatingMenu } from "@/components";
import useTimer from "../../hooks/useTimer";

import { useScreenType } from "@/contexts";
import { useHeader } from "../../context/headerContext";

export default function MenuBar() {
  const { pathname } = useLocation();
  const { CategoryOverlayComponent } = useHeader();
  const sizeType = useScreenType();

  const categoryAnchor = useRef<HTMLDivElement | null>(null);
  const [isCategoryVisible, setIsCategoryVisible] = useState(false);

  const closeCategory = useCallback(
    () => setIsCategoryVisible(false),
    [setIsCategoryVisible]
  );

  // ! 0.5 초 안에 카테고리 안으로 들어가지 않는 경우, 카테고리가 닫힘
  const { clear, fire } = useTimer(closeCategory, 500);

  return (
    <>
      <Container ref={categoryAnchor}>
        {/* Size에 따라서 메뉴바 변경 */}
        {sizeType !== "mobile" ? (
          <CategoryItem
            onMouseOver={() => setIsCategoryVisible(true)}
            onMouseOut={fire}
          >
            <Menu style={{ marginTop: -5 }} />
            <span>&nbsp;&nbsp; 카테고리</span>
          </CategoryItem>
        ) : (
          <MenuItem to={HOME_PATH} active={pathname === HOME_PATH}>
            홈
          </MenuItem>
        )}

        <MenuItem to={JOB_PATH} active={pathname === JOB_PATH}>
          공고
        </MenuItem>
        <MenuItem to={OFFICIAL_PATH} active={pathname == OFFICIAL_PATH}>
          공식
        </MenuItem>
      </Container>
      {isCategoryVisible && (
        <FloatingMenu
          position="fixed"
          anchorRef={categoryAnchor as MutableRefObject<HTMLDivElement>}
          close={closeCategory}
          onMouseEnter={clear}
        >
          {CategoryOverlayComponent ? <CategoryOverlayComponent /> : <></>}
        </FloatingMenu>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  font-size: 14px;
  font-weight: 700;
  margin-top: 30px;
`;

const MenuItem = styled(Link)<{ active: boolean }>`
  cursor: pointer;
  display: flex;
  text-align: center;
  height: 35px;
  user-select: none;
  padding: 0px 23px;

  color: ${({ theme }) => theme.textColors.primary};

  border-bottom: ${({ theme, active }) =>
    active ? `2px solid ${theme.specialColors.positive}` : "none"};

  &:hover {
    border-bottom: ${({ theme }) =>
      `2px solid ${theme.borderColors.secondary}`};
  }
` as any;

const CategoryItem = styled(MenuItem)`
  padding-left: 0;
`;
