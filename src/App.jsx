import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Canvas from './Canvas';
import ThemeContext from './utils/context';
import theme from './StyledComponents/theme';
import GlobalStyles from './StyledComponents/globalStyles';

const Layout = styled.div`
  background: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor}
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <ThemeContext.Provider value={'dark'}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Canvas />
        </Layout>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
