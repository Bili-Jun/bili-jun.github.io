import React from 'react';
import Page from '../../components/Page'
import Introduction from '../../components/Introduction'

export default function Home (props: { path: string }) {
  return (
    <Page className="home">
      <Introduction />
    </Page>
  );
}
