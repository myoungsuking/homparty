import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from './styles/GlobalStyles';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Location from './components/Location';

const AppContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 60px 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
