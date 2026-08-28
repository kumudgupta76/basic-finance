---
title: Week 3 · Fundamental analysis
nav_order: 4
---

# Week 3 — Fundamental Analysis

**Time:** ~3 hours (the heaviest week — split it into two sittings if needed)
**Worksheet:** [Company comparison & ratios](../exercises/03-company-comparison.md)

---

## 1. Learning objectives

By the end of this week you should be able to:

1. Explain what each of the three financial statements tells you, and how they connect.
2. Read a P&L from top line to EPS and say what happened to the business.
3. Read a balance sheet and answer: *what does it own, what does it owe, what's left over?*
4. Explain why **cash flow** can differ from **profit**, and why that gap matters.
5. Calculate and interpret P/E, P/B, ROE, ROCE, D/E, and margins.
6. Compare two companies in the same sector using ratios rather than opinions.
7. Navigate an annual report and know which 6 sections to actually read.

---

## 2. The three statements

A business is described by three reports. They answer three different questions.

| Statement | Question it answers | Period type |
|---|---|---|
| **Profit & Loss (Income Statement)** | Did the business make money over the year? | A *period* (like a video) |
| **Balance Sheet** | What does it own and owe *right now*? | A *point in time* (like a photo) |
| **Cash Flow Statement** | Where did actual cash come from and go? | A *period* |

### 2.1 Profit & Loss statement

Reading order, top to bottom:

```
Revenue from operations        ← "top line" — what customers paid
− Cost of materials / services
= Gross profit
− Employee costs, other operating expenses
= EBITDA
− Depreciation & amortisation
= EBIT (Operating profit)
− Finance cost (interest)
+ Other income
= Profit before tax (PBT)
− Tax
= Profit after tax (PAT)      ← "bottom line" / net profit
÷ number of shares
= EPS
```

> **Revenue (top line)** → Total value of goods/services sold in the period. → A company sells
> ₹8,000 crore of products this year. → It matters because a business that can't grow revenue can
> only grow profit by cutting costs — and there's a floor to that.

> **EBITDA** → Earnings Before Interest, Tax, Depreciation and Amortisation — profit from core
> operations before financing and accounting charges. → It matters because it lets you compare the
> *operating* performance of two companies with different debt levels and asset ages.
> ⚠️ **EBITDA is not cash flow.** It ignores working capital, capex, interest, and tax — i.e. most
> of the things that actually consume cash. Be suspicious of companies that only talk about EBITDA.

> **EBIT / Operating profit** → EBITDA minus depreciation. → It matters because depreciation is a
> real economic cost — machines genuinely wear out and must be replaced.

> **Depreciation** → Spreading the cost of a long-lived asset over its useful life. → A ₹100 crore
> machine used for 10 years → ₹10 crore charged each year. → It matters because it's a
> **non-cash** expense: it reduces profit without reducing this year's cash.

> **Finance cost** → Interest paid on borrowings. → It matters because a company can be
> operationally excellent and still be destroyed by its interest burden.

> **Other income** → Income not from the core business (interest on deposits, asset sale gains).
> → It matters because profit propped up by one-off other income is not repeatable. Always check
> how much of PBT is "other income".

> **Net profit (PAT)** → What's left for shareholders after everything. → It matters because it
> feeds EPS, dividends, and retained earnings.

> **EPS (Earnings Per Share)** → PAT ÷ number of shares. → ₹500 cr PAT ÷ 10 cr shares = **₹50 EPS**.
> → It matters because it's per-share, so it's directly comparable to the per-share price.
> Watch for **dilution** — if share count grows, EPS falls even if profit is flat.

### 2.2 Balance sheet

The identity that must always hold:

```
Assets = Liabilities + Shareholders' Equity
```

| Side | Contains |
|---|---|
| **Assets** | Non-current: property, plant & equipment, intangibles, investments. Current: inventory, trade receivables, cash. |
| **Liabilities** | Non-current: long-term borrowings. Current: trade payables, short-term debt, provisions. |
| **Equity** | Share capital + reserves & surplus (mostly accumulated retained profits) |

> **Shareholders' equity / Net worth / Book value** → Assets minus liabilities — the shareholders'
> residual claim. → ₹1,200 cr assets − ₹700 cr liabilities = ₹500 cr net worth.
> → It matters because it's the accounting value of "what you own" as a shareholder.

> **Trade receivables (debtors)** → Money customers owe you for goods already delivered.
> → It matters because rapidly rising receivables *relative to revenue* is a classic warning sign:
> the company may be booking sales it isn't collecting.

> **Inventory** → Unsold goods and raw materials. → It matters because ballooning inventory
> suggests weakening demand or over-production.

> **Working capital** → Current assets − current liabilities: money tied up in day-to-day
> operations. → It matters because a growing business that consumes ever more working capital
> can be profitable on paper and still run out of cash.

> **Contingent liabilities** → Potential obligations that depend on a future event (tax disputes,
> guarantees, litigation). → Listed in the *notes*, not the balance sheet face. → It matters
> because a large contingent liability can dwarf the company's net worth. Beginners never read
> this. Read it.

### 2.3 Cash flow statement

Three sections:

| Section | What it shows | What you want to see |
|---|---|---|
| **CFO** — Operating | Cash generated by the core business | Consistently **positive** and tracking net profit |
| **CFI** — Investing | Capex, acquisitions, investment purchases/sales | Usually negative for a growing company (it's investing) |
| **CFF** — Financing | Borrowing, repayment, equity issuance, dividends | Depends on stage |

> **Cash Flow from Operations (CFO)** → Actual cash the business generated from operations.
> → It matters because **profit is an opinion; cash is a fact.** Profit depends on accounting
> judgements (revenue recognition, depreciation method, provisions). Cash in the bank does not.

**The single most useful fundamental check a beginner can do:**
> Compare **CFO to Net Profit** over 5–10 years. If a company reports rising profits while CFO
> stays flat or negative, ask hard questions. That divergence has preceded a large share of
> accounting blowups worldwide.

> **Free Cash Flow (FCF)** → CFO − capital expenditure. → The cash genuinely left over for
> shareholders and lenders. → It matters because that's the cash that funds dividends, buybacks,
> and debt reduction without new borrowing.

---

## 3. The ratios you actually need

Let all examples use a hypothetical **Company A**:
Price ₹800 · Shares 10 cr · PAT ₹500 cr · Net worth ₹2,000 cr · Revenue ₹5,000 cr · Debt ₹600 cr ·
EBIT ₹750 cr · Capital employed ₹2,600 cr.

### Valuation ratios — "am I paying a sensible price?"

> **P/E (Price to Earnings)** → Price ÷ EPS. → EPS = 500/10 = ₹50 → P/E = 800/50 = **16**.
> → Interpretation: you're paying ₹16 for every ₹1 of annual profit. → It matters because it's the
> quickest sanity check on expectations baked into the price.
>
> ⚠️ P/E is only meaningful **within the same industry**. An IT firm at 25x and a bank at 12x are
> not comparable. P/E is meaningless (negative or absurd) for loss-making companies, and cyclicals
> look "cheapest" (low P/E) at the *top* of their cycle when earnings peak.
>
> **TTM P/E** uses the last 12 months' earnings. **Forward P/E** uses estimates — which are guesses.

> **P/B (Price to Book)** → Market cap ÷ net worth. → (800 × 10) / 2,000 = 8,000/2,000 = **4.0**.
> → It matters most for **banks and financials**, where the balance sheet *is* the business, and
> least for asset-light companies whose value is people and brands (book value understates them).

> **Dividend yield** → Dividend per share ÷ price. → It matters as a floor of cash return, and as
> a hint about capital allocation policy.

### Quality/profitability ratios — "is this a good business?"

> **ROE (Return on Equity)** → PAT ÷ Shareholders' equity. → 500/2,000 = **25%**.
> → It matters because it tells you how efficiently the company turns *shareholders' money* into
> profit. Persistently high ROE (>15–18%) with low debt usually signals a genuine competitive edge.
>
> ⚠️ ROE can be inflated purely by **leverage**. A company can borrow heavily, shrink its equity
> base, and post a flattering ROE while becoming fragile. Always read ROE alongside D/E.

> **ROCE (Return on Capital Employed)** → EBIT ÷ (Equity + Debt). → 750/2,600 = **28.8%**.
> → It matters because it measures returns on *all* capital — debt and equity — so it isn't
> distorted by leverage. For most industrials, ROCE is the more honest quality metric.

> **Margins** →
> - Gross margin = Gross profit ÷ Revenue — pricing power / input cost position
> - Operating (EBIT) margin = EBIT ÷ Revenue → 750/5,000 = **15%** — operational efficiency
> - Net margin = PAT ÷ Revenue → 500/5,000 = **10%** — what actually reaches shareholders
> → It matters because the *trend* in margins over 5 years tells you whether the company's
> competitive position is strengthening or eroding. A single year tells you almost nothing.

### Solvency ratios — "can this company survive a bad year?"

> **Debt to Equity (D/E)** → Total debt ÷ Shareholders' equity. → 600/2,000 = **0.30**.
> → Rough guide for a non-financial company: <0.5 comfortable, 0.5–1.0 watch it, >1.0 needs a good
> explanation. → It matters because debt is what converts a downturn into insolvency.
> **Financial companies are excluded from this rule** — borrowing *is* their raw material.

> **Interest coverage** → EBIT ÷ Interest expense. → It matters because it answers, directly:
> "how many times over can this company pay its interest bill?" Below ~2–3x is uncomfortable.

### Growth

> **Revenue CAGR / Profit CAGR (5-year)** → How fast the business has actually compounded.
> → It matters because valuation is only justified by growth. Also check **consistency** — 5 steady
> years beats one explosive year and four flat ones.

> **PEG ratio** → P/E ÷ earnings growth rate. → P/E 30 with 30% growth → PEG 1.0. → A rough way to
> ask "is the high P/E justified by growth?" Treat as a crude heuristic, not a rule.

---

## 4. Reading an annual report (the 80/20)

Annual reports run 200–400 pages. As a beginner, read these six things, in this order:

1. **Chairman's / MD's letter** — the strategy and tone. Compare it with *last year's* letter: did
   they do what they said?
2. **Management Discussion & Analysis (MD&A)** — segment performance, industry outlook, risks.
3. **Consolidated financial statements** — always use **consolidated**, not standalone.
   Consolidated includes subsidiaries; standalone can hide problems in subsidiaries.
4. **Auditor's report** — look for a **qualified opinion**, "emphasis of matter", or **key audit
   matters**. A qualified opinion is a serious red flag.
5. **Notes to accounts** — especially **related-party transactions** and **contingent liabilities**.
6. **Shareholding pattern & promoter pledge** — a high **pledged promoter stake** is a well-known
   risk factor. Available on NSE/BSE quarterly.

**Where to get filings (free, primary sources):**
- NSE corporate filings — https://www.nseindia.com/companies-listing/corporate-filings-annual-reports
- BSE corporate filings — https://www.bseindia.com/corporates/ann.html
- The company's own "Investor Relations" page

---

## 5. Study plan (~3 hours)

| Order | Resource | Time | Why |
|---|---|---|---|
| 1 | **Zerodha Varsity — Module 3: Fundamental Analysis** — https://zerodha.com/varsity/module/fundamental-analysis/ | 90 min | Chapters 1–3 (intro, mindset, annual report), 4 (P&L), 5–6 (balance sheet), 7 (cash flow), 8 (financial ratio analysis parts I–III), 9–10 (equity research, DCF intro). Uses **real Indian company** statements — this is why it beats generic US material. |
| 2 | **Screener.in** — https://www.screener.in/ | 40 min | Free. Gives you 10-year P&L, balance sheet, cash flow, and pre-computed ratios for any Indian listed company in one screen. Your primary practice tool. |
| 3 | **NSE / BSE company filings** (links above) | 20 min | Open one real annual report PDF and locate the six sections listed above. |
| 4 | **SEBI — LODR / disclosure basics** — https://www.sebi.gov.in/ | 15 min | Understand *why* companies must disclose quarterly results and material events. |
| 5 | Optional: **Trendlyne** https://trendlyne.com/ · **Moneycontrol** https://www.moneycontrol.com/ | 15 min | Shareholding patterns, promoter pledge, results calendars. |

**Books (optional, real depth):**
- *The Interpretation of Financial Statements* — Benjamin Graham — short, timeless, ~120 pages.
- *Financial Shenanigans* — Howard Schilit — how accounting fraud actually looks. Sobering.
- *The Intelligent Investor* — Benjamin Graham — read Chapters 8 and 20 first, then the rest.
- *Diamonds in the Dust* — Saurabh Mukherjea — Indian-context quality screening.

---

## 6. Practical exercise — compare three companies

Worksheet: [Company comparison & ratios](../exercises/03-company-comparison.md)

Pick **two companies from the same sector** (e.g. two IT services firms, or two FMCG firms) and
**one from a different sector**. Use Screener.in.

**Step 1 — Build the table (40 min)**

| Metric | Co. A | Co. B | Co. C |
|---|---|---|---|
| Market cap | | | |
| Revenue (latest FY) | | | |
| Revenue 5-yr CAGR | | | |
| Net profit (latest FY) | | | |
| Profit 5-yr CAGR | | | |
| Operating margin (3-yr trend) | | | |
| Net margin | | | |
| EPS | | | |
| P/E (TTM) | | | |
| P/B | | | |
| ROE (3-yr avg) | | | |
| ROCE (3-yr avg) | | | |
| Debt/Equity | | | |
| Interest coverage | | | |
| Dividend yield | | | |
| CFO vs Net profit (5 yr) | | | |
| Promoter holding & pledge | | | |

**Step 2 — Calculate three ratios manually (15 min)**
Don't just copy Screener's numbers. For **one** company, pull the raw figures and compute
**P/E, ROE, and D/E by hand**. Confirm they match. This is the only way the formulas stick.

**Step 3 — Write the analysis (20 min)**
In 200 words, answer:
- Which of the two same-sector companies is the **higher quality business**, and on what evidence?
- Which is **more expensive**, and is the premium justified by growth or returns?
- Why can't you meaningfully compare Company C's P/E to the other two?
- What is the **one thing** that would make you walk away from each company?

**Step 4 — Red flag hunt (15 min)**
For any one company, check and note:
- Is CFO consistently below net profit?
- Are receivables growing faster than revenue?
- Is there a promoter pledge?
- Any auditor qualification or large contingent liability?

⚠️ You are practising *analysis*, not making a buy decision. Nothing here is a recommendation.

---

## 7. Checkpoint quiz

1. A company reports ₹300 cr net profit but CFO of −₹50 cr, three years running. What are you worried about?
2. Company X has ROE of 32% and D/E of 3.5. Is this a great business?
3. Why is P/B the preferred valuation metric for banks?
4. Depreciation reduces profit. Does it reduce cash this year?
5. A cyclical steel company trades at a P/E of 4. Is it cheap?
6. Consolidated or standalone statements — which do you use, and why?
7. Company Y's EPS fell 10% while net profit rose 5%. What most likely happened?
8. What does a "qualified opinion" from the auditor signal?

<details>
<summary>Answers</summary>

1. Profits aren't converting to cash. Possible aggressive revenue recognition, uncollected receivables, or inventory build-up. This is the classic accounting-fraud footprint.
2. Not necessarily — that ROE is heavily **leverage-driven**. Check **ROCE** and interest coverage; the company may be fragile.
3. A bank's assets and liabilities *are* its business, and they're financial (marked closer to fair value), so book value is economically meaningful. Earnings can also swing wildly on provisioning.
4. **No.** Depreciation is a non-cash charge; that's why it's added back in the cash flow statement.
5. Probably **not**. Cyclicals show their lowest P/E at peak earnings — which is often just before earnings collapse. Compare against mid-cycle earnings or use P/B.
6. **Consolidated** — it includes subsidiaries, joint ventures, and associates, so it reflects the whole group rather than just the parent shell.
7. **Share dilution** — the company issued more shares (QIP, ESOPs, conversion), so profit is spread over a bigger share count.
8. The auditor could not give a clean opinion — there is a material issue with the accounts. Treat it as a serious red flag until you fully understand it.

</details>

---

## 8. Terminology to remember

`P&L / income statement` · `balance sheet` · `cash flow statement` · `revenue / top line` ·
`gross profit` · `EBITDA` · `EBIT` · `depreciation` · `amortisation` · `finance cost` ·
`other income` · `PBT` · `PAT / net profit` · `EPS` · `dilution` · `assets` · `liabilities` ·
`shareholders' equity / net worth / book value` · `reserves & surplus` · `trade receivables` ·
`inventory` · `working capital` · `contingent liability` · `related-party transaction` ·
`CFO` · `CFI` · `CFF` · `free cash flow` · `capex` · `P/E` · `TTM` · `P/B` · `ROE` · `ROCE` ·
`operating margin` · `net margin` · `debt-to-equity` · `interest coverage` · `PEG` ·
`consolidated vs standalone` · `auditor's qualification` · `promoter pledge` · `MD&A`

---

## 9. What you should NOT worry about yet

- Building a full DCF model or terminal-value assumptions.
- Sector-specific metrics (NIM, GNPA, CASA for banks; ARPU for telecom; same-store sales for retail).
- Forensic accounting, Beneish M-score, Altman Z-score.
- Reading every one of the 300 pages of an annual report.
- Analyst price targets and broker research PDFs — read them later, once you can check their maths.
- Deciding whether to buy anything. Still no real money.

---

**Previous:** [← Week 2](week-02-investing-fundamentals.md) · **Next:** [Week 4 — Trading & Technical Analysis →](week-04-trading-technical-analysis.md)
