import React from 'react';
import styled from 'styled-components';
import { footerStyle } from './style';
import { mainClass } from '../../utils/common';

function Footer (props: { className?: string}) {
  const { className } = props;
  return (
    <footer className={mainClass(['footer', className])}>
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  ${footerStyle}
`;

export default StyledFooter;