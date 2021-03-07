import React from 'react';
import styled from 'styled-components';
import { mainClass } from '../../utils/common'
import { DEFAULT_CLASS_NAME_PREFIX as prefix } from '../../utils/constant'

function LoadingIcon (props: { className?: string}) {
  const { className } = props;
  const defaultClassName = 'loading-icon'
  return (
    <span className={mainClass([defaultClassName, className], prefix + '-' + defaultClassName)}>
      <svg width="48" height="48" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="6" fill="rgb(204 204 204 / .3)"/>
        <circle cx="32" cy="16" r="6" fill="rgb(204 204 204 / .6)"/>
        <circle cx="16" cy="32" r="6" fill="rgb(204 204 204 / .9)"/>
        <circle cx="32" cy="32" r="6" fill="#ccc"/>
      </svg>
    </span>  
  )
}

const StyledLoadingIcon = styled(LoadingIcon)`
  display: inline-block;
`;

export default StyledLoadingIcon