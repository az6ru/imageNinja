import Head from 'next/head';
import React from 'react';

interface HeadScriptProps {
  children?: React.ReactNode;
  src?: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
}

export const HeadScript: React.FC<HeadScriptProps> = ({ children, src, id, async = true, defer = false }) => {
  if (src) {
    return (
      <Head>
        <script src={src} id={id} async={async} defer={defer} />
      </Head>
    );
  }
  if (children) {
    return (
      <Head>
        <script id={id} async={async} defer={defer} dangerouslySetInnerHTML={{ __html: String(children) }} />
      </Head>
    );
  }
  return null;
}; 