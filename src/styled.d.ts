// src/styled.d.ts
import 'styled-components';
import { theme } from './styles/GlobalStyles';

// theme 객체의 타입을 추론하여 ThemeType으로 명명합니다.
type ThemeType = typeof theme;

declare module 'styled-components' {
  // styled-components의 DefaultTheme 인터페이스를
  // 우리 프로젝트의 ThemeType으로 확장합니다.
  export interface DefaultTheme extends ThemeType {}
}
