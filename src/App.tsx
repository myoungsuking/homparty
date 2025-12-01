import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme, fadeIn } from './styles/GlobalStyles';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Snowflakes from './components/Snowflakes';

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
  animation: ${fadeIn} 0.8s ease-in-out;
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    ${({ theme }) => theme.colors.accent}40 50%, 
    transparent 100%
  );
  border: none;
  margin: 60px 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Snowflakes />
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
