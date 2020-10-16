import React, { Suspense } from 'react';
import { Router } from '@reach/router';
// import { StoreContext, useConnect } from './store'
import { mainClass } from './utils/common';

import Header from './components/Header'
import Footer from './components/Footer'
import LoadingPage from './components/LoadingPage'

const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const NotFound = React.lazy(() => import('./pages/404'));

const Pages = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return (
    <Suspense fallback={<LoadingPage />}>
      { children }
    </Suspense>
  );
}

function App(props: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className={mainClass('main')}>
        <LoadingPage />
        <Pages>
          <Router>
            <Home path="/" />
            <Blog path="/blog" />
            <Projects path="/projects" />
            <About path="/about" />
            <NotFound default />
          </Router>
        </Pages>
      </main>
      <Footer />
    </>
  );
}

export default App;
