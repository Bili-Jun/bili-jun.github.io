import React, { useEffect } from 'react';
import styled from 'styled-components';
import { StoreContext, useConnect } from '../../store'
import { mainClass, changeTitle } from '../../utils/common'
import { pageStyle } from './style'

const StyledPage = styled.section`
  ${pageStyle}
`

export default function Page (props: { children?: React.ReactNode, title?: string, className: string, ref?: any }) {
  const { children, title, className } = props;
  // const [, dispatch] = useConnect(StoreContext)
  useEffect(() => {
    changeTitle(title)
      // dispatch({ type: 'changeTitle', payload: title && title.length ? title : APP_TITLE });
    // return () => 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <StyledPage className={mainClass(className)}>
      { children }
    </StyledPage>
  )
}
