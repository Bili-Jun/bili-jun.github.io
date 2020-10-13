import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { headerStyle } from './style'
import { mainClass } from '../../utils/common'



function Header (props: { className?: string}) {
  const { className = 'header' } = props
  return (
    <header className={mainClass(className)}>
      <nav>
        <Logo />
      </nav>
    </header>  
  );
}
const StyledHeader = styled(Header)`
  ${headerStyle}
`

export default StyledHeader
