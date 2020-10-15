import { css } from 'styled-components';
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant'

export const menuStyle = css`
  position: relative;
  .${prefix}-menu-item {
    margin-left: 24px;
    text-decoration: none;
    transition: color 0.3s;
    &.active, &:hover {
      color: #ccc;
    }
  }
`