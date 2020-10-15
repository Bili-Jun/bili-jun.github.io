import React from 'react';
import Page from '../../components/Page'
import { APP_TITLE_404 } from '../../utils/constant'

export default function NotFound (props: { default: boolean }) {
  return (
    <Page title={APP_TITLE_404} className="404">
      404
    </Page>
  );
}
