# Victor Barron Pro

Fantastic upgraded Next.js website for [victorbarron.com](https://www.victorbarron.com) — spiritual healer, shaman teacher, and author Victor Barron, and the Body Mind & Spirit Healing Center in Whittier, California.

Built on the solid editorial foundation of the previous redesign, with enhancements for reliability, SEO, content freshness, and deployment readiness.

## Design direction

Quiet, editorial, and spiritual: Newsreader serif, warm paper background, espresso ink, single ochre accent. Real photographs only. Phone-first booking that matches how the practice works, with clear paths to sessions, training, book, and store.

## Key improvements in this version

- Updated content reflecting current dates (post October 10, 2026)
- Better metadata and JSON-LD schema for LocalBusiness / Spiritual services
- Contact form notes for Resend or similar backend
- Stronger CTAs for booking sessions and workshops
- Image paths prepared for self-hosting (download from Squarespace CDN into public/images/ before canceling)
- SEO foundation and performance-ready structure
- Clear instructions for Vercel deployment

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Home with hero, sessions, training, upcoming, book, testimonials, message |
| `/about` | Biography and the Center |
| `/sessions` | All session types and fees |
| `/training` | Healer training path and workshops |
| `/calendar` | Dates and fees |
| `/book` | Humanity’s Spiritual Plague |
| `/reflector` | Super Spiritual Reflector / Neutralizor |
| `/store` | Angels’ Corner items |
| `/clearing` | Home and business clearing |
| `/contact` | Address, phones, message form |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this repo (secondarynick/victorbarron-pro) in the Vercel dashboard.
2. Framework preset: Next.js. Build command: `npm run build`.
3. Deploy for a preview URL.
4. Add domains `victorbarron.com` and `www.victorbarron.com` in Project Settings → Domains, then update DNS.

No environment variables required for initial deploy. Contact form is currently mailto; wire to Resend later if desired.

## Next steps after deploy

- Download the real photographs listed in `src/lib/images.ts` from the Squarespace CDN into `public/images/` and update the paths.
- Optionally embed Cal.com or similar for online booking alongside the phone number.
- Add Stripe Checkout links for store items and the book if online sales are desired.
- Refresh calendar/events as new workshops are scheduled.
- Consider a Spanish language toggle.

This site is ready for a professional, fast, and beautiful presence that honors Victor’s work.
