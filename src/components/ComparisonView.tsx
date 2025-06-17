/**
 * @file: ComparisonView.tsx
 * @description: Сравнение оригинального и оптимизированного изображения
 * @dependencies: React
 * @created: 2024-06-06
 */

import * as React from 'react';
import Image from 'next/image';

interface ComparisonViewProps {
  originalImage: string;
  optimizedImage: string;
}

export function ComparisonView({ originalImage, optimizedImage }: ComparisonViewProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="relative">
        <h3 className="text-lg font-medium mb-2">Оригинал</h3>
        <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
          <Image
            src={originalImage}
            alt="Оригинальное изображение"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative">
        <h3 className="text-lg font-medium mb-2">Оптимизировано</h3>
        <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
          <Image
            src={optimizedImage}
            alt="Оптимизированное изображение"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
} 