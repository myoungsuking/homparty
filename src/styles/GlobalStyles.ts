import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#5a483a',
    secondary: '#f7f2e9',
    text: '#333333',
    lightText: '#777777',
    background: '#ffffff',
  },
  fonts: {
    main: "'Gowun Dodum', sans-serif",
    heading: "'Gowun Batang', serif",
  },
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Gowun+Dodum&display=swap');

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  p {
    line-height: 1.6;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }
`;
