# Felipe Parreiras — Product Designer

An English-language, static portfolio with an editorial **field-notes** direction: warm paper, dark ink, an ownable green signal and an asymmetric project index. It keeps the earlier custom typography, portrait-orbit motif, category focus controls and day/night interaction while applying the requested content changes without reproducing the source site's layout.

## Home experience

The cover combines Felipe’s name and title, full professional summary and portrait. A moving strip of original client marks sits nearby as a proof-of-work element. The work is arranged in vertical sections—**Highlights** (Flory, UX Analyzer, MeuRH360 and XippTech), **Solution and Innovations**, **Style Guide**, **Design & Prototypes**, **HTML & CSS**, and **AI Workflows**—with real project previews on every card. The focus chips only spotlight matching work; they do not hide or reorder the sections. Each card opens a full case-study page rather than a modal.

The experience also includes a persistent day/night switch, mobile navigation, reading progress, reduced-motion support, subtle pointer interaction and email copying. The résumé timeline, courses, postgraduate studies and languages remain available lower on the page, with explicit light text contrast in the dark résumé chapter.

## Files and assets

`index.html` is the portfolio home. `project.html`, `projects.js` and `project-page.js` power the project case studies and galleries. `styles.css` contains the responsive editorial system; `script.js` handles theme, focus filters, navigation and lightweight interactions. The original Design System page that was in the repository before the portfolio work remains at `frontcore-design-system.html`.

All locally used media is below `assets/reference/`: `logos/` contains client marks; `projects/` contains project thumbnails and case-study screenshots; `crops/` contains the portrait and earlier source-page crops; `resume/` contains the public résumé PDF. `asset-manifest.json` retains the source-page inventory, the 161 discovered source image URLs and provenance for the local assets. Direct downloads from Google’s image CDN returned HTTP 403 for most source URLs, so the case galleries use originals or clean captures from the public pages and demos where available.

## Local preview

```sh
python3 -m http.server 4173
```

Open `http://localhost:4173/`. The site is static and works from the repository path on GitHub Pages; there is no build step or external runtime dependency.
