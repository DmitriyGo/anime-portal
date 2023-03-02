import Head from 'next/head';
import React from 'react';

import { SEO_TITLE_SITE } from '@/constants/common';

interface IPageSeoTags {
  title: string;
  description?: string;
  image?: string;
  website?: string;
  isPrivate?: boolean;
}

const PageHead = ({
  title,
  description,
  image,
  website = SEO_TITLE_SITE,
  isPrivate,
}: IPageSeoTags) => {
  // const formattedTitle = buildPageHeadTitle(title, website);

  return (
    <Head>
      {/* <title>{formattedTitle}</title> */}
      {!!description && <meta name="description" content={description} />}
      {/* <meta name="og:title" content={formattedTitle} /> */}
      <meta name="og:site_name" content={website} />
      {!!description && <meta name="og:description" content={description} />}
      {!!image && <meta name="og:image" content={image} />}
      {!!isPrivate && (
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      )}
    </Head>
  );
};

export default PageHead;
