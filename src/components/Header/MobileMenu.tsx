import React, { useState } from 'react';
import styled from 'styled-components';
import { hamburgMenuButtonStyle, maskStyle } from './style'
import { mainClass } from '../../utils/common'

const StyledHamburgButton = styled.button`
  ${hamburgMenuButtonStyle}
`;

const StyledMask = styled.div`
    ${maskStyle}
    opacity: ${(props: { visible: boolean, time: number }) => props.visible ? .3 : 0};
    transition: opacity ${props => props.time}s;
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
      }, 0)
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
      {maskVisible && <StyledMask visible={maskShow} time={time/1000} onClick={() => maskStatusAction(false)} className={mainClass('mask')}></StyledMask>}
    </>
  );
}
