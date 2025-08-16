"use client";

/**
 * @file: yandex-rtb.ts
 * @description: Утилиты для работы с РСЯ (RTB): безопасный показ полноэкранной рекламы по событию
 * @dependencies: src/config/ads.config.ts
 * @created: 2025-08-16
 */

import { fullscreenAds } from "@/config/ads.config";

declare global {
  interface Window {
    yaContextCb?: Array<() => void>;
    yandexContextAsyncCallbacks?: Array<() => void>;
    Ya?: {
      Context?: {
        AdvManager?: {
          getPlatform?: () => string;
          render?: (options: {
            blockId: string;
            type?: string;
            platform?: string;
            onClose?: () => void;
            onError?: (err: { type: string; code?: string | number; text?: string }) => void;
          }) => void;
          destroy?: (options: { blockId: string }) => void;
        };
      };
    };
  }
}

type Platform = "desktop" | "touch";

function ensureRtbLoaderScript(): void {
  if (typeof window === "undefined") return;

  // Инициализируем очередь колбеков, если её нет
  window.yaContextCb = window.yaContextCb || [];
  window.yandexContextAsyncCallbacks = window.yandexContextAsyncCallbacks || [];

  // Проверяем, подключён ли уже загрузчик
  const exists = !!document.querySelector('script[src*="yandex.ru/ads/system/context.js"]');
  if (exists) return;

  const script = document.createElement("script");
  script.src = "https://yandex.ru/ads/system/context.js";
  script.async = true;
  document.head.appendChild(script);
}

function detectPlatform(): Platform {
  try {
    const yaPlatform = window.Ya?.Context?.AdvManager?.getPlatform?.();
    if (yaPlatform === "desktop" || yaPlatform === "touch") return yaPlatform;
  } catch {}
  // Фолбэк по ширине экрана
  return window.innerWidth <= 1024 ? "touch" : "desktop";
}

export interface TriggerFullscreenAdOptions {
  platform?: Platform;
  onClose?: () => void;
  onError?: (err: { type: string; code?: string | number; text?: string }) => void;
}

/**
 * Безопасно вызывает полноэкранный рекламный блок РСЯ.
 * Не бросает исключений и не блокирует основной поток.
 */
export function triggerFullscreenAd(options: TriggerFullscreenAdOptions = {}): void {
  if (typeof window === "undefined") return;

  ensureRtbLoaderScript();

  window.yaContextCb = window.yaContextCb || [];
  window.yandexContextAsyncCallbacks = window.yandexContextAsyncCallbacks || [];

  const platform: Platform = options.platform || detectPlatform();
  const blockId = platform === "desktop" ? fullscreenAds.desktop.blockId : fullscreenAds.touch.blockId;

  if (!blockId) {
    // Нет настроенного blockId — тихо выходим
    return;
  }

  const invoke = () => {
    try {
      const AdvManager = window.Ya?.Context?.AdvManager;
      if (!AdvManager?.render) return;
      AdvManager.render({
        blockId,
        type: "fullscreen",
        platform,
        onClose: options.onClose,
        onError: options.onError,
      });
    } catch {}
  };
  window.yaContextCb.push(invoke);
  window.yandexContextAsyncCallbacks.push(invoke);
}


