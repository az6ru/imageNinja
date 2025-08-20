## [2025-08-16] - Полноэкранная реклама при скачивании
### Добавлено
- Вызов полноэкранного блока РСЯ по клику на кнопки `Скачать` и `Скачать всё в ZIP` в `src/components/image-optimizer-app.tsx`.
- Утилита `src/lib/yandex-rtb.ts` для безопасного показа полноэкранной рекламы (`Ya.Context.AdvManager.render` с `type: "fullscreen"`).
- Конфиг `fullscreenAds` в `src/config/ads.config.ts`.

### Изменено
- В `src/config/ads.config.ts` настроен `fullscreenAds` на `R-A-15762893-3` (из кабинета). `faqInline` и `sidebar` временно отключены (без ID).
- Логика скачивания инициирует показ полноэкранного блока до начала загрузки (для ZIP) и одновременно с началом загрузки (для одиночных файлов).

### Исправлено
- N/A


## [2025-08-17] - Интеграция Fingerprint Pro React SDK
### Добавлено
- Зависимость `@fingerprintjs/fingerprintjs-pro-react`.
- Оборачивание приложения провайдером `FpjsProvider` в `src/app/layout.tsx` c `region: 'eu'` и ключом из `NEXT_PUBLIC_FPJS_API_KEY`.
- Тестовая страница `src/app/fingerprint-test/page.tsx` для проверки получения `visitorId` и полного ответа SDK.

### Изменено
- N/A

### Исправлено
- N/A


## [2025-01-27] - Замена Google Tag Manager на gtm.imageninja.ru
### Добавлено
- N/A

### Изменено
- Заменены URL-адреса Google Tag Manager с `www.googletagmanager.com` на `gtm.imageninja.ru` в компонентах:
  - `src/components/GoogleTagManagerHead.tsx` - скрипт gtm.js
  - `src/components/GoogleTagManagerBody.tsx` - noscript iframe ns.html
- ID веб-контейнера GTM остался прежним: `GTM-N7RPGWCC`

### Исправлено
- N/A

