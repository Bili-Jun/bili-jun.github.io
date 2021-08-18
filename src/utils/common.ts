import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { DEFAULT_CLASS_NAME_PREFIX, APP_TITLE } from './constant';

export function isArray (val: Array<any>) {
  return Object.prototype.toString.call(val) === '[object Array]' && Object.prototype.toString.call(val) !== '[object String]'
}

export function mainClass (val?: string | (string | undefined)[], ...rest: (string | undefined | null)[]) {
  return classNames(DEFAULT_CLASS_NAME_PREFIX + '-' + (isArray(val as string[]) ? (val as string[])?.join('-') : val), ...rest);
}

export function changeTitle (title?: string) {
  document.title = !isEmpty(title) ? (title as string) : APP_TITLE;
}
