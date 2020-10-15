import { css } from 'styled-components';

export const pageStyle = css`
  position: relative;
  max-width: 1290px;
  margin: auto;
  padding: 0 20px;
  @media (min-width: 640px) {
    & {
      padding: 0 80px;
    }
  }
`;