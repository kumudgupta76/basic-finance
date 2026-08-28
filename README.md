# Indian Stock Market — 6-Week Beginner Roadmap

A structured, self-paced learning path for someone starting with **zero knowledge** of the Indian stock market.
Designed for **2–3 hours every weekend** over **6 weeks**.

> **Goal:** build a strong foundation — not to make quick money.

📖 **Read it online: <https://kumudgupta76.github.io/basic-finance/>**

---


## How to use this repo

1. Read the week's document at the start of your weekend session.
2. Study the linked resources (all free unless marked otherwise).
3. Do the **practical exercise** — this is the part that actually makes it stick.
4. Take the **checkpoint quiz** at the end of the week.
5. Log everything in the [worksheets](docs/exercises/index.md).

Each new term is introduced in a fixed format:

> **Term** → Simple explanation → Example → Why it matters

---

## The 6-week roadmap

| Week | Theme | Time | Document |
|---|---|---|---|
| 1 | Stock Market Fundamentals | 2–3 h | [Week 1](docs/week-01-stock-market-fundamentals.md) |
| 2 | Investing Fundamentals | 2–3 h | [Week 2](docs/week-02-investing-fundamentals.md) |
| 3 | Fundamental Analysis | 3 h | [Week 3](docs/week-03-fundamental-analysis.md) |
| 4 | Trading & Technical Analysis | 3 h | [Week 4](docs/week-04-trading-technical-analysis.md) |
| 5 | Risk Management & Trading Psychology | 2–3 h | [Week 5](docs/week-05-risk-management-psychology.md) |
| 6 | Futures & Options — Introduction Only | 2–3 h | [Week 6](docs/week-06-futures-and-options-intro.md) |

## After the 6 weeks

| Document | What's inside |
|---|---|
| [Concepts checklist](docs/concepts-checklist.md) | Everything you should know by Week 6 |
| [Glossary](docs/glossary.md) | Beginner's A–Z of Indian market terms |
| [Final assessment](docs/final-assessment.md) | Practical test of your understanding |
| [Next 3 months](docs/next-3-months-roadmap.md) | Where to go after the foundation |
| [Investing vs Trading vs Speculation vs Gambling](docs/investing-vs-trading-vs-speculation.md) | The single most important distinction |
| [Common beginner mistakes](docs/common-mistakes.md) | What kills beginner portfolios |
| [Resource library](docs/resources.md) | Every link, categorised, with *why* it's useful |

## Worksheets

| Worksheet | Used in |
|---|---|
| [Nifty 50 exploration](docs/exercises/01-nifty50-exploration.md) | Week 1 |
| [Compounding & SIP calculations](docs/exercises/02-compounding-and-sip.md) | Week 2 |
| [Company comparison & ratios](docs/exercises/03-company-comparison.md) | Week 3 |
| [Chart reading log](docs/exercises/04-chart-reading-log.md) | Week 4 |
| [Position sizing & trade journal](docs/exercises/05-position-sizing-and-journal.md) | Week 5 |
| [Options chain observation](docs/exercises/06-options-chain-observation.md) | Week 6 |
| [Mock portfolio tracker](docs/exercises/mock-portfolio.md) | Weeks 2–6 |

---

## Ground rules for these 6 weeks

- ❌ No real money. Paper trading and mock portfolios only.
- ❌ No F&O trading. Week 6 is *vocabulary only*.
- ❌ No tips from Telegram / YouTube "calls" / WhatsApp groups.
- ✅ Verify every claim against a primary source (SEBI, NSE, BSE, AMFI, RBI, or the company's own filings).
- ✅ Writing things down beats watching more videos.

---

## Repository layout

```
.
├── README.md                    # this file (GitHub repo view)
├── mkdocs.yml                   # site config, theme and navigation
├── requirements.txt             # mkdocs + mkdocs-material
├── initial-plan.md              # the original brief
├── .github/workflows/pages.yml  # GitHub Pages deployment
└── docs/                        # everything published to the site
    ├── index.md                 # site home page
    ├── disclaimer.md
    ├── week-01-stock-market-fundamentals.md
    ├── week-02-investing-fundamentals.md
    ├── week-03-fundamental-analysis.md
    ├── week-04-trading-technical-analysis.md
    ├── week-05-risk-management-psychology.md
    ├── week-06-futures-and-options-intro.md
    ├── concepts-checklist.md
    ├── glossary.md
    ├── final-assessment.md
    ├── next-3-months-roadmap.md
    ├── investing-vs-trading-vs-speculation.md
    ├── common-mistakes.md
    ├── resources.md
    ├── stylesheets/extra.css
    └── exercises/
        ├── index.md
        ├── 01-nifty50-exploration.md
        ├── 02-compounding-and-sip.md
        ├── 03-company-comparison.md
        ├── 04-chart-reading-log.md
        ├── 05-position-sizing-and-journal.md
        ├── 06-options-chain-observation.md
        └── mock-portfolio.md
```

---

## Publishing with GitHub Pages

The site is built with **[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)** and
deployed by a GitHub Actions workflow. You get a dark/light toggle, top-level navigation tabs,
full-text search, card grids, and styled admonitions out of the box.

**Live at:** <https://kumudgupta76.github.io/basic-finance/>

### One-time setup

1. **Enable Pages via Actions:**
   `Settings → Pages → Build and deployment → Source: **GitHub Actions**`
   Do *not* pick "Deploy from a branch" — the workflow handles it.

2. **Push to `master`** (or `main` — the workflow triggers on both).
   The **Deploy site to GitHub Pages** workflow builds with `mkdocs build --strict` and deploys.

### If you move or rename the repo

Update `site_url`, `repo_url` and `repo_name` in [`mkdocs.yml`](mkdocs.yml). `site_url` determines
the base path, so it must match the published URL exactly.

### Local preview

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m mkdocs serve
# → http://127.0.0.1:8000/basic-finance/
```

`mkdocs serve` live-reloads on save. To check exactly what CI will do:

```powershell
.\.venv\Scripts\python.exe -m mkdocs build --strict
```

`--strict` turns warnings into errors, so broken internal links fail the build rather than
shipping silently.

### Notes

- **Navigation is defined in `mkdocs.yml`**, not in the pages. Adding a page means adding it to
  the `nav:` block — otherwise `--strict` will fail the build.
- Pages need no front matter; the `# H1` becomes the page title.
- Internal links are written as normal relative `.md` paths and resolved at build time, so they
  work in the GitHub repo view *and* on the published site.
- Custom styling lives in [`docs/stylesheets/extra.css`](docs/stylesheets/extra.css) — mainly a
  wider content column and readable tables, since these pages are table-heavy.
- `- [ ]` checklists render as **clickable** checkboxes, and
  [`docs/javascripts/checklist-persist.js`](docs/javascripts/checklist-persist.js) saves your ticks
  to `localStorage` so progress survives a reload. Progress is per-browser and per-page; it is not
  synced anywhere.
- MkDocs is pinned to `<2` in `requirements.txt`: MkDocs 2.0 removes the plugin and theming
  systems that Material depends on.

---

> Links to external sites were correct at the time of writing. Regulations (settlement cycles,
> margin rules, taxation) change — always confirm on the SEBI / NSE / BSE / AMFI / RBI site.
