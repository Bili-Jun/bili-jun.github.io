import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import ThemeModeButton from './ThemeModeButton';
import LangButton from './LangButton'
import MobileMenu from './MobileMenu'

import { headerStyle, rightMenuStyle } from './style';

import Menu from '../Menu';

import { mainClass } from '../../utils/common'
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant'

const StyledRightMenu = styled.div`
  ${rightMenuStyle}
`

function Header (props: { className?: string}) {
  const { className } = props;
  return (
    <header className={mainClass(['header', className])}>
      <MobileMenu />
      <nav>
        <Logo />
        <Menu />
        <StyledRightMenu>
          <ThemeModeButton />
          <LangButton />
        </StyledRightMenu>
      </nav>

    </header>  
  );
}

const StyledHeader = styled(Header)`
  ${headerStyle}
  span.${prefix}-menu-${(Menu as any)?.styledComponentId} {
    flex-grow: 1;
    display: none;
  }
  @media (min-width: 640px) {
    span.${prefix}-menu-${(Menu as any)?.styledComponentId} {
      display: inline;
    }
  }
`

export default StyledHeader
