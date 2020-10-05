import React, { createContext, useContext } from 'react';
import model, { IState, IAction } from './model'

export const initialState: IState = model.state

export type ContextValue = Array<IState | Function>

const defaultContextValue: ContextValue = [initialState, () => undefined]

export const StoreContext = createContext(defaultContextValue)

export const reducer = (state: IState, action: IAction) => {
  const { type, payload } = action
  const stateMap: any = {}
  Object.keys(model?.reducers).forEach((n) => {
    stateMap[n] = model?.reducers[n](state, { payload })
  })
  return type && stateMap[type] ? stateMap[type] : initialState
}

/**
 *
 *
 * @export
 * @param {React.Context<any>} context
 * @returns
 */
export function useConnect(context: React.Context<any>){
  return useContext(context);
}
