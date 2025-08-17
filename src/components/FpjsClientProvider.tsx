"use client";

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { PropsWithChildren } from 'react';

export function FpjsClientProvider({ children }: PropsWithChildren) {
  const apiKey = process.env.NEXT_PUBLIC_FPJS_API_KEY as string | undefined;
  const envRegion = process.env.NEXT_PUBLIC_FPJS_REGION as string | undefined;
  type RegionLiteral = 'us' | 'eu' | 'ap';
  const region: RegionLiteral = (envRegion === 'eu' || envRegion === 'us' || envRegion === 'ap')
    ? (envRegion as RegionLiteral)
    : 'eu';

  return (
    <FpjsProvider
      loadOptions={{
        apiKey: apiKey!,
        region,
      }}
    >
      {children}
    </FpjsProvider>
  );
}


