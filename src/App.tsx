import React from 'react';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Loadable from 'react-loadable';
// import { StoreContext, useConnect } from './store'

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const loadableConfig = { loading: (props: any) => <Loading {...props} />, delay: 1000, timeout: 1500 }

const Home = Loadable({ loader: () => import('./pages/Home'), ...loadableConfig });
const Blog = Loadable({ loader: () => import('./pages/Blog'), ...loadableConfig });
const About = Loadable({ loader: () => import('./pages/About'), ...loadableConfig });
const Projects = Loadable({ loader: () => import('./pages/Projects'), ...loadableConfig });
const NotFound = Loadable({ loader: () => import('./pages/404'), ...loadableConfig });

function App(props: { children?: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="main">
        <React.StrictMode>
          <Location>
            {({ location }) => (
              <TransitionGroup
                className="page-transition-group"
              >
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={500}
                >
                  <Router location={location} className="router-page">
                    <Home path="/" />
                    <Blog path="/blog" />
                    <Projects path="/projects" />
                    <About path="/about" />
                    <NotFound default />
                  </Router>
                </CSSTransition>  
              </TransitionGroup>    
            )}
          </Location>
        </React.StrictMode>
      </main>
      <Footer />
    </>
  );
}

export default App;
