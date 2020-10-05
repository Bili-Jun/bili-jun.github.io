import React, { Suspense } from 'react';
import { Router } from '@reach/router';
// import { StoreContext, useConnect } from './store'
import { mainClass } from './utils/common';

const Home = React.lazy(() => import('./pages/Home'));
const Blog = React.lazy(() => import('./pages/Blog'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const NotFound = React.lazy(() => import('./pages/404'));

const Pages = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      { children }
    </Suspense>
  );
}

function App(props: { children?: React.ReactNode }) {
  return (
    <>
      <main className={mainClass('main')}>
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
    </>
  );
}

export default App;
