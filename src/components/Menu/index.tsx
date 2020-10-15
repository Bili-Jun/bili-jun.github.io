import React from 'react';
import styled from 'styled-components';
import { Link, Match } from "@reach/router";
import { menuStyle } from './style'
import { mainClass } from '../../utils/common'
import { APP_MENU_CONFIG } from '../../utils/constant'


function Menu (props: { className?: string}) {
  const { className } = props
  return (
    <span className={mainClass(['menu', className])}>
      {
        APP_MENU_CONFIG.map(o => (
          <Match key={o.key} path={o.path}>
            {
              props => (
                <Link
                  className={mainClass(['menu', 'item'], props.match ? 'active' : null)}
                  title={o.key}
                  to={o.path}
                >
                  {o.key}
                </Link>
              )
            }
          </Match>
        ))
      }
    </span>
  );
}

const StyledMenu = styled(Menu)`
  ${menuStyle}
`

export default StyledMenu
