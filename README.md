# Indian Stock Market — 6-Week Beginner Roadmap

A structured, self-paced learning path for someone starting with **zero knowledge** of the Indian stock market.
Designed for **2–3 hours every weekend** over **6 weeks**.

> **Goal:** build a strong foundation — not to make quick money.

---

## ⚠️ Disclaimer

This repository is **educational material only**. It is **not** investment advice, not a
recommendation to buy or sell any security, and makes **no promise of returns**.
No specific stock is recommended anywhere in this repo.
**Do not invest real money during these 6 weeks.** See [DISCLAIMER.md](DISCLAIMER.md).

---

## How to use this repo

1. Read the week's document at the start of your weekend session.
2. Study the linked resources (all free unless marked otherwise).
3. Do the **practical exercise** — this is the part that actually makes it stick.
4. Take the **checkpoint quiz** at the end of the week.
5. Log everything in [`exercises/`](exercises/) worksheets.

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
| [Nifty 50 exploration](exercises/01-nifty50-exploration.md) | Week 1 |
| [Compounding & SIP calculations](exercises/02-compounding-and-sip.md) | Week 2 |
| [Company comparison & ratios](exercises/03-company-comparison.md) | Week 3 |
| [Chart reading log](exercises/04-chart-reading-log.md) | Week 4 |
| [Position sizing & trade journal](exercises/05-position-sizing-and-journal.md) | Week 5 |
| [Options chain observation](exercises/06-options-chain-observation.md) | Week 6 |
| [Mock portfolio tracker](exercises/mock-portfolio.md) | Weeks 2–6 |

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
├── index.md                     # site home page (GitHub Pages)
├── DISCLAIMER.md
├── initial-plan.md              # the original brief
├── _config.yml                  # Jekyll / just-the-docs config
├── Gemfile
├── .github/workflows/pages.yml  # GitHub Pages deployment
├── docs/
│   ├── week-01-stock-market-fundamentals.md
│   ├── week-02-investing-fundamentals.md
│   ├── week-03-fundamental-analysis.md
│   ├── week-04-trading-technical-analysis.md
│   ├── week-05-risk-management-psychology.md
│   ├── week-06-futures-and-options-intro.md
│   ├── concepts-checklist.md
│   ├── glossary.md
│   ├── final-assessment.md
│   ├── next-3-months-roadmap.md
│   ├── investing-vs-trading-vs-speculation.md
│   ├── common-mistakes.md
│   └── resources.md
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

The site is built with **Jekyll** + the **just-the-docs** theme (sidebar navigation and
client-side search) and deployed by a GitHub Actions workflow.

**This repo is already configured for:** `https://kumudgupta76.github.io/basic-finance/`

### One-time setup

1. **Enable Pages via Actions:**
   `Settings → Pages → Build and deployment → Source: **GitHub Actions**`
   Do *not* pick "Deploy from a branch" — the workflow handles it.

2. **Commit and push** to `master` (or `main` — the workflow triggers on both).
   The **Deploy site to GitHub Pages** workflow runs, and the live URL appears under
   `Settings → Pages` and in the workflow's `deploy` job summary.

That's it. Nothing else needs changing unless you rename or move the repository.

### If you move the repo

Update `url:` and `baseurl:` in [`_config.yml`](_config.yml):

| Repo type | URL | `url:` | `baseurl:` |
|---|---|---|---|
| Project site | `https://<user>.github.io/<repo>/` | `https://<user>.github.io` | `/<repo>` |
| User/org site (repo named `<user>.github.io`) | `https://<user>.github.io/` | `https://<user>.github.io` | `""` |

The workflow passes the correct `--baseurl` at build time regardless, so the deployed site works
either way; these values mainly affect local previews and absolute SEO/sitemap URLs.

### Local preview (optional)

Ruby is **not currently installed** on this machine, so local preview needs a one-time install
([RubyInstaller for Windows](https://rubyinstaller.org/), Ruby 3.x with the MSYS2 devkit).
This is optional — GitHub Actions builds the site regardless.

```powershell
bundle install
bundle exec jekyll serve --livereload
# → http://127.0.0.1:4000/basic-finance/
```

To preview at the root path instead:

```powershell
bundle exec jekyll serve --baseurl "" --livereload
```

### Notes

- Every published page needs YAML front matter (`title`, `nav_order`). Files without it are
  copied verbatim and won't render — `README.md` and `initial-plan.md` are deliberately excluded
  in `_config.yml`.
- `jekyll-relative-links` rewrites `[text](file.md)` links to their built URLs, so the same
  links work both in the GitHub repo view and on the published site.
- Sidebar order is controlled by `nav_order`; worksheets are nested under
  [`exercises/index.md`](exercises/index.md) via `parent: Worksheets`.
- The first workflow run takes a few minutes (it builds the gem cache); later runs are faster.

---

> Links to external sites were correct at the time of writing. Regulations (settlement cycles,
> margin rules, taxation) change — always confirm on the SEBI / NSE / BSE / AMFI / RBI site.
