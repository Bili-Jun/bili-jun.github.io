import { css } from 'styled-components';
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant';

export const footerStyle = css`
  position: relative;
  bottom: 0;
  width: 100%;
  max-width: 1290px;
  margin: auto;
  left: 0;
  right: 0;
  padding: 96px 0 48px 0;
  .github-bili-jun {
    width: 32px;
    height: 32px;
    svg {
      width: inherit;
      height: inherit;
    }
  }
  .${prefix}-footer-menu {
    display: none;
    text-align: right;
    a.${prefix}-footer-menu-item {
      margin-left: 24px;
      color: #1a1a1a;
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
    .${prefix}-footer-content {
      justify-content: space-between;
      flex-direction: row;
      padding-left: 80px;
      padding-right: 80px;
    }
    .${prefix}-footer-menu {
      flex-grow: 1;
      display: block;
      height: 24px;
      padding-left: 80px;
      padding-right: 80px;
    }
  }
`