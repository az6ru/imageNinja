"use client";

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { PropsWithChildren } from 'react';

type RegionLiteral = 'us' | 'eu' | 'ap';

type FpjsClientProviderProps = PropsWithChildren<{
  apiKey: string;
  region?: RegionLiteral;
}>;

export function FpjsClientProvider({ children, apiKey, region = 'eu' }: FpjsClientProviderProps) {
  return (
    <FpjsProvider
      loadOptions={{
        apiKey,
        region,
      }}
    >
      {children}
    </FpjsProvider>
  );
}


