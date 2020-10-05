import { APP_TITLE } from '../utils/constant';

export interface IState {
  title?: string
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
  changeTitle(state: IState, { payload }) {
    const { title } = state
    return {
      title: payload || title
    }
  }
}

const state: IState = {
  title: APP_TITLE
}

export default {
  state,
  reducers
}