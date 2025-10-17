# 🥷 ImageNinja

<div align="center">

**Современный веб-сервис для сжатия изображений без потери качества**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

[🌐 Демо](https://imageninja.ru) • [📖 Документация](https://imageninja.ru/faq) • [🐛 Сообщить об ошибке](https://github.com/az6ru/imageNinja/issues)

</div>

---

## ✨ Возможности

### 🚀 **Основной функционал**
- **Сжатие без потерь** — Оптимизация изображений с сохранением качества
- **Пакетная обработка** — Загрузка и обработка множества файлов одновременно
- **Множество форматов** — Поддержка JPEG, PNG, WebP, AVIF
- **Сохранение EXIF** — Метаданные остаются нетронутыми
- **Drag & Drop** — Интуитивный интерфейс загрузки файлов

### 🛠 **Технические возможности**
- **Режим реального времени** — Предпросмотр результатов обработки
- **Настраиваемые параметры** — Контроль качества сжатия
- **ZIP-архивы** — Автоматическая упаковка результатов
- **Адаптивный дизайн** — Работает на всех устройствах
- **PWA-готовность** — Возможность установки как приложение

### 🎯 **SEO и производительность**
- **SSR/SSG** — Оптимизация для поисковых систем
- **Мета-теги** — Полная поддержка Open Graph и Twitter Cards
- **Структурированные данные** — Улучшенная индексация
- **Core Web Vitals** — Высокие показатели производительности

---

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 20+ 
- npm или yarn

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/az6ru/imageNinja.git
cd imageNinja

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

### Docker

```bash
# Сборка образа
docker build -t imageninja .

# Запуск контейнера
docker run -p 3000:3000 imageninja
```

---

## 📁 Структура проекта

```
imageNinja/
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router страницы
│   ├── 📁 components/          # React компоненты
│   │   ├── 📁 ui/             # Базовые UI компоненты (Radix UI)
│   │   ├── ImageOptimizerApp.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── 📁 config/             # Конфигурационные файлы
│   ├── 📁 hooks/              # Пользовательские хуки
│   ├── 📁 lib/                # Утилиты и библиотеки
│   └── 📁 shared/             # Общие типы и схемы
├── 📁 public/                 # Статические файлы
├── 📁 docs/                   # Документация
├── 🐳 Dockerfile             # Docker конфигурация
├── ⚙️ vercel.json            # Vercel конфигурация
└── 📦 package.json           # Зависимости проекта
```

---

## 🛠 Технологический стек

### **Frontend**
- **[Next.js 15.3.3](https://nextjs.org/)** — React фреймворк с App Router
- **[React 19](https://reactjs.org/)** — UI библиотека
- **[TypeScript](https://www.typescriptlang.org/)** — Типизированный JavaScript
- **[Tailwind CSS 4.1.10](https://tailwindcss.com/)** — Utility-first CSS фреймворк

### **UI Компоненты**
- **[Radix UI](https://www.radix-ui.com/)** — Доступные компоненты
- **[Lucide React](https://lucide.dev/)** — Иконки
- **[Framer Motion](https://www.framer.com/motion/)** — Анимации
- **[React Hook Form](https://react-hook-form.com/)** — Управление формами

### **Утилиты**
- **[Sharp](https://sharp.pixelplumbing.com/)** — Обработка изображений
- **[JSZip](https://stuk.github.io/jszip/)** — Создание ZIP архивов
- **[React Dropzone](https://react-dropzone.js.org/)** — Drag & Drop загрузка
- **[Zod](https://zod.dev/)** — Валидация схем

### **Инструменты разработки**
- **[ESLint](https://eslint.org/)** — Линтинг кода
- **[PostCSS](https://postcss.org/)** — CSS обработка
- **[Drizzle ORM](https://orm.drizzle.team/)** — ORM (опционально)

---

## 📋 Доступные скрипты

```bash
npm run dev          # Запуск в режиме разработки
npm run build        # Сборка для продакшена
npm run start        # Запуск продакшен сборки
npm run lint         # Проверка кода линтером
```

---

## 🌐 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Настройки автоматически подтянутся из `vercel.json`
3. Деплой произойдет автоматически при пуше в main

### Docker

```bash
# Сборка образа
docker build -t imageninja .

# Запуск с переменными окружения
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  imageninja
```

### Другие платформы

Проект поддерживает деплой на:
- **Vercel** (рекомендуется)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

---

## 🎨 Кастомизация

### Настройка цветовой схемы

Измените цвета в `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Ваши цвета
        }
      }
    }
  }
}
```

### Добавление новых форматов

1. Обновите типы в `src/shared/schema.ts`
2. Добавьте обработку в `ImageOptimizerApp.tsx`
3. Обновите конфигурацию страниц

---

## 🤝 Участие в разработке

Мы приветствуем вклад в развитие проекта! 

### Как помочь:

1. **Fork** репозитория
2. Создайте **feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** изменения (`git commit -m 'Add amazing feature'`)
4. **Push** в branch (`git push origin feature/amazing-feature`)
5. Создайте **Pull Request**

### Стандарты кода:

- Используйте TypeScript для всех новых файлов
- Следуйте принципам SOLID, KISS, DRY
- Добавляйте JSDoc комментарии для новых функций
- Тестируйте изменения локально перед коммитом

---

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл [LICENSE](LICENSE) для подробностей.

---

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) — за отличный фреймворк
- [Radix UI](https://www.radix-ui.com/) — за доступные компоненты
- [Tailwind CSS](https://tailwindcss.com/) — за стильный CSS
- [Sharp](https://sharp.pixelplumbing.com/) — за быструю обработку изображений

---

## 📞 Контакты

- **Веб-сайт**: [imageninja.ru](https://imageninja.ru)
- **Email**: [ваш-email@example.com]
- **GitHub**: [@az6ru](https://github.com/az6ru)

---

<div align="center">

**Сделано с ❤️ для оптимизации изображений**

⭐ **Поставьте звезду, если проект вам понравился!**

</div>
