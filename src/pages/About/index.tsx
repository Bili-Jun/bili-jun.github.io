import React from 'react';
import WrapperPage from '../../components/WrapperPage'
import { APP_TITLE_ABOUT } from '../../utils/constant'

export default function About (props: { path: string }) {
  return (
    <WrapperPage title={APP_TITLE_ABOUT}>
      <section>
        about
      </section>
    </WrapperPage> 
  );
}
