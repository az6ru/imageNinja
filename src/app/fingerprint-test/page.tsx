"use client";

import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { useState } from 'react';

export default function FingerprintTestPage() {
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  const [refreshing, setRefreshing] = useState(false);

  const handleReload = async () => {
    try {
      setRefreshing(true);
      await getData({ ignoreCache: true });
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Fingerprint Test</h1>
      <div className="mb-4 text-xs text-gray-700">
        <p>
          Using API key: {(() => {
            const k = process.env.NEXT_PUBLIC_FPJS_API_KEY as string | undefined;
            if (!k) return '— (missing)';
            const head = k.slice(0, 6);
            const tail = k.slice(-4);
            return `${head}…${tail} (len ${k.length})`;
          })()} | region: {(process.env.NEXT_PUBLIC_FPJS_REGION as string | undefined) ?? 'eu'}
        </p>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={handleReload}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
          disabled={refreshing}
        >
          {refreshing ? 'Refreshing…' : 'Reload data'}
        </button>
        <span className="text-sm text-gray-600">
          VisitorId: {isLoading ? 'Loading…' : (data?.visitorId ?? '—')}
        </span>
      </div>
      <p className="mb-2">Full visitor data:</p>
      <pre className="text-xs bg-gray-100 p-3 rounded overflow-auto">
        {error ? error.message : JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}


