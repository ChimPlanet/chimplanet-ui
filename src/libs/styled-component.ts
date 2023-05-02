import Styled, {
  ThemedStyledInterface,
  FlattenSimpleInterpolation,
} from "styled-components";

export type ThemeScreenType = "desktop" | "tablet" | "mobile";

export type ThemeTextColorProperty =
  | "primary" // 기본 텍스트
  | "secondary"
  | "tertiary" // 설명
  | "quaternary"
  | "quinary";

export type ThemeBorderColorProperty = "primary" | "secondary" | "tertiary";

export type ThemeSpecialColorProperty = "positive" | "negative" | "normal";

export type ThemeBackgroundColorProperty =
  | "primary" // 기본 배경
  | "secondary" // 헤더, 부모 메뉴
  | "tertiary" // 메뉴
  | "quaternary"
  | "quinary"
  | "senary";

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

export * from "styled-components";
export { styled };
