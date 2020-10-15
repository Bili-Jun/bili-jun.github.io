import React from 'react';
import styled from 'styled-components';
import { Link } from "@reach/router";
import { logoStyle } from './style'
import { mainClass } from '../../utils/common'

function Logo (props: { className?: string}) {
  const { className } = props
  return (
    <Link to="/" className={mainClass(['logo', className])}>
    </Link>
  );
}

const StyledLogo = styled(Logo)`
  ${logoStyle}
`

export default StyledLogo
