import { useLayoutEffect, useRef } from "react";
export default function useInterval(callback: Function, interval: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useLayoutEffect(() => {
    intervalRef.current = setInterval(callback, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [callback, interval]);
}
