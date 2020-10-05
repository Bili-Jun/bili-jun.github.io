import React from 'react';
import WrapperPage from '../../components/WrapperPage'
import { APP_TITLE_BLOG } from '../../utils/constant'

export default function Blog (props: { path: string }) {
  return (
    <WrapperPage title={APP_TITLE_BLOG}>
      <section>
        blog
      </section>
    </WrapperPage>  
  );
}
