import { APP_TITLE } from '../utils/constant';

export interface IState {

}

interface IReducers {
  [reducerName: string]: IReducersFunction
}

interface IReducersFunction {
  (state: IState, action: IAction): IState
}

export interface IAction {
  type?: string
  payload?: any
}

const reducers: IReducers = {

}

const state: IState = {

}

export default {
  state,
  reducers
}