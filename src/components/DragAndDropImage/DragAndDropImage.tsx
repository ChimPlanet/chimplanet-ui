import { FileDragDropPane } from "../FileDragDropPane";
import { Image, OverlayContainer, OverlayPane } from "./DragAndDropImage.style";

export interface DragAndDropImage {
  id: string;
  onDropImage(file: File): void;
  validateDroppedFile(file: File): boolean;
  imageSourceURL?: string;
  imageRect: { width: number; height: number };
  elementWhenEmpty: JSX.Element;
  elementWhenUsually: JSX.Element;
  elementWhenDragging: JSX.Element;
}

export const DragAndDropImage: React.FC<DragAndDropImage> = ({
  id,
  imageSourceURL,
  elementWhenEmpty,
  imageRect,
  onDropImage,
  validateDroppedFile,
  elementWhenDragging,
  elementWhenUsually,
}) => {
  const contentElement = imageSourceURL ? (
    <Image
      src={imageSourceURL}
      width={imageRect.width}
      height={imageRect.height}
    />
  ) : (
    elementWhenEmpty
  );

  function handleFileDrop(file: File) {
    // 파일 크기 등 조건 확인
    if (validateDroppedFile(file)) {
      onDropImage(file);
    }
  }

  return (
    <OverlayContainer>
      <OverlayPane zIndex={1}>
        <FileDragDropPane
          id={id}
          elementWhenDragging={elementWhenDragging}
          elementWhenUsually={elementWhenUsually}
          onDropFile={handleFileDrop}
        />
      </OverlayPane>
      <OverlayPane zIndex={0}>{contentElement}</OverlayPane>
    </OverlayContainer>
  );
};

export default DragAndDropImage;
