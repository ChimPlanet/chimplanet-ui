import { ScreenType } from "@/contexts";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    sizes: Record<ScreenType, number>;
    widths: Record<ScreenType, number | string>;
    media: Record<
      ScreenType,
      (...args: string[]) => FlattenSimpleInterpolation
    >;
    textColors: Record<ThemeTextColorProperty, string>;
    borderColors: Record<ThemeBorderColorProperty, string>;
    bgColors: Record<ThemeBackgroundColorProperty, string>;
    specialColors: Record<ThemeSpecialColorProperty, string>;
  }
}

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
  | "quinary";
