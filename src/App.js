import { ThemeProvider } from 'styled-components';

// import './style/App.css';
import GlobalStyle from './style/GlobalStyles';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import { Route, Routes } from 'react-router-dom';
import { darkTheme, lightTheme } from './style/Themes';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme }>
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
      </Routes>

      </ThemeProvider>
    </>
  );
}

export default App;
