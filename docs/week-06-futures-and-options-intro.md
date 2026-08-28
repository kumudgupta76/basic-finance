---
title: Week 6 · Futures & options intro
nav_order: 7
---

# Week 6 — Futures & Options: Introduction Only

**Time:** 2–3 hours
**Worksheet:** [`exercises/06-options-chain-observation.md`](../exercises/06-options-chain-observation.md)

---

> ## ⛔ Read this first
>
> The goal of this week is **vocabulary and comprehension only**. You should finish able to read a
> news headline about F&O and understand it — nothing more.
>
> **You will not trade derivatives during or after this week.** Not with small size. Not "just one
> lot to learn". Not paper-money-converted-to-real-money-later.
>
> SEBI's published studies of individual traders in the equity derivatives segment have repeatedly
> found that the **large majority of individual F&O traders make net losses**, with aggregate
> losses running into thousands of crores, and that losses are concentrated among the youngest and
> smallest participants. Read the actual SEBI study — link in the resources table below — rather
> than taking anyone's word for it.
>
> Derivatives are **leveraged instruments**. Leverage does not make you more likely to be right.
> It makes being wrong more expensive and faster.

---

## 1. Learning objectives

By the end of this week you should be able to:

1. Explain what a derivative is and why they exist (hedging, not gambling).
2. Explain a futures contract: expiry, lot size, margin, mark-to-market.
3. Explain a call and a put in one sentence each, from both buyer's and seller's side.
4. Read an option chain and identify strike, premium, ITM/ATM/OTM, OI.
5. Split a premium into **intrinsic value** and **time value**.
6. Describe, conceptually, what Delta, Theta, Vega, and Gamma measure.
7. Explain why the risk profile of an option **buyer** and **seller** are radically different.
8. Articulate, in your own words, why you are **not** trading these yet.

---

## 2. What is a derivative?

> **Derivative** → A contract whose value is *derived* from an underlying asset (a stock, an index,
> a commodity, a currency). → A Nifty futures contract derives its value from the Nifty 50 index.
> → It matters because derivatives let you take a position on price movement without owning the
> asset — which is powerful for hedging and dangerous for speculation.

**Why they legitimately exist:** a farmer locks in a crop price before harvest; an exporter hedges
rupee-dollar risk; a fund manager protects a ₹500 crore portfolio against a crash without selling
it. Every one of these is about **reducing** risk. Retail speculation is the opposite use case.

In India, equity derivatives trade on NSE and BSE and are regulated by SEBI. The main products are
**index futures & options** (Nifty, Bank Nifty, etc.) and **stock futures & options** on a
SEBI/exchange-approved list of eligible stocks.

---

## 3. Futures

> **Futures contract** → A standardised agreement to buy or sell an asset at a set price on a
> future date. → You buy one Nifty futures contract; you profit if Nifty rises above your entry and
> lose if it falls. → It matters because it's a **linear, symmetric, leveraged** exposure: gains and
> losses move one-for-one with the underlying, multiplied by the lot size.

### Key terms

> **Expiry** → The date the contract ceases to exist and is settled. → Indian index and stock
> derivatives expire on a fixed schedule (typically monthly, with weekly expiries for certain index
> options). **Expiry days and schedules have been changed by the exchanges/SEBI several times —
> check the current NSE contract specifications rather than relying on any article.**
> → It matters because unlike a share, a derivative has a **deadline**. Time is working against you.

> **Lot size** → The fixed quantity in one contract. You cannot buy a fraction of a lot.
> → It matters because it sets the **minimum ticket size**. SEBI has raised minimum contract values
> specifically to keep very small retail participants out of the segment. Check current lot sizes on
> NSE — they are revised periodically.

> **Contract value / notional** → Price × lot size. → It matters because this is your **real
> exposure**, and it's far bigger than the margin you paid. A common beginner error is thinking of
> the margin as the position size. It isn't.

> **Margin** → The collateral you post to hold the position. Comprises **SPAN margin** (based on
> risk modelling) plus **exposure margin**. → It matters because it creates the leverage: you
> control a large notional with a fraction of it in cash.

> **Mark-to-market (MTM)** → Profits and losses are settled in cash **daily**, not at expiry.
> → If your position loses ₹8,000 today, ₹8,000 leaves your account today. → It matters because
> you can be forced to add funds (**margin call**) or be **squared off** mid-trade even if your view
> would eventually have been right.

> **Rollover** → Closing a near-month contract and opening the next month's before expiry.
> → It matters because holding a view longer than one expiry requires an explicit action and cost.

> **Cash settlement vs physical settlement** → Index derivatives are **cash settled**. **Stock
> derivatives in India are physically settled** at expiry — meaning actual delivery obligations
> arise. → It matters enormously: retail traders have been caught with unexpected large delivery
> obligations by carrying stock F&O into expiry without understanding this.

**Futures risk profile:** symmetric and **unbounded in both directions**, amplified by leverage.
A futures position can lose more than the margin you deposited.

---

## 4. Options

An option is a **right, not an obligation** — for the buyer. For the seller it's an obligation.

> **Call option** → Gives the **buyer** the right to *buy* the underlying at a fixed price
> (the strike) before/at expiry. → You buy a 25,000-strike Nifty call; you benefit if Nifty rises
> meaningfully above 25,000 before expiry. → It matters because it's a bet on the price going **up**,
> with a **capped, known** maximum loss for the buyer.

> **Put option** → Gives the **buyer** the right to *sell* the underlying at the strike price.
> → It matters because it's a bet on the price going **down** — and it's also the standard way to
> **insure** a portfolio.

> **Strike price** → The fixed price at which the option can be exercised. → 25,000 for the example
> above. → It matters because it sets where the option starts having exercise value.

> **Premium** → The price the buyer pays the seller for the option. → ₹120 per unit × lot size.
> → It matters because for the **buyer**, the premium is the **entire maximum loss**. For the
> **seller**, the premium is the **entire maximum gain**.

### 4.1 Moneyness

> **ITM (In The Money)** → The option already has exercise value.
> Call: spot **above** strike. Put: spot **below** strike.
> **ATM (At The Money)** → Strike ≈ current spot.
> **OTM (Out of The Money)** → No exercise value yet.
> Call: spot **below** strike. Put: spot **above** strike.
> → It matters because it determines how much of the premium is real value vs pure hope.

| Nifty spot = 25,000 | 24,800 Call | 25,000 Call | 25,200 Call |
|---|---|---|---|
| Moneyness | **ITM** | **ATM** | **OTM** |

| Nifty spot = 25,000 | 24,800 Put | 25,000 Put | 25,200 Put |
|---|---|---|---|
| Moneyness | **OTM** | **ATM** | **ITM** |

### 4.2 Intrinsic value vs time value

```
Premium = Intrinsic value + Time value
```

> **Intrinsic value** → What the option would be worth if exercised right now.
> Call: max(Spot − Strike, 0). Put: max(Strike − Spot, 0). → It can never be negative.

> **Time value (extrinsic value)** → Everything else in the premium — payment for the *possibility*
> that it becomes more valuable before expiry. → It matters because time value **decays to zero at
> expiry, always**, and decay accelerates near expiry.

**Worked example:** Nifty spot 25,000. The 24,800 Call trades at ₹260.
- Intrinsic = 25,000 − 24,800 = **₹200**
- Time value = 260 − 200 = **₹60**

At expiry, if Nifty is still 25,000, that call is worth exactly ₹200 — the ₹60 of time value is gone.

**The critical consequence:** an **OTM option has zero intrinsic value — it is 100% time value.**
Cheap OTM options that look like lottery tickets are lottery tickets. If the underlying doesn't
move enough, in the right direction, *before expiry*, they expire worthless. **You can be right
about direction and still lose everything**, because you were wrong about magnitude or timing.

### 4.3 Buyer vs seller — the asymmetry

| | Option **buyer** | Option **seller (writer)** |
|---|---|---|
| Pays / receives | Pays premium | Receives premium |
| Maximum profit | Large (theoretically unlimited for a call) | Limited to the premium |
| Maximum loss | **Limited to the premium** | **Very large / theoretically unlimited** |
| Margin required | No (just the premium) | **Yes, substantial** |
| Time decay | Works **against** you | Works **for** you |
| Probability of profit per trade | Lower | Higher |
| Typical failure mode | Bleeding to zero via decay | One catastrophic day |

> **Why beginners misread this:** option **selling** wins often — small, frequent, satisfying
> gains — which is exactly what makes it dangerous. The loss distribution is skewed: many small
> wins and rare, enormous losses. A single gap move can exceed years of collected premium.
> Naked option selling is **not** a "safe income strategy" and is entirely unsuitable for a beginner.

### 4.4 Option Greeks — conceptual only

> **Greeks** → Numbers that measure how an option's price responds to changes in different factors.
> → It matters because an option's price moves for *four* reasons at once, not one — which is why
> people are surprised when the underlying moves their way and the option still loses value.

| Greek | Measures sensitivity to… | Plain meaning |
|---|---|---|
| **Delta** | Underlying price | How much the option price moves for a ₹1 move in the underlying. Call delta 0 → 1; put delta 0 → −1. ATM ≈ ±0.5. Also a rough proxy for probability of expiring ITM. |
| **Gamma** | Change in Delta | How fast delta itself changes. Highest for ATM options near expiry — which is why near-expiry positions behave violently. |
| **Theta** | Passage of time | Time decay per day. **Negative for buyers, positive for sellers.** Accelerates sharply into expiry. |
| **Vega** | Implied volatility | How much the premium changes when expected volatility changes. High before events, collapses after. |
| **Rho** | Interest rates | Minor for short-dated options. Ignore for now. |

> **Implied Volatility (IV)** → The market's expectation of future volatility, backed out of the
> option's price. → It matters because of **IV crush**: before a big event (results, budget,
> election), IV is high and options are expensive; right after the event, IV collapses. Traders
> routinely buy an option before an event, get the direction right, and still lose money because
> Vega loss exceeded Delta gain.

> **Open Interest (OI)** → The number of contracts currently outstanding. → It matters as a measure
> of participation at a strike. ⚠️ The popular "max OI = support/resistance" reasoning circulated on
> social media is a crude heuristic, not an established fact. Treat it with heavy scepticism.

### 4.5 The two legitimate beginner-relevant uses

Understand these conceptually; don't execute them.

1. **Protective put** — you own a portfolio and buy a put on the index. If the market crashes, the
   put gains and offsets some of your losses. This is literally insurance: you pay a premium, and
   if nothing bad happens, the premium is gone. That's how insurance works.
2. **Covered call** — you own shares and sell a call against them for income, capping your upside.

Everything else — straddles, strangles, iron condors, ratio spreads, calendars — is out of scope
and will remain out of scope for a long time.

---

## 5. Study plan (2–3 hours)

| Order | Resource | Time | Why |
|---|---|---|---|
| 1 | **SEBI — studies/advisories on individual traders in the equity derivatives segment** — https://www.sebi.gov.in/ (search "analysis of profit and loss of individual traders in equity F&O") and https://investor.sebi.gov.in/ | 25 min | **Read this first, not last.** Regulator-published data on actual retail outcomes in F&O. It reframes everything that follows. |
| 2 | **Zerodha Varsity — Module 4: Futures Trading**, chapters 1–6 — https://zerodha.com/varsity/module/futures-trading/ | 45 min | Contract basics, leverage, margins, M2M, settlement — in Indian market terms. Read for understanding, skip the strategy chapters. |
| 3 | **Zerodha Varsity — Module 5: Options Theory for Professional Trading**, chapters 1–10 — https://zerodha.com/varsity/module/option-theory/ | 60 min | Calls, puts, buyer/seller payoffs, moneyness, intrinsic vs time value, and a genuinely good introduction to the Greeks. **Stop after the Greeks. Do not proceed to Module 6 (strategies) yet.** |
| 4 | **NSE — Option Chain (Nifty)** — https://www.nseindia.com/option-chain | 25 min | The live, official option chain. Use it for the exercise below. |
| 5 | **NSE — F&O contract specifications, lot sizes, expiry calendar** — https://www.nseindia.com/products-services/equity-derivatives | 15 min | Primary source for lot sizes and expiry rules, both of which change. |
| 6 | **NSE — India VIX** — https://www.nseindia.com/ | 10 min | Connect the VIX number to the IV concept. |
| 7 | Optional: **Zerodha F&O margin calculator** — https://zerodha.com/margin-calculator/SPAN/ | 10 min | See how much margin a single lot actually requires. The number is usually a useful shock. |

**Books (only if genuinely curious — not required):**
- *Options, Futures, and Other Derivatives* — John Hull — the academic standard. Heavy maths.
- *Option Volatility and Pricing* — Sheldon Natenberg — the practitioner's reference.
Both are far beyond this stage. Bookmark them for year two.

❌ **Avoid entirely:** "option selling for monthly income" courses, expiry-day strategy sellers,
Telegram/WhatsApp option calls, anyone showing screenshots of profits, and any "₹X to ₹Y in N days"
content. This niche is the most heavily monetised and least honest corner of Indian finance content.

---

## 6. Practical exercise — observation only

Worksheet: [`exercises/06-options-chain-observation.md`](../exercises/06-options-chain-observation.md)

### A. Read the option chain (30 min)
Open the NSE Nifty option chain. Record the current Nifty spot, then note:
1. The **ATM strike**.
2. For three call strikes (one ITM, one ATM, one OTM): the **premium**, the **OI**, and the **IV**.
3. Do the same for three put strikes.
4. For each of the six, compute **intrinsic value** and **time value** by hand.
5. Note which ones are **100% time value**.

### B. Payoff maths by hand (25 min)
Assume a Nifty 25,000 Call bought at a premium of ₹150, lot size **L** (use the current NSE lot size).
Compute total P&L at expiry if Nifty closes at: 24,500 / 25,000 / 25,150 / 25,400 / 26,000.
- What is the **break-even** level? (Strike + premium)
- What is the **maximum loss** and at which levels does it occur?
- Now compute the same table from the **seller's** side. Notice it's the exact mirror image.
- Sketch both payoff diagrams on paper.

### C. The decay observation (20 min, spread over the week)
Pick one **OTM** Nifty option. Record its premium at the same time on three different days without
touching it. Also record the Nifty level each day. Answer: *did the premium fall even on a day when
Nifty was flat?* That's **Theta**, observed rather than read about.

### D. The leverage reality check (15 min)
Using the NSE lot size and the margin calculator:
- What is the **notional contract value** of one Nifty futures lot?
- What **margin** is required?
- What is the effective **leverage** (notional ÷ margin)?
- If Nifty moves against you by 2%, what % of your margin is gone?

Write the answer to the last question in bold in your notes.

### E. Write your own warning (10 min)
In 100 words, explain to a friend why you are **not** trading F&O. Use the SEBI data, the leverage
number from exercise D, and the time-decay observation from exercise C. If you can't write this
convincingly, re-read the module.

⚠️ **Observation only. Place no orders. Not even one lot.**

---

## 7. Checkpoint quiz

1. Nifty is at 25,000. Is the 25,300 Call ITM, ATM, or OTM?
2. Nifty spot 25,000; the 24,700 Put trades at ₹85. Intrinsic and time value?
3. You buy a call. What is your maximum possible loss?
4. You *sell* a naked call. What is your maximum possible loss?
5. You buy an OTM call. Nifty rises slightly but stays below your strike until expiry. What is your option worth?
6. Which Greek explains an option losing value on a day the underlying didn't move?
7. Why can you buy a call before a results announcement, be right about the direction, and still lose money?
8. Are Indian **stock** options cash settled or physically settled at expiry?
9. You have ₹1,00,000 margin controlling ₹8,00,000 notional. The underlying falls 3%. What happened to your capital?

<details>
<summary>Answers</summary>

1. **OTM** — for a call, spot below strike means no exercise value.
2. Intrinsic = max(24,700 − 25,000, 0) = **₹0** (it's OTM). Time value = **₹85** — the entire premium.
3. **The premium paid.** That's the defining feature of buying options.
4. **Theoretically unlimited**, because the underlying can rise without bound. Plus margin calls along the way.
5. **Zero.** OTM at expiry = worthless. You lose 100% of the premium despite being directionally right.
6. **Theta** — time decay.
7. **IV crush (Vega).** Elevated pre-event implied volatility collapses after the event; the Vega loss can exceed the Delta gain.
8. **Physically settled.** Index derivatives are cash settled. This distinction has caused real, expensive surprises for retail traders.
9. Leverage is 8×. A 3% adverse move on ₹8,00,000 = ₹24,000 loss = **24% of your capital**, gone on a 3% market move — and it's debited via daily MTM.

</details>

---

## 8. Terminology to remember

`derivative` · `underlying` · `futures contract` · `expiry` · `lot size` · `contract value /
notional` · `SPAN margin` · `exposure margin` · `mark-to-market (MTM)` · `margin call` ·
`square-off` · `rollover` · `cash settlement` · `physical settlement` · `basis` ·
`option` · `call` · `put` · `strike price` · `premium` · `option buyer` · `option writer/seller` ·
`ITM` · `ATM` · `OTM` · `moneyness` · `intrinsic value` · `time value / extrinsic value` ·
`break-even` · `payoff diagram` · `Delta` · `Gamma` · `Theta` · `Vega` · `Rho` ·
`implied volatility` · `IV crush` · `India VIX` · `open interest` · `option chain` ·
`protective put` · `covered call` · `naked selling`

---

## 9. What you should NOT worry about — and should NOT do

**Do not:**
- Trade futures or options. At all. Not one lot.
- Sell options ("writing") under any circumstances at this stage.
- Trade on expiry day. It is the highest-gamma, highest-noise environment in the market.
- Use any broker leverage or MTF.
- Follow F&O "calls" from anyone.

**Don't worry about yet:**
- Multi-leg strategies: straddle, strangle, iron condor, butterfly, calendar, ratio spreads.
- Black-Scholes maths, volatility surfaces, skew, put-call parity.
- Delta-neutral or gamma-scalping approaches.
- Commodity (MCX) and currency derivatives.
- Algorithmic execution and expiry-day systems.

---

**Previous:** [← Week 5](week-05-risk-management-psychology.md) · **Next:** [Concepts checklist →](concepts-checklist.md) · [Final assessment →](final-assessment.md)
