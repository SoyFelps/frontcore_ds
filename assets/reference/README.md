# Portfolio reference assets

Source: [felipeparreiras.com](https://www.felipeparreiras.com/) and its public project pages. These assets were gathered for the portfolio in this repository.

## Local files

- `resume/felipe-parreiras-resume.pdf` — public résumé PDF linked by the source portfolio.
- `images/home-01.png` — original lime monogram/logo fetched from Google Sites.
- `images/meurh360-10.png` — original MeuRH360 interface image fetched from Google Sites.
- `crops/felipe-portrait.webp` — portrait crop from the clean public homepage capture.
- `crops/xipptech-devices.webp` — original product image crop from the XippTech project page.
- `crops/frontcore-design-system.webp` — original Design System preview crop from the AI Workflows page.
- `crops/variansee-settings.webp` — original extension-controls crop from the Variansee page.

`asset-manifest.json` records all 21 internal pages and the 161 distinct Google Sites image URLs discovered in their markup. Google’s image host returned HTTP 403 for most direct image-download attempts from this environment, so the manifest preserves those original source URLs and marks the unavailable downloads. The portfolio uses local images that were downloadable or that could be captured cleanly from the public page; it does not silently claim the blocked files were downloaded. The other original project illustrations remain referenced in the source manifest for later retrieval if the CDN permits it.

Images in `crops/` are crops of the original public site captures, without added titles or annotations. Existing assets that predated this portfolio have been left in place. The former root Design System page is retained as `../../frontcore-design-system.html`.
