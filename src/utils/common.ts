import classNames from 'classnames';
import { DEFAULT_CLASS_NAME_PREFIX } from './constant';

export function isArray (val: Array<any>) {
  return Object.prototype.toString.call(val) === '[object Array]' && Object.prototype.toString.call(val) !== '[object String]'
}

export function mainClass (val?: string | (string | undefined)[], ...rest: (string | undefined | null)[]) {
  return classNames(DEFAULT_CLASS_NAME_PREFIX + '-' + (isArray(val as string[]) ? (val as string[])?.join('-') : val), ...rest);
}