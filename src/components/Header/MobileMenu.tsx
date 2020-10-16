import React, { useState } from 'react';
import styled from 'styled-components';
import { hamburgMenuButtonStyle, maskStyle } from './style'

import Menu from '../Menu'

import { mainClass } from '../../utils/common'
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant'

const StyledHamburgButton = styled.button`
  ${hamburgMenuButtonStyle}
`;

const StyledMask = styled.div`
    ${maskStyle}
    opacity: ${(props: { visible: boolean, time: number }) => props.visible ? .3 : 0};
    transition: opacity ${props => props.time}s;
`;

const StyledMenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 30%;
  z-index: 10;
  span.${prefix}-menu-${(Menu as any)?.styledComponentId}.mobile {
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    a {
      color: #fff;
      text-align: right;
      margin: 0 20px 20px 0;
    }
  }
`;

export default function MobileMenu () {
  const [maskVisible, setMaskVisible] = useState(false);
  const [maskShow, setMaskShow] = useState(false);
  let timer: any = null;
  const time = 300;
  const maskStatusAction = (visible: boolean) => {
    clearTimeout(timer);
    timer = null;
    if (maskShow !== maskVisible) {
      return;
    }
    if (visible) {
      setMaskVisible(visible)
      timer = setTimeout(() => {
        setMaskShow(true);
        clearTimeout(timer);
        timer = null;
      }, 50)
    } else {
      setMaskShow(false);
      timer = setTimeout(() => {
        setMaskVisible(visible);
        clearTimeout(timer);
        timer = null;
      }, time)
    }
  }
  
  return (
    <>
      <StyledHamburgButton
        className={mainClass('hamburg-menu-button')}
        onClick={() => maskStatusAction(!maskVisible)}
      >
      </StyledHamburgButton>
      {maskVisible && (
        <StyledMask
          visible={maskShow}
          time={time/1000}
          onClick={() => maskStatusAction(false)}
          className={mainClass('mask')}
        >
        </StyledMask>)
      }
      {
        maskVisible && (
          <StyledMenuContainer>
            <Menu className="mobile" onMenuItemClick={() => maskStatusAction(false)} />
          </StyledMenuContainer>
        )
      }
    </>
  );
}
