# Pastor Matt — Guest Preaching Website

## Quick Start
```bash
npm run dev    # Start dev server at localhost:3000
npm run build  # Production build
```

## Tech Stack
- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind CSS 4** for styling
- **Hosted on Vercel** (auto-deploys on push to `main`)

## How to Update Content

**All site content lives in one file:** `src/content/site-content.ts`

To update anything, just tell Claude Code what you want to change:
- "Update my bio to mention my 10 years at Grace Church"
- "Change Sunday morning rate to $250"
- "Add a new testimonial from Pastor John at First Baptist"
- "Update my phone number to (555) 987-6543"
- "Add a new FAQ about my availability during holidays"

Claude Code will edit `src/content/site-content.ts` and the changes will appear across the whole site.

### Content sections in site-content.ts:
- **Personal info** — name, title, email, phone, location
- **Hero** — homepage headline and subtitle
- **About/Bio** — short bio, full bio paragraphs, philosophy, credentials
- **Services & Rates** — service offerings with descriptions and pricing
- **Sermon Topics** — list of preaching themes
- **Testimonials** — quotes from churches you've served
- **Scheduling** — Cal.com username and booking page text
- **FAQ** — frequently asked questions
- **Social links** — Facebook, Instagram, YouTube

## Adding a Photo
Drop your headshot image into `public/images/` (e.g., `matt-headshot.jpg`), then ask Claude Code to "add my photo to the about page."

## Scheduling Setup (Cal.com)
1. Create a free account at https://cal.com
2. Set up your availability and event types
3. Tell Claude Code your Cal.com username to connect it

## Project Structure
```
src/
  app/              # Pages (Home, About, Services, Schedule, Contact)
  components/       # Shared components (Header, Footer, SectionHeading)
  content/          # Editable content (site-content.ts)
public/
  images/           # Photos and images
```

## Color Palette
- Primary (navy): #1E3A5F
- Accent (gold): #B8860B
- Warm backgrounds and grays for a professional, church-friendly feel

## Deployment
Pushes to `main` auto-deploy via Vercel. After making changes:
```bash
git add -A && git commit -m "Update content" && git push
```
