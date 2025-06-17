'use client';
import React, { useEffect, useRef } from 'react';
import { adSlots, AdSlotId } from '@/config/ads.config';

interface AdSlotProps {
  id: AdSlotId;
  className?: string;
  style?: React.CSSProperties;
}

export const AdSlot: React.FC<AdSlotProps> = ({ id, className = '', style }) => {
  const slot = adSlots[id];
  const ref = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV === 'development';

  useEffect(() => {
    if (!isDev && slot?.blockId && ref.current) {
      // Вставка кода Яндекс.Директа
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `
        (function(w, d, n, s, t) {
          w[n] = w[n] || [];
          w[n].push(function() {
            Ya.Context.AdvManager.render({
              blockId: '${slot.blockId}',
              renderTo: '${id}',
              async: true
            });
          });
          t = d.getElementsByTagName('script')[0];
          s = d.createElement('script');
          s.type = 'text/javascript'; s.async = true;
          s.src = 'https://yandex.ru/ads/system/context.js';
          t.parentNode.insertBefore(s, t);
        })(window, document, 'yandexContextAsyncCallbacks');
      `;
      ref.current.appendChild(script);
    }
  }, [isDev, slot, id]);

  if (!slot) return null;

  if (isDev) {
    // В dev-режиме показываем плашку с позицией
    return (
      <div
        className={`bg-yellow-100 border border-yellow-400 text-yellow-800 rounded p-4 my-4 text-center ${className}`}
        style={style}
      >
        <strong>AdSlot:</strong> {id} <br />
        <span className="text-xs">{slot.label} (blockId: {slot.blockId})</span>
      </div>
    );
  }

  return <div id={id} ref={ref} className={className} style={style} />;
}; 