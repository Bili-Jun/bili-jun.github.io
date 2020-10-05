import React from 'react';
import WrapperPage from '../../components/WrapperPage'
import { APP_TITLE_404 } from '../../utils/constant'

export default function NotFound (props: { default: boolean }) {
  return (
    <WrapperPage title={APP_TITLE_404}>
      <section>
        404
      </section>
    </WrapperPage> 
  );
}
