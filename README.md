# mr_shedy

## KAPELKA: тестовий сайт (GitHub Pages)

Статичний сайт лежить у папці `docs/`:

- `index.html`: головна
- `vyvedennya-iz-zapoyu/`, `krapelnytsya-vid-pokhmillya/`, `narkoloh-dodomu/`: сторінки послуг
- `style.css`: спільні стилі

Як увімкнути: **Settings → Pages → Build and deployment → Deploy from a branch**, обрати гілку та папку `/docs`.
Адреса сайту: `https://mrantibiotik.github.io/mr_shedy/`.

Перед реальним запуском:
1. Замінити умовні дані: телефон `+380000000000`, посилання Telegram, `[адреса]`, `[ціна]`, `[час]`, номер ліцензії.
2. Прибрати `<meta name="robots" content="noindex, nofollow">` і тестовий банер на всіх сторінках, оновити `robots.txt`, додати `sitemap.xml` і canonical з реальним доменом.

Публікація змін на сайт: `scripts/deploy.sh` (оновлює версію стилів і гілку `gh-pages`).

Дослідження конкурентів і SEO-план: `research/kapelka-seo-research.md`.
