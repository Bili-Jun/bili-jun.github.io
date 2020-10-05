import React, { useEffect } from 'react';
import { StoreContext, useConnect } from '../../store'
import { APP_TITLE } from '../../utils/constant'

export default function WrapperPage (props: { children?: React.ReactNode, title?: string }) {
  const { children, title } = props
  const [, dispatch] = useConnect(StoreContext)
  useEffect(() => {
    if (title && title.length) {
      dispatch({ type: 'changeTitle', payload: title });
    }
    return () => dispatch({ type: 'changeTitle', payload: APP_TITLE });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      { children }
    </>
  )
}