import { css } from 'styled-components';

export const headerStyle = css`
  height: 128px;
  max-width: 1290px;
  margin: auto;
  nav {
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
  }
  @media (min-width: 640px) {
    & {
      padding: 0 80px;
    }
    & nav {
      justify-content: flex-start;
    }
  }
`;

export const logoStyle = css`
  width: 48px;
  height: 48px;
  background-color: #ccc;
`;

export const rightMenuStyle = css`
  display: none;
  @media (min-width: 640px) {
    & {
      display: block;
    }
  }
`;

const buttonDefaultConfig = {
  width: '20px',
  height: '20px'
}

export const themeModeButtonStyle = css`
  ${buttonDefaultConfig}
`;

export const langButtonStyle = css`
  ${buttonDefaultConfig}
`;