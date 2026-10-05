# Portfolio reference assets

Sources: [Felipe Parreiras’ portfolio](https://www.felipeparreiras.com/) and the public project/demo links presented there.

## Local files

- `resume/felipe-parreiras-resume.pdf` — the public résumé PDF linked by the source portfolio.
- `images/home-01.png` — original green monogram from the source site.
- `images/meurh360-10.png` — original MeuRH360 interface image downloaded from the public source.
- `crops/felipe-portrait.webp` — portrait crop from the clean public homepage capture.
- `logos/` — nine client/company logos captured from the homepage’s original proof row.
- `projects/` — local project previews and UI screenshots used by the portfolio cards and full case-study pages. Where the source image was shown against the source page’s dark background, the surrounding background was removed; product screenshots retain their actual interface backgrounds.
- `crops/` — additional source-page product crops retained from the first portfolio build.

`asset-manifest.json` records the internal source pages, 161 distinct Google Sites image URLs discovered in their markup, and the provenance of the local assets used in the new pages. Direct downloads from Google’s image CDN returned HTTP 403 for most source URLs. To avoid claiming blocked files were downloaded, the local gallery uses the images that could be downloaded or captured cleanly from the public pages and demos; the original source URLs remain listed in the manifest for future retrieval if the CDN permits it.

The local project images are crops or screenshots of actual source-page assets and interfaces, not newly generated illustrations. The images for Pathway and MarcaFlow were captured from the public demos linked by the portfolio. All new portfolio media is stored below `assets/`.
