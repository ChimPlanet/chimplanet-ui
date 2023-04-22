import { FileDragDropPane } from "../FileDragDropPane";
import { Image, OverlayContainer, OverlayPane } from "./DragAndDropImage.style";

/**
 * @typedef {object} DragAndDropImageProps
 * @property {string} id
 * @property {(file: File) => void} onDropImage
 * @property {(file: File) => boolean} validateDroppedFile
 * @property {string?} imageSourceURL
 * @property {JSX.Element} elementWhenEmpty
 * @property {{width: number, height: number}} imageRect
 * @property {JSX.Element} elementWhenUsually
 * @property {JSX.Element} elementWhenDragging
 *
 * @param {DragAndDropImageProps}
 * @returns
 */

export default function DragAndDropImage({
  id,
  imageSourceURL,
  elementWhenEmpty,
  imageRect,
  onDropImage,
  validateDroppedFile,
  elementWhenDragging,
  elementWhenUsually,
}) {
  // (imageSource가 없는 경우에만 elementWhenEmpty를 랜더링 합니다)
  const contentElement = imageSourceURL ? (
    <Image
      src={imageSourceURL}
      width={imageRect.width}
      height={imageRect.height}
    />
  ) : (
    elementWhenEmpty
  );

  /** @param {File} file */
  function handleFileDrop(file) {
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
          draggingElement={elementWhenDragging}
          defaultElement={elementWhenUsually}
          onDropFile={handleFileDrop}
        />
      </OverlayPane>
      <OverlayPane zIndex={0}>{contentElement}</OverlayPane>
    </OverlayContainer>
  );
}
