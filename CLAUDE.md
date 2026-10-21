# ServicePro site: standing instructions

## Image Intake SOP (run automatically, never wait to be asked)

**Trigger:** whenever the user references or drops a photo/image (repo root, `public/images`, Desktop path, "this photo", a filename) for use on the site. Do the full SOP below without prompting.

### 1. Inspect
- View the image (Read) so the name and alt text describe what's actually in it.
- Note original dimensions and file size (`sips -g pixelWidth -g pixelHeight`, `ls -l`).

### 2. Optimize for load speed
- Output **WebP** via `sharp` (installed in node_modules) or `cwebp` (`/opt/homebrew/bin/cwebp`). Keep SVG for vector logos. Use PNG only if WebP breaks needed transparency.
- Max widths, never upscale: hero/full-bleed **1920px**, content/card **1200px**, logos/icons **600px**.
- Quality ~80, auto-rotate from EXIF, strip metadata.
- Size targets: hero ≤ 250 KB, content ≤ 150 KB, logos ≤ 50 KB. Lower quality/size until met.
- Write scripts to the scratchpad directory, not the project.

### 3. Rename
- lowercase kebab-case, descriptive, keyword-relevant: `<subject>-<detail>-<context>.webp`
  (e.g. `reset-auto-detailing-bmw-foam-wash.webp`, `crm-fleet-pipeline-dashboard.webp`).
- Never keep camera IDs, spaces, `IMG_`, UUIDs, or "ChatGPT Image" names.

### 4. Place in the right folder (`public/images/`)
| Folder | Use |
|---|---|
| `clients/<client-slug>/` | client work, photos, and logos (Reset, Spotless, Shine Squad, …) |
| `team/` | founder and team photos |
| `services/` | industry/service photography (detailing, roofing, HVAC, …) |
| `software/` | CRM/app screenshots |
| `logos/` | ServicePro brand marks |
| `heroes/` | full-width hero/background images |
| `blog/` | blog article images |
| `misc/` | anything else |

Create a folder if none fits. No images in the repo root.

### 5. Wire it into the code (SEO + performance)
- Use `next/image` (`import Image from 'next/image'`), not raw `<img>`.
- **alt**: describe subject + context, include a natural keyword where it fits, ≤ 125 chars, no "image of/photo of". `alt=""` only for purely decorative images.
- Always set `width`/`height` (or `fill` with a sized parent) to prevent layout shift.
- Set `sizes` for responsive images. `priority` only on the above-the-fold/LCP image; everything else lazy.
- If it's a page share image, also set OG/Twitter image metadata (1200×630). If the page already has structured data, add `ImageObject`/`image` there.

### 6. Clean up originals
- Only after the optimized file exists, references are updated, and `npm run build` (or at least `npx tsc --noEmit`) passes: **move the original to `_originals/`** (gitignored, repo root). Never leave full-size originals in `public/` or the repo root. Never hard-delete.
- If a replaced image was already used elsewhere, update every reference (`grep -rn "old-name" src`).

### 7. Report (short)
New path, size before → after, alt text used, where it's used in code.

### 8. Ask only if
It's unclear which page/section the image belongs to, or the subject can't be identified.
