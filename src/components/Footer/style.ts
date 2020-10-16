import { css } from 'styled-components';

export const footerStyle = css`
  position: relative;
  max-width: 1290px;
  margin: auto;
  padding: 96px 20px 48px 20px;
  @media (min-width: 640px) {
    & {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
`