# Brennan Butler — Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and git-backed markdown content.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

- **Projects:** `content/projects/*.mdx`
- **Writing:** `content/posts/*.mdx` (hidden — set `writingEnabled` to `true` in `src/lib/site-config.ts` to show)
- **Site copy:** `content/site/home.md`, `content/site/about.md`

Edit markdown files and refresh — no CMS required.

## Deploy

Deploy to [Vercel](https://vercel.com) and point `brennanbutler.com` DNS to the new project.

Analytics uses [@vercel/analytics](https://vercel.com/docs/analytics) — enable **Web Analytics** in the Vercel project dashboard after deploy; no env vars required.

```bash
npm run build
```

## Stack

- Next.js (App Router)
- Tailwind CSS 4
- gray-matter + remark for markdown
- next-themes for light/dark mode
