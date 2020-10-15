import React from 'react';
import Page from '../../components/Page'
import { APP_TITLE_BLOG } from '../../utils/constant'

export default function Blog (props: { path: string }) {
  return (
    <Page title={APP_TITLE_BLOG} className="blog">
      blog
    </Page>  
  );
}
