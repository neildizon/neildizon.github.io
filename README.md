# Neil D. Dizon — academic website

A custom React + MUI website with four pages, static mathematical SVG artwork, and GitHub Pages deployment. No Bootstrap, Sass, backend, or database.

## Run on your computer

Install Node.js 24 LTS from [nodejs.org](https://nodejs.org/). Open a terminal in this folder and run:

```powershell
npm ci
npm run dev
```

Open the local address printed in the terminal. To check the production version:

```powershell
npm run check
npm run build
npm run preview
```

## Make it live

Follow [GITHUB-PAGES.md](GITHUB-PAGES.md). The supplied workflow installs, checks, builds, and deploys the website whenever you push to `main`. No personal access token or deployment secret is needed.

## Customise content

Edit these files in your code editor:

| File | Content |
| --- | --- |
| `src/data/profile.js` | Name, current role, introduction, interests, contact, profile links |
| `src/data/research.js` | Publications, preprints, theses, and their links |
| `src/data/teaching.js` | Awards, teaching roles, duties, course histories |
| `src/data/conferences.js` | Talks, posters, attendance |

Copy an existing entry to add another. Put new research records first, keeping years descending. If you add or remove records, update the migration totals in `scripts/check-content.mjs` so deployment checks reflect your intended content.

## Customise appearance

- `src/theme.js`: palette, typography, spacing defaults, component styling.
- Typography pairs Georgia serif display headings with sans-serif body text and monospace section labels; all use local system fonts and need no external font download.
- `src/App.jsx`: page layout and MUI `sx` styles.
- `src/assets/optimisation-background.svg`: caption-free optimisation contours, positioned as a single subtle background behind the page content. The full-page graphing-dot grid and stronger navy-to-blue gradient live in `src/theme.js`, alongside the illustration's opacity, position, and responsive scale.
- `public/favicon.svg`: geometric site icon.
- `index.html`: site description and initial title.

All styling uses MUI and Emotion. Hash routing makes links such as `/#/research` work when opened directly on GitHub Pages. Relative build assets work with both a root address and a repository address.

## Content provenance

Migrated from https://sites.google.com/view/neildizon/ on 3 October 2026. Original Google Site remains untouched.

- Preserved 17 published/accepted records, 6 preprints, 3 theses, and all 21 supplied research URLs.
- Preserved 2 awards, 5 teaching roles, 29 teaching terms, and 76 course entries.
- Preserved 17 oral presentations, 2 poster presentations, and 8 attendance records.
- Used UNSW as the current affiliation, as confirmed by you.
- Helsinki is labelled with the documented 2023 teaching year and March 2022 position start. No employment end date is inferred.
- Removed a duplicated UP Manila line in the Newcastle teaching entry and the repeated institution line in the instructor entry; corrected “write solutios” to “wrote solutions”.
- Bibliographic metadata follows the original site, including its author initials, journal names, years, and under-review labels. It has not been independently re-verified against publishers.
- The homepage introduction is a concise restatement of the source research interests. No new credentials were added.
- The landscape banner and wavelet image gallery are replaced by decorative mathematical SVG artwork.

No PDF CV download is displayed. Add a PDF and download link later if desired.
