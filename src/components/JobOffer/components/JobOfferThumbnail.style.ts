import { styled } from "@/libs";

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  aspect-ratio: 1/1;
`;

export const ThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  margin: 0px auto;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

export const BookmarkButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 18px;
  margin-right: 18px;
`;
