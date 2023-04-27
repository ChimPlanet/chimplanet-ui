import { Link, styled } from "@/libs";
import { BOOKMARK_PATH } from "@/constants/route";
import { Bookmark as BookmarkIcon } from "@/icons";

export default function Bookmark() {
  return (
    <BookmarkLink to={BOOKMARK_PATH}>
      북마크 &nbsp;
      <BookmarkIcon />
    </BookmarkLink>
  );
}

const BookmarkLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 15px;
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.main};
  border: ${({ theme }) => `1px solid ${theme.colors.borderSpecial}`};
  cursor: pointer;
`;
