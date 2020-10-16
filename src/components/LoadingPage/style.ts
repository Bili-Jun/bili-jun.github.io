import { css } from 'styled-components';
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant'

export const loadingPageStyle = css`
  position: relative;
  text-align: center;
  @media (prefers-reduced-motion: no-preference) {
    .${prefix}-loading-icon {
      animation: loading-spin infinite 2s linear;
    }
  }
  @keyframes loading-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;