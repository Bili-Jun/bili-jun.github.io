import React from 'react';
import Page from '../../components/Page'
import { APP_TITLE_PROJECTS } from '../../utils/constant'

export default function Projects (props: { path: string }) {
  return (
    <Page title={APP_TITLE_PROJECTS} className="projects">
      projects
    </Page>   
  );
}
