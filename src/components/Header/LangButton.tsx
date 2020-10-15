import React from 'react';
import styled from 'styled-components';
import { langButtonStyle } from './style'
import { mainClass } from '../../utils/common'

function LangButton (props: { className?: string}) {
  const { className } = props
  return (
    <button className={mainClass('theme-mode', className)}></button>
  );
}

const StyledLangButton = styled(LangButton)`
  ${langButtonStyle}
`

export default StyledLangButton
