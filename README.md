# Portfolio

My static HTML, CSS, and JavaScript portfolio site.

**Live site:** https://teemcck.github.io/ (currently not active)

## Structure

- `index.html`: homepage and its About, Projects, Blog, and Resume tabs.
- `css/reset.css`: shared browser style reset.
- `css/home.css`: homepage styles.
- `css/blog.css`: shared article, contents navigation, and code highlighting styles.
- `js/home-nav.js`: homepage tab switching.
- `js/blog-nav.js`: reusable article contents navigation generated from section headings.
- `images/`: image assets, named with lowercase words separated by hyphens.

## Local Preview

Run `python3 -m http.server 8000` from this directory and open `http://localhost:8000`.

Fonts, KaTeX, and Prism load from external services.