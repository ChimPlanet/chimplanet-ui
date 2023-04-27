import { useCallback, useRef } from "react";

import useInterval from "./hooks/useInterval";

type DelegateSetNumber = (cursor: number | ((prev: number) => number)) => void;

/**
 *  Carousel Component Item 자동 넘기기 Counter
 */
export function useCarouselCounter(
  setCursor: DelegateSetNumber,
  delay: number,
  isStop: boolean
) {
  useInterval(
    useCallback(() => {
      if (document.hasFocus() && !isStop) setCursor((prev) => prev + 1);
    }, [setCursor, isStop]),
    delay
  );
}

export function useCarouselEvents(
  cursor: number,
  setCursor: (callback: (prev: number) => number, status: boolean) => void,
  normalize: (value: number) => number,
  setStop: (isStop: boolean) => void,
  setDelta: (delta: number) => void,
  handleDeltaConfirm: (status?: boolean) => void
) {
  const baseXPosRef = useRef(0);

  const onTransitionEnd = useCallback(() => {
    setCursor((value) => normalize(value), false);
  }, [setCursor, cursor, normalize, baseXPosRef]);

  const onMouseDown = useCallback(
    generateMoveStartHandle(baseXPosRef, setCursor),
    [baseXPosRef, setCursor]
  );

  const onMouseMove = useCallback(generateMovingHandle(baseXPosRef, setDelta), [
    setDelta,
    baseXPosRef,
  ]);

  const onMouseUp = useCallback(
    () => handleDeltaConfirm(),
    [handleDeltaConfirm]
  );

  // 마우스가 올라가 있는 경우 자동 Slider 를 멈춤
  const onMouseLeave = useCallback(() => {
    handleDeltaConfirm(false);
    setStop(false);
  }, [setStop, handleDeltaConfirm]);

  const onMouseEnter = useCallback(() => setStop(true), [setStop]);

  return {
    onTransitionEnd,
    onMouseEnter,
    ...changeToMobileEvent({
      onMouseDown,
      onMouseUp,
      onMouseMove,
      onMouseLeave,
    }),
  };
}

function changeToMobileEvent(events: any) {
  return !isMobile()
    ? events
    : {
        onTouchStart: events.onMouseDown,
        onTouchEnd: events.onMouseUp,
        onTouchMove: events.onMouseMove,
        onTouchCancel: events.onMouseLeave,
      };
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

function generateMoveStartHandle(baseXPosRef: any, setCursor: any) {
  if (isMobile()) {
    (e: TouchEvent) => {
      baseXPosRef.current = e.touches[0].clientX;
      setCursor(undefined, false);
    };
  }

  // ! Desktop 인 경우
  return (e: MouseEvent) => {
    if (e.buttons === 1) {
      baseXPosRef.current = e.clientX;
      setCursor(undefined, false);
    }
  };
}

function generateMovingHandle(baseXPosRef: any, setDelta: any) {
  if (isMobile()) {
    return (e: TouchEvent) => {
      setDelta(e.touches[0].clientX - baseXPosRef.current);
    };
  }

  return (e: MouseEvent) => {
    if (e.buttons === 1) {
      setDelta(e.clientX - baseXPosRef.current);
    }
  };
}
