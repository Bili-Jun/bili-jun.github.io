import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StoreContext, useConnect } from '../../store'
import { APP_TITLE } from '../../utils/constant'
import { mainClass } from '../../utils/common'
import { pageStyle } from './style'

const StyledPage = styled.section`
  ${pageStyle}
`

export default function Page (props: { children?: React.ReactNode, title?: string, className: string, ref?: any }) {
  const { children, title, className } = props
  const [, dispatch] = useConnect(StoreContext)
  useEffect(() => {
    if (title && title.length) {
      dispatch({ type: 'changeTitle', payload: title });
    }
    return () => dispatch({ type: 'changeTitle', payload: APP_TITLE });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <StyledPage className={mainClass(className)}>
      { children }
    </StyledPage>
  )
}
