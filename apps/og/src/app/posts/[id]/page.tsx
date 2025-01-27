import type { AnyPublication } from '@lensshare/lens';
import type { Metadata } from 'next';

import { APP_NAME } from '@lensshare/data/constants';
import {
  LimitType,
  PublicationDocument,
  PublicationsDocument
} from '@lensshare/lens';
import { apolloClient } from '@lensshare/lens/apollo';
import getPublicationData from '@lensshare/lib/getPublicationData';
import getProfile from '@lensshare/lib/getProfile';
import { isMirrorPublication } from '@lensshare/lib/publicationHelpers';
import React from 'react';
import { headers } from 'next/headers';
import getCollectModuleMetadata from '@lib/getCollect';
import getPublicationOGImages from '@lib/getPublication';
import defaultMetadata from 'src/defaultMetadata';
import logger from 'src/app/logger';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const headersList = headers();
  const agent = headersList.get('user-agent');
  logger.info(`OG request from ${agent} for Publication:${params.id}`);

  const { id } = params;
  const { data } = await apolloClient().query({
    query: PublicationDocument,
    variables: { request: { forId: id } }
  });

  if (!data.publication) {
    return defaultMetadata;
  }

  const publication = data.publication as AnyPublication;
  const targetPublication = isMirrorPublication(publication)
    ? publication.mirrorOn
    : publication;
  const { by: profile, metadata } = targetPublication;
  const filteredContent = getPublicationData(metadata)?.content || '';
  const filteredAttachments = getPublicationData(metadata)?.attachments || [];
  const filteredAsset = getPublicationData(metadata)?.asset;

  const assetIsImage = filteredAsset?.type === 'Image';
  const assetIsVideo = filteredAsset?.type === 'Video';
  const assetIsAudio = filteredAsset?.type === 'Audio';

  const getOGImages = () => {
    if (assetIsImage) {
      if (filteredAttachments.length > 0) {
        return filteredAttachments.map((attachment) => attachment.uri);
      }

      return [filteredAsset?.uri];
    }

    if (assetIsVideo) {
      if (filteredAttachments.length > 0) {
        return filteredAttachments.map((attachment) => attachment.uri);
      }

      return [filteredAsset?.cover];
    }

    if (assetIsAudio) {
      if (filteredAttachments.length > 0) {
        return filteredAttachments.map((attachment) => attachment.uri);
      }

      return [filteredAsset?.cover];
    }

    return [];
  };

  const title = `${targetPublication.__typename} by ${
    getProfile(profile).slugWithPrefix
  } • ${APP_NAME}`;

  return {
    description: filteredContent,
    metadataBase: new URL(`https://mycrumbs.xyz/posts/${targetPublication.id}`),
    openGraph: {
      images: getOGImages() as any,
      siteName: 'MyCrumbs',
      type: 'article'
    },
    title: title,
    twitter: { card: assetIsAudio ? 'summary' : 'summary_large_image' }
  };
}

export default function Page({ params }: Props) {
  return <div>{params.id}</div>;
}