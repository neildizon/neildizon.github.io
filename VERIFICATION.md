# Verification — 3 October 2026

- Production build: passed (`npm run build`).
- Stronger navy-to-blue gradient with full-page graphing dots and the optimisation background: rebuilt successfully; desktop and phone previews checked, with no horizontal overflow on the phone layout. Caption and foreground illustrations removed.
- Content checks: passed (`npm run check`).
- Dependency installation: npm audit reported zero vulnerabilities at installation.
- Compared migrated citations against a browser extraction of the original site: all 26 records and 21 research URLs match after whitespace/punctuation normalisation.
- Compared teaching course lines, awards, and conference records: all 76 course entries, 2 awards, and 27 conference records match.
- Tested all four pages at widths of 390, 768, and 1280 pixels: no horizontal overflow; one primary heading per page.
- Mobile menu opens, closes after selecting a route, and dismisses with Escape, returning focus to the menu button.
- Teaching course histories expand correctly.
- The keyboard skip link has a visible focus outline, moves focus to the main content, and preserves the current route.
- Page changes update document titles and move focus to the main content.
- Direct research links load and refresh successfully at both the local root address and a simulated GitHub Pages `/neil-dizon-website/` address.
- Browser error log: no application errors during tested interactions.
- Dark theme text contrast checked mathematically: primary text, secondary text, and blue accents against the page and card surfaces all exceed 4.5:1.
- Blue link accents were brightened for the stronger gradient: against a conservative bright-blue background sample, secondary text is 4.98:1 and link accents are 5.08:1.

The initial GitHub deployment succeeded at https://neildizon.github.io/. External publisher/profile destinations were preserved from the original site; their content and uptime were not independently audited.

## CV update verification

- Read all seven supplied CV pages, including visual review of research, teaching and leadership tables.
- Build and content checks passed for the updated dataset.
- All five pages tested at 390, 768 and 1280 pixels: one primary heading each and no horizontal overflow.
- Mobile navigation reaches Leadership and closes after selection. UNSW course history expands correctly.
- No application errors or warnings during tested interactions.
- Preserved all 21 original research URLs and earlier complete teaching/conference histories. New conference records are merged, not substituted for the older complete list.
- Future session dates are explicitly marked Upcoming; Helsinki’s end date follows the CV.
