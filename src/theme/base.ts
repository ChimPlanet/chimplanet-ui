import { ScreenType } from "@/contexts";
import { ChimplanetThemePlatte, FlattenSimpleInterpolation, css } from "@/libs";

// ! @media 감지 너비
const sizes = {
  mobile: 420,
  tablet: 768,
  desktop: 1200,
};

// ! 실제 컨테이너 너비
const widths = {
  tablet: 720,
  desktop: 1060,
  mobile: "100%",
} as any;

const media: Record<
  ScreenType,
  (...args: (string | TemplateStringsArray)[]) => FlattenSimpleInterpolation
> = {
  tablet: (...args) => "" as any,
  desktop: (...args) => "" as any,
  mobile: (...args) => "" as any,
};

Object.keys(sizes).reduce((acc, label) => {
  switch (label) {
    case "desktop":
      acc.desktop = (...args) =>
        css`
          @media only screen and (min-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case "tablet":
      acc.tablet = (...args) =>
        css`
          @media only screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case "mobile":
      acc.mobile = (...args) =>
        css`
          @media only screen and (max-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

type BaseThemeProperty = "media" | "sizes" | "widths";

export const baseTheme: Pick<ChimplanetThemePlatte, BaseThemeProperty> = {
  media,
  widths,
  sizes,
};

export default baseTheme;

export const createThemePlatte = (
  platte: Omit<ChimplanetThemePlatte, BaseThemeProperty>
): ChimplanetThemePlatte => ({
  ...platte,
  ...baseTheme,
});
