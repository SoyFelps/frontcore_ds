# Felipe Parreiras — Product Designer

A responsive, static portfolio in English for GitHub Pages. The home page follows the original portfolio’s dark visual system and bright green identity, with the client logos and résumé summary near the top.

## Portfolio structure

The work remains separated into its original sections: **Highlights** (XippTech, MeuRH360, UX Analyzer and Flory), **Solution and Innovations**, **Style Guide**, **Design & Prototypes**, **HTML & CSS**, and **AI Workflows**. Every project is represented by a visual card and opens a full case-study page at `project.html?id=<project-id>`; no project details are hidden in a modal.

The portfolio includes all 18 projects, locally saved project images, a client-logo strip, a full résumé with experience, education and languages, and the original résumé PDF for download. It also includes an optional accessible light theme, a mobile menu, reading progress, reduced-motion support and email-copy interaction.

## Files

- `index.html` — complete portfolio home and static project-card markup.
- `project.html` — shared full-page case-study template; each project has its own URL query and content.
- `projects.js` — case-study copy, details, links, metadata and image galleries.
- `project-page.js` — renders the selected case study and previous/next navigation.
- `script.js` — theme, menu, reading-progress, reveal and contact interactions.
- `styles.css` — responsive visual system, dark/light contrast, focus states and reduced-motion styling.
- `assets/reference/logos/` — locally saved client logos.
- `assets/reference/projects/` — project previews and screenshots used by cards and case-study pages.
- `assets/reference/resume/` — résumé PDF.
- `assets/reference/asset-manifest.json` — source-site inventory and local-asset provenance.
- `frontcore-design-system.html` — preserved copy of the Design System page that was already in this repository.

## Preview locally

Serve the repository root with any static HTTP server:

```sh
python3 -m http.server 4173
```

Then open `http://localhost:4173/`. Relative asset and case-page links also work from the repository path on GitHub Pages.

## Source and asset notes

Copy and project links were gathered from [felipeparreiras.com](https://www.felipeparreiras.com/) and its linked public project demos. The original résumé PDF is available at `assets/reference/resume/felipe-parreiras-resume.pdf`. The source-site image inventory is preserved in `assets/reference/asset-manifest.json`; see `assets/reference/README.md` for the capture and download notes.
