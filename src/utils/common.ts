import classNames from 'classnames';
import { DEFAULT_CLASS_NAME_PREFIX } from './constant';

export function mainClass (...rest: (string| any)[]) {
  return classNames(DEFAULT_CLASS_NAME_PREFIX + '-' + rest.join('-'));
}