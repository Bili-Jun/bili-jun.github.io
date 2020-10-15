import React from 'react';
import styled from 'styled-components';
import { themeModeButtonStyle } from './style'
import { mainClass } from '../../utils/common'

function ThemeModeButton (props: { className?: string}) {
  const { className = '' } = props
  return (
    <button className={mainClass(['theme-mode', className])}></button>
  );
}

const StyledThemeModeButton = styled(ThemeModeButton)`
  ${themeModeButtonStyle}
`

export default StyledThemeModeButton
