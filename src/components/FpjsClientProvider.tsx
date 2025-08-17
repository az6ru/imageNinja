"use client";

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { PropsWithChildren } from 'react';

export function FpjsClientProvider({ children }: PropsWithChildren) {
  const apiKey = process.env.NEXT_PUBLIC_FPJS_API_KEY as string | undefined;
  const region = (process.env.NEXT_PUBLIC_FPJS_REGION as string | undefined) ?? 'eu';

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


