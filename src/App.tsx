import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme, fadeIn } from './styles/GlobalStyles';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Location from './components/Location';
import BackgroundEffect from './components/BackgroundEffect';

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-in-out;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin: 80px 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BackgroundEffect />
      <AppContainer>
        <Header />
        <Divider />
        <Gallery />
        <Divider />
        <Location />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
