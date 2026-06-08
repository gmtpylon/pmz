# ПМЗ — корпоративный сайт

Next.js 16 (App Router, TS, React 19) + next-intl 4 (RU/EN). Полный перенос дизайн‑хэндофа из `_design-source/`.

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000 (RU по умолчанию, EN на /en)
npm run build      # продакшен
npm start          # запуск собранного билда
```

## Структура проекта

```
app/
  layout.tsx                  — корневой <html>/<body>, метаданные, JSON-LD Organization
  globals.css                 — все стили из дизайна + добавления для inner-страниц и формы
  sitemap.ts                  — sitemap.xml: главная + 34 inner + /news + /zayavka × 2 локали
  robots.ts                   — robots.txt
  [locale]/
    layout.tsx                — NextIntlClientProvider + TopStrip + Header + Footer
    page.tsx                  — главная: Hero + 10 секций
    [slug]/page.tsx           — generic renderer для 34 inner-страниц по реестру `lib/pages.ts`
    news/page.tsx             — лента новостей (статичная, 3 карточки)
    zayavka/
      page.tsx                — страница заявки
      actions.ts              — server action `submitLead` (валидация, honeypot, доставка)
    news/
      page.tsx                — лента из MDX-файлов
      [slug]/page.tsx         — статья новости
api/lead/route.ts             — REST endpoint POST /api/lead для интеграций (JSON или multipart)

content/news/
  ru/<slug>.md                — статьи на русском с frontmatter (date, tag, title, lead, img, minutes)
  en/<slug>.md                — английский перевод

components/
  TopStrip / Header / MobileMenu / Footer / LangSwitcher
  CookieBanner                — баннер согласия с localStorage (ФЗ-152)
  StructuredData              — JSON-LD Organization + BreadcrumbList
  LeadForm                    — клиентская форма с useActionState + валидацией
  SubPage                     — типовой рендерер inner-страниц (5 kinds секций)
  ThumbImg / icons
  home/
    Hero, HeroBlueprint       — hero + 350-строчный SVG-блюпринт буровой (МБГУ-200)
    Pushkin                   — локационный блок с фасадом
    History                   — хроника-тизер
    Directions                — 4 направления продукции с SVG-иллюстрациями (D-01…D-04)
    Projects                  — флагман Восточный + 6 объектов + «все объекты»
    BigNumbers                — 4 ключевых цифры
    Equipment                 — парк станков (6 карточек)
    QualityLeadership         — качество + руководство
    ServicesSection           — 6 услуг металлообработки
    News                      — 3 новости с переходом на /news
    CtaForm                   — контакты + встроенная LeadForm
    heroBlueprintSvg.ts       — sources SVG как const string
    svgs/                     — direction D01…D04 + pushkin facade SVGs

i18n/
  routing.ts                  — locales: ru / en, defaultLocale: ru
  navigation.ts               — Link / useRouter / usePathname с локалью
  request.ts                  — message loader

messages/
  ru.json                     — оригинальный контент
  en.json                     — машинный перевод с правильной отраслевой терминологией
                                (ground anchors, threaded bars, CFA augers, casing & tremie
                                 pipes, thermal-diffusion galvanizing, HF heat treatment,
                                 NAKS welding, mechanical testing)

lib/
  pages.ts                    — реестр slug → section + titleKey
  site.ts                     — константы организации (адрес, ОГРН, ИНН, телефон, гео)
  news.ts                     — gray-matter + marked для MDX-новостей
  leadTransport.ts            — доставка лидов (webhook / fallback console log)

proxy.ts                      — next-intl middleware (Next 16 переименовал из middleware.ts)
_design-source/               — оригинальный хэндоф (читать как референс)
```

## Что готово (фазы 1–6)

### Каркас
- Next.js 16 + TS + React 19, чистый билд
- next-intl 4 с RU/EN, переключатель сохраняет текущий путь
- Чистка дефолтов create-next-app
- Общие компоненты шапки/футера/мега‑навигации/мобильного меню
- Темплейтные компоненты для inner-страниц (`SubPage` с 5 видами секций: items, thumbs, text, grid, links)

### Контент
- **Главная**: полный перенос index.html — Hero с 350-строчным SVG-блюпринтом буровой,
  локация Пушкин, хроника, 4 направления с инженерными SVG, флагманские объекты,
  цифры завода, парк станков, качество + руководство, услуги, новости, форма
- **34 inner-страницы** с реальным контентом из дизайна — 9 продукции, 8 услуг,
  6 о компании, 8 отраслей + kontakty/karyera
- **/news**: лента новостей (статичные карточки, ждёт MDX-источник)
- **/zayavka**: страница заявки с полной формой

### Форма заявки
- Server Action `submitLead` с валидацией (имя, телефон/e-mail, сообщение ≥10 символов, согласие)
- Honeypot-поле `website` против ботов
- File-upload до 20 МБ (PDF/DWG/DXF/изображения)
- Клиентская валидация через `useActionState` + `useFormStatus`
- Успешное состояние с подтверждением

  > Сейчас action ЛОГИРУЕТ в server console и возвращает success.
  > Подключить реальный transport (SMTP / Postmark / CRM webhook) — после уточнения email.

### SEO
- Динамический `sitemap.xml` с `hreflang` для обеих локалей
- `robots.txt`
- JSON-LD `Organization` (с адресом, гео, ОГРН/ИНН)
- OpenGraph + Twitter Card в root layout
- Уникальные `<title>` и `description` на каждой странице

## Что осталось / следующие шаги

1. **Куда отправлять заявку** — нужен e‑mail / endpoint. Сейчас работает fallback: если `LEAD_WEBHOOK_URL` не задан, лиды логируются в server console. Подключение: задать `LEAD_WEBHOOK_URL` в env (Telegram bot, Make, n8n, amoCRM webhook). SMTP-вариант — отдельная задача (nodemailer + `LEAD_SMTP_*` переменные).
2. **Реальный домен и продакшен `SITE_URL`** — сейчас в `lib/site.ts` плейсхолдер `https://pmz.example`. Переменная: `NEXT_PUBLIC_SITE_URL`.
3. **Реальные фото**: вместо демо‑миниатюр с `pmzspb.ru` (уже скачаны в `public/img/factory/`) после получения студийных фото — заменить локальные WebP.
4. **Аналитика**: подключить Яндекс.Метрику + цель на форму. Готовое место — `app/layout.tsx`, после JSON‑LD. Cookie‑баннер уже есть и хранит consent в `localStorage` под ключом `pmz-cookie-consent` (значения `all` / `necessary`) — счётчик должен запускаться только при `all`.
5. **Деплой**: на Vercel/Cloudflare Pages работает «из коробки», для Node-сервера — `next start` + reverse proxy. `proxy.ts` (бывший middleware) обязателен для i18n.
6. **Тёмная тема**: оригинальный CSS-блок временно отключён (намеренно‑сломанный селектор в дизайне ломал Turbopack). Чтобы вернуть — переписать селектор как `:root[data-theme="dark"]`.
7. **EN-вычитка**: машинный перевод покрывает основной контент с отраслевой терминологией, но требует финальной вычитки носителем (особенно директора, проекты, юридические термины).
8. **News как полноценная CMS**: сейчас новости — MDX‑файлы в `content/news/<locale>/<slug>.md` с frontmatter. Для совместной работы редакторов — подключить headless‑CMS (Decap, Tina, Strapi) указывающую на тот же `content/news/`.

## i18n: рабочая модель

- **UI-строки** — namespace `nav.*`, `mega.*`, `topStrip.*`, `footer.*`, `site.*`, `form.*`
- **Главная** — namespace `home.<section>.*` (hero, pushkin, history, directions, projects, numbers, equipment, quality, services, news, cta)
- **Inner-страницы** — `pages.<slug>.*` со схемой `PageData` (см. `components/SubPage.tsx`)
- **Общая CTA** — `ctaCommon.*` (подставляется автоматически если у страницы нет своего)

## Известные особенности

- **`dangerouslySetInnerHTML`** используется в трёх местах:
  1. Hero SVG-блюпринт (350 строк inline SVG из дизайна — конверсия в JSX невыгодна)
  2. SVG-иллюстрации направлений (D-01…D-04) и фасад Пушкина — то же
  3. JSON-LD скрипт в layout (стандартный паттерн Next.js)
  Все источники контролируемые (наш handoff), пользовательского ввода нет.
- **Server actions защищены от raw POST** — прямой curl-POST в `/zayavka` вернёт 500. Это by design. Реальный submit через React работает.
- **75 строк CSS добавлены к 4068-строчному дизайн-styles.css** — для inner-page компонентов, card-grid и формы. Чтобы не размывать дизайн-источник, добавления собраны в конце `app/globals.css` с пометкой блока.

## Структура URL

```
/                  → главная (RU)
/en                → главная (EN)
/<slug>            → inner-страница RU (34 шт)
/en/<slug>         → inner-страница EN
/news              → новости
/zayavka           → заявка
/sitemap.xml       → карта сайта
/robots.txt        → robots
```

Все 34 inner-slug перечислены в `lib/pages.ts` — там же `section` (для breadcrumbs) и `titleKey` (для метаданных).
