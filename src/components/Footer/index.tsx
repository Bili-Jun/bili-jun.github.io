import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { mainClass } from '../../utils/common';
import { APP_COPY_RIGHT, APP_MENU_CONFIG } from '../../utils/constant'

import { footerStyle } from './style';

function Footer (props: { className?: string}) {
  const { className } = props;
  return (
    <footer className={mainClass(['footer', className])}>
      <nav className={mainClass('footer-menu')}>
        {
          APP_MENU_CONFIG.map(o => (
            <Link
              key={o.key}
              className={mainClass(['footer', 'menu', 'item'])}
              title={o.key}
              to={o.path}
            >
              {o.key}
            </Link>
          ))
        }
      </nav>
      <div className={mainClass('footer-content')}>
        <p className={mainClass('copyright')}>{APP_COPY_RIGHT}</p>
        <div className={mainClass('footer-links')}>111</div>
      </div>
    </footer>
  );
}

const StyledFooter = styled(Footer)`
  ${footerStyle}
`;

export default StyledFooter;