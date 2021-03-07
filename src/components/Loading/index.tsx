import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import LoadingIcon from './LoadingIcon';

import { loadingStyle } from './style'

function Loading (props: { className?: string}) {
  const { className } = props;
  return (
    <TransitionGroup>
      <CSSTransition
        classNames="fade"
        timeout={500}
      >
        <LoadingIcon
          className={className}
        />
      </CSSTransition>
    </TransitionGroup>
  )
}

const StyledLoading = styled(Loading)`
  ${loadingStyle}
`;

export default StyledLoading;