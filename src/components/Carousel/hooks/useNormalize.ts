import { useCallback } from "react";

export default function useNormalize(MAX_LEN: number) {
  return useCallback(
    (value: number) => {
      if (value >= MAX_LEN || value < 0)
        return value + (value >= MAX_LEN ? -MAX_LEN : MAX_LEN);
      return value;
    },
    [MAX_LEN]
  );
}
