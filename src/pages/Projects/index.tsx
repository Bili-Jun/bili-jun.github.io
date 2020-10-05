import React from 'react';
import WrapperPage from '../../components/WrapperPage'
import { APP_TITLE_PROJECTS } from '../../utils/constant'

export default function Projects (props: { path: string }) {
  return (
    <WrapperPage title={APP_TITLE_PROJECTS}>
      <section>
        Projects
      </section> 
    </WrapperPage> 
  );
}
