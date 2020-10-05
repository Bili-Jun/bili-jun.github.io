import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from './App';
import { GlobalStyle } from './style';
import * as serviceWorker from './serviceWorker';

import Provider from './GlobalProvider';
import { initialState, reducer } from './store'

function Main () {
  const [globalStore, dispatch] = useReducer(reducer, initialState)
  const store = [globalStore, dispatch]
  const { title } = globalStore
  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <HelmetProvider>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <App />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
