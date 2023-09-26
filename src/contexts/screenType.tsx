import { createContext, useContext, useMemo } from "react";

import useScreenWidth from "@chimplanet/ui/hooks/useScreenWidth";
import { ThemeScreenType } from "@chimplanet/ui/libs";

export type ScreenType = ThemeScreenType;

const screenTypeContext = createContext<ScreenType>("desktop");

export const useScreenType = () => useContext(screenTypeContext);

//#region Provider
interface ScreenTypeProviderProps {
  screens: Record<ScreenType, number>;
}

export const ScreenTypeProvider: React.FC<
  React.PropsWithChildren<ScreenTypeProviderProps>
> = ({ children, screens }) => {
  const width = useScreenWidth();

  const sortedScreenItems = useMemo(() => orderByWidthDesc(screens), [screens]);

  const currentScreenType = useMemo<ScreenType>(
    () => getProperScreenType(width, sortedScreenItems),
    [width]
  );

  return (
    <screenTypeContext.Provider value={currentScreenType}>
      {children}
    </screenTypeContext.Provider>
  );
};
//#endregion

//#region Utils
const orderByWidthDesc = (screens: ScreenTypeProviderProps["screens"]) =>
  Object.entries(screens)
    .map(([key, value]) => ({
      screenType: key as ScreenType,
      threshold: value,
    }))
    .sort((a, b) => b.threshold - a.threshold);

function getProperScreenType(
  width: number,
  sortedScreenItems: ReturnType<typeof orderByWidthDesc>
) {
  for (let i = 0; i < sortedScreenItems.length; i++) {
    if (width >= sortedScreenItems[i].threshold) {
      return sortedScreenItems[i].screenType;
    }
  }
  return sortedScreenItems.at(-1)!.screenType;
}
//#endregion
