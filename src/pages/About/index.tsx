import React from 'react';
import Page from '../../components/Page'
import { APP_TITLE_ABOUT } from '../../utils/constant'

export default function About (props: { path: string }) {
  return (
    <Page title={APP_TITLE_ABOUT} className="about">
      about
    </Page> 
  );
}
