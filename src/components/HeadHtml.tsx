import Head from 'next/head';
import React from 'react';

interface HeadHtmlProps {
  scripts?: Array<{ src?: string; content?: string; id?: string; async?: boolean; defer?: boolean; type?: string }>;
  noscriptHtml?: string;
}

export const HeadHtml: React.FC<HeadHtmlProps> = ({ scripts = [], noscriptHtml }) => {
  if ((!scripts || scripts.length === 0) && !noscriptHtml) return null;
  return (
    <Head>
      {scripts.map((s, i) =>
        s.src ? (
          <script
            key={s.id || s.src || i}
            src={s.src}
            id={s.id}
            async={s.async ?? true}
            defer={s.defer}
            type={s.type}
          />
        ) : s.content ? (
          <script
            key={s.id || i}
            id={s.id}
            async={s.async ?? true}
            defer={s.defer}
            type={s.type}
            dangerouslySetInnerHTML={{ __html: s.content }}
          />
        ) : null
      )}
      {noscriptHtml && (
        <noscript dangerouslySetInnerHTML={{ __html: noscriptHtml }} />
      )}
    </Head>
  );
}; 