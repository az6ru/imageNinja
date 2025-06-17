/**
 * @file: pages.config.ts
 * @description: Конфиг для генерации страниц оптимизации изображений
 * @dependencies: используется в динамических страницах оптимизации
 * @created: 2024-06-05
 */

import pagesDataStatic from './pages.json';

export interface OptimizePageConfig {
  slug: string
  title: string
  description: string
  h1: string
  subtitle: string
  bullets: string[]
}

// Всегда возвращаем статический импорт
export async function getPages(): Promise<OptimizePageConfig[]> {
  return pagesDataStatic;
}

export const pages: OptimizePageConfig[] = pagesDataStatic; 