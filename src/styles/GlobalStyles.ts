import { createGlobalStyle, keyframes } from 'styled-components';

export const theme = {
  colors: {
    primary: '#8D7B68',
    secondary: '#F7F5F2',
    text: '#3C3633',
    lightText: '#A4907C',
    background: '#FFFEFD',
    accent: '#C8B6A6',
  },
  fonts: {
    main: "'Pretendard', sans-serif",
    heading: "'Pretendard', sans-serif",
  },
};

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GlobalStyles = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    word-break: keep-all;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  p {
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
