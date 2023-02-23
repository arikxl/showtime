import { Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from "react";

import Loader from './components/Loader';
import GlobalStyle from './style/GlobalStyles';
import { lightTheme } from './style/Themes';

const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const SoundBar = lazy(() => import('./components/SoundBar'));

function App() {

  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loader />}>
          <SoundBar />
          <AnimatePresence wait>
            <Routes location={location} key={ location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
