import React from 'react';
import { StoreContext, ContextValue } from './store'

export default function GlobalProvider (props: { store: ContextValue, children: React.ReactNode; }) {
  return (
    <StoreContext.Provider value={props.store}>
       {props.children}
    </StoreContext.Provider>
  )
}