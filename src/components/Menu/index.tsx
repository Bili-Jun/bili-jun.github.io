import React from 'react';
import styled from 'styled-components';
import { Link, Match } from '@reach/router';
import { menuStyle } from './style'
import { mainClass } from '../../utils/common'
import { APP_MENU_CONFIG, IMenuItem } from '../../utils/constant'

function Menu (props: { className?: string, onMenuItemClick?: (item: IMenuItem, index: number) => void }) {
  const { className, onMenuItemClick } = props
  const onMenuItemClickAction = (item: IMenuItem, index: number) => {
    if (onMenuItemClick) {
      onMenuItemClick(item, index);
    }
  };
  return (
    <span className={mainClass(['menu', className])}>
      {
        APP_MENU_CONFIG.map((o, i) => (
          <Match key={o.key} path={o.path}>
            {
              props => (
                <Link
                  className={mainClass(['menu', 'item'], props.match ? 'active' : null)}
                  title={o.key}
                  to={o.path}
                  onClick={() => onMenuItemClickAction(o, i)}
                >
                  <span>{o.key}</span>
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
