import { useRef, useCallback } from "react";

export default function useTimer(
  callbackWhenExpired: () => void,
  delay = 1000
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const fire = useCallback(() => {
    clear();
    timerRef.current = setTimeout(callbackWhenExpired, delay);
  }, [callbackWhenExpired, clear, delay]);

  return { fire, clear };
}
