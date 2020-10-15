import React from 'react';
import styled from 'styled-components';
import { logoStyle } from './style'
import { mainClass } from '../../utils/common'

function Logo (props: { className?: string}) {
  const { className } = props
  return (
    <div className={mainClass('logo', className)}>
    </div>
  );
}

const StyledLogo = styled(Logo)`
  ${logoStyle}
`

export default StyledLogo
