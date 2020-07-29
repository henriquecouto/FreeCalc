import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    palette: {
      primary: string;
      secondary: string;
      white: string;
    };
  }
}
