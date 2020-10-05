import classNames from 'classnames';
import { DEFAULT_CLASS_NAME_PREFIX } from './constant';

export function mainClass (className: string, ...rest: any[]) {
  return classNames(DEFAULT_CLASS_NAME_PREFIX, ...rest);
}
