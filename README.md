# КАВИНКА

Сайт рыболовной базы «КАВИНКА» — Магаданская область, река Тауй.

Next.js 16 (App Router) + TypeScript + Tailwind CSS 4.

> **Начинаешь работу над проектом?** Читай [CLAUDE.md](CLAUDE.md) — там карта всего.

## Команды

```bash
npm run dev     # локальная разработка → http://localhost:3000
npm run build   # продакшен-сборка, ей же проверяются типы
npm run start   # запуск собранного билда
npm run lint    # ESLint
```

Если `npm install` падает с `EACCES` — см. [CLAUDE.md](CLAUDE.md#3-стек-и-команды).

## Структура

```
app/                  маршруты и страницы (App Router)
  layout.tsx          шрифты, метаданные, Header/Footer
  page.tsx            главная
  globals.css         дизайн-токены и импорт Tailwind
components/
  layout/             Header, Footer — общий каркас страниц
  sections/           крупные секции страниц
  ui/                 переиспользуемые примитивы
lib/
  site.ts             название, контакты, навигация — одна точка правды
  utils.ts            cn() для склейки классов Tailwind
types/                общие TypeScript-типы
content/              данные/контент отдельно от вёрстки
docs/                 документация проекта
public/photo/         фотографии, камуфляж, бейдж
public/video/         видео рыб
ref/                  референсы дизайна от заказчика
```

Импорты через алиас `@/` — например `@/components/ui/Button`.

## Документация

| Файл | О чём |
|---|---|
| [CLAUDE.md](CLAUDE.md) | Карта проекта, точка входа |
| [docs/STRUCTURE.md](docs/STRUCTURE.md) | Все страницы, секции и тексты |
| [docs/DESIGN.md](docs/DESIGN.md) | Палитра, типографика, принципы |
| [docs/MEDIA.md](docs/MEDIA.md) | Каталог фото и видео |
| [docs/DECISIONS.md](docs/DECISIONS.md) | Журнал решений |
