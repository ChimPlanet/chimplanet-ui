import Styled, {
  ThemedStyledInterface,
  FlattenSimpleInterpolation,
  useTheme,
} from "styled-components";

export type ThemeScreenType = "desktop" | "tablet" | "mobile";

export type ThemeTextColorProperty =
  | "primary" // 기본 텍스트
  | "secondary"
  | "tertiary" // 설명
  | "quaternary"
  | "quinary"
  | "senary"
  | "septenary"
  | "octonary"
  | "footer"
  | "modalIcon";

export type ThemeBorderColorProperty =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "quinary";

export type ThemeSpecialColorProperty =
  | "positive"
  | "negative"
  | "normal"
  | "footer";

export type ThemeBackgroundColorProperty =
  | "primary" // 기본 배경
  | "secondary" // 헤더, 부모 메뉴
  | "tertiary" // 메뉴
  | "quaternary"
  | "quinary"
  | "senary"
  | "septenary"
  | "footer";

export interface ChimplanetThemePlatte {
  sizes: Record<ThemeScreenType, number>;
  widths: Record<ThemeScreenType, number>;
  media: Record<
    ThemeScreenType,
    (...args: (string | TemplateStringsArray)[]) => FlattenSimpleInterpolation
  >;
  textColors: Record<ThemeTextColorProperty, string>;
  borderColors: Record<ThemeBorderColorProperty, string>;
  bgColors: Record<ThemeBackgroundColorProperty, string>;
  specialColors: Record<ThemeSpecialColorProperty, string>;
}

const styled = Styled as ThemedStyledInterface<ChimplanetThemePlatte>;

const useCurrentTheme = useTheme as () => ChimplanetThemePlatte;

export * from "styled-components";
export { styled, useCurrentTheme };
