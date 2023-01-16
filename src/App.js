import { ThemeProvider } from 'styled-components';

import GlobalStyle from './GlobalStyles';
import { darkTheme, lightTheme } from './components/Themes';
import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme }>
        ARIK

      </ThemeProvider>
    </>
  );
}

export default App;
