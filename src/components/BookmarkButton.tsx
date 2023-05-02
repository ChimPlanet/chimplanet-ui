import { styled, Link } from "@/libs";
import { BOOKMARK_PATH } from "@/constants/route";

export const BookmarkButton: React.FC = () => {
  return (
    <BookmarkLink to={BOOKMARK_PATH}>
      북마크 &nbsp;
      <BookmarkIcon />
    </BookmarkLink>
  );
};

export default BookmarkButton;

const BookmarkIcon = () => (
  <svg
    width="9"
    height="12"
    viewBox="0 0 9 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ verticalAlign: "middle" }}
  >
    <path
      d="M8.61558 0.145172C8.51396 0.0776079 8.39221 0.0474777 8.28005 0H0.719012C0.575211 0.0721297 0.41703 0.12052 0.290486 0.220954C0.0767024 0.393517 -0.000949915 0.654645 8.75533e-06 0.949555C0.0019261 1.41429 8.75533e-06 1.87902 8.75533e-06 2.34376C8.75533e-06 5.23716 8.75533e-06 8.13148 8.75533e-06 11.0258C8.75533e-06 11.5143 0.205164 11.8366 0.607806 11.9635C0.931837 12.0657 1.20602 11.948 1.44185 11.6914C2.43024 10.6195 3.41767 9.54759 4.40606 8.47569C4.4329 8.44647 4.46166 8.41726 4.49713 8.37891C4.52781 8.41087 4.55849 8.441 4.58725 8.47204C5.57755 9.54668 6.56786 10.6213 7.55913 11.695C7.87453 12.0374 8.31935 12.0895 8.66064 11.822C8.85525 11.6695 8.97029 11.4586 8.98946 11.1874C8.9933 11.129 8.99713 11.0705 8.99713 11.0121C8.99713 7.66857 8.99713 4.32595 8.99905 0.982424C8.99905 0.622689 8.89456 0.329605 8.61462 0.144259L8.61558 0.145172Z"
      fill="#00BD2F"
    />
  </svg>
);

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
  color: ${({ theme }) => theme.textColors.primary};
  border: ${({ theme }) => `1px solid ${theme.specialColors.positive}`};
  cursor: pointer;
`;
