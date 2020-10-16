import React from 'react';
import styled from 'styled-components';
import LoadingIcon from './LoadingIcon';
import Page from '../Page'

import { loadingPageStyle } from './style'

function LoadingPage (props: { className?: string}) {
  const { className } = props;
  return (
    <Page className={'loading ' +  className}>
      <LoadingIcon />
    </Page>  
  )
}

const StyledLoadingPage = styled(LoadingPage)`
  ${loadingPageStyle}
`;

export default StyledLoadingPage;