import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from "react";

import SoundBar from './components/SoundBar';
import MainPage from './pages/MainPage';
import WorkPage from './pages/WorkPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import GlobalStyle from './style/GlobalStyles';
import NotFoundPage from './pages/NotFoundPage';
import { lightTheme } from './style/Themes';
import Loader from './components/Loader';

function App() {

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence wait>
          <Routes location={location} key={ location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/loader" element={<Loader />} />
          </Routes>
        </AnimatePresence>

      </ThemeProvider>
    </>
  );
}

export default App;
