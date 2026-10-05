# Felipe Parreiras — Product Designer

A responsive, static portfolio website in English, published from the root of this repository with GitHub Pages.

## Project structure

- `index.html` — portfolio home, selected work, approach, about, résumé and contact.
- `styles.css` — responsive editorial visual system, interaction states and reduced-motion support.
- `script.js` — project case notes, portfolio filters, theme switch, mobile navigation, reading progress and email-copy interaction.
- `assets/reference/` — résumé PDF and visual assets gathered from the public portfolio source; `asset-manifest.json` records the page and image-source inventory.
- `frontcore-design-system.html` — copy of the Design System page that was previously at the repository root, retained so that the earlier work is still accessible.
- `assets/` — original repository assets are kept, alongside the new reference assets.

## Local preview

Open `index.html` directly or serve this folder with any static HTTP server, for example:

```sh
python3 -m http.server 4173
```

## Deployment

The existing GitHub Pages site serves the repository root. Relative stylesheet, script and asset paths are used so the portfolio also works under the repository path.

## Source and content

Portfolio content, résumé details and available prototype links were gathered from [felipeparreiras.com](https://www.felipeparreiras.com/). The CV PDF is linked locally at `assets/reference/resume/felipe-parreiras-resume.pdf`. See `assets/reference/README.md` for asset provenance and download notes.
