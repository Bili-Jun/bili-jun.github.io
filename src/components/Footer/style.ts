import { css } from 'styled-components';
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant';

export const footerStyle = css`
  position: relative;
  max-width: 1290px;
  margin: auto;
  padding: 96px 20px 48px 20px;
  .${prefix}-footer-menu {
    display: none;
    text-align: right;
    a.${prefix}-footer-menu-item {
      margin-left: 24px;
    }
  }
  .${prefix}-footer-content {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    align-items: center;
    p {
      margin: 0;
    }
  }
  @media (min-width: 640px) {
    & {
      padding-left: 80px;
      padding-right: 80px;
    }
    .${prefix}-footer-content {
      justify-content: space-between;
      flex-direction: row;
    }
    .${prefix}-footer-menu {
      flex-grow: 1;
      display: block;
      height: 24px;
    }
  }
`