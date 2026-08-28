---
title: Week 5 · Risk & psychology
nav_order: 6
---

# Week 5 — Risk Management & Trading Psychology

**Time:** 2–3 hours
**Worksheet:** [`exercises/05-position-sizing-and-journal.md`](../exercises/05-position-sizing-and-journal.md)

---

> This is the most important week in the roadmap. Weeks 3 and 4 taught you how to *find* ideas.
> This week decides whether you survive being wrong — which you will be, often, permanently, for
> as long as you participate in markets.
>
> **Amateurs ask "what should I buy?" Professionals ask "how much, and where do I get out?"**

---

## 1. Learning objectives

By the end of this week you should be able to:

1. Calculate position size from a fixed risk-per-trade rule.
2. Explain why drawdowns are mathematically asymmetric.
3. Explain how leverage magnifies both outcomes and why it changes survival odds.
4. Recognise FOMO, revenge trading, and overtrading in your *own* behaviour, in writing.
5. Write a personal trading/investing rulebook you can be held to.
6. Keep a journal that captures **process quality**, not just profit and loss.

---

## 2. Risk management

### 2.1 The one rule that matters most

> **Risk per trade** → The maximum % of your total capital you are willing to lose on a single
> position. → With ₹5,00,000 capital and a 1% rule, your maximum loss on any one trade is **₹5,000**.
> → It matters because it makes any *single* mistake survivable. You cannot control whether a trade
> works. You can control, exactly, how much it costs you when it doesn't.

Common conventions: **1% per trade** (standard), **0.5%** (conservative/beginner), **2%** (aggressive).
For a beginner: **0.5%–1%. Not more.**

### 2.2 Position sizing — the formula

```
Position size (shares) = (Capital × Risk %) ÷ (Entry price − Stop-loss price)
```

**Worked example**
- Capital: ₹5,00,000
- Risk per trade: 1% → **₹5,000**
- Entry: ₹500 · Stop loss: ₹480 → **risk per share = ₹20**
- Position size = 5,000 ÷ 20 = **250 shares**
- Capital deployed = 250 × ₹500 = **₹1,25,000** (25% of capital, but only 1% at risk)

**Note what just happened:** the stop loss *determined* the position size. Most beginners do it
backwards — they decide how many shares to buy, then invent a stop. That's how a "small trade"
turns into a 15% account loss.

**Second example — wider stop, same risk**
- Same capital and 1% rule → ₹5,000 risk
- Entry ₹500, stop ₹450 → risk per share ₹50
- Position size = 5,000 ÷ 50 = **100 shares**

Wider stop → smaller position. The rupee risk stays constant. That's the entire mechanism.

### 2.3 Drawdown and why losses are asymmetric

> **Drawdown** → The peak-to-trough fall in your capital. → Portfolio goes ₹10,00,000 → ₹7,00,000 =
> a **30% drawdown**. → It matters because the gain needed to recover is *always larger* than the
> loss that caused it.

| Loss | Gain needed to break even |
|---|---|
| −10% | +11% |
| −20% | +25% |
| −33% | +50% |
| **−50%** | **+100%** |
| −75% | +300% |
| −90% | +900% |

**This table is the entire argument for risk management.** Not losing big is mathematically more
valuable than winning big, because compounding is destroyed by deep holes.

`Recovery % = (1 ÷ (1 − loss)) − 1`

### 2.4 Volatility

> **Volatility** → How much and how fast prices swing. → A small-cap that moves ±6% a day is far
> more volatile than a large-cap moving ±1%. → It matters because for the same *rupee* risk, a
> volatile stock demands a **wider stop and therefore a smaller position**.

- **India VIX** — NSE's volatility index, a market-wide "fear gauge" derived from Nifty options.
  https://www.nseindia.com/ — rising VIX generally means the market expects bigger swings.
- Practical tool: **ATR (Average True Range)** — average daily range over N days. Many traders set
  stops at 1.5–2× ATR so that the stop sits outside normal noise.

### 2.5 Leverage and margin — read this twice

> **Leverage** → Controlling a larger position than your own money would allow, using borrowed
> funds or margin. → 5× leverage means ₹1,00,000 controls ₹5,00,000 of exposure. → It matters
> because it multiplies gains *and* losses identically, but only losses can end your participation.

With 5× leverage, a **20% adverse move wipes out 100% of your capital.**

> **Margin** → The collateral you must maintain with the broker against a leveraged position.
> → It matters because if the position moves against you, you get a **margin call** — deposit more
> or be **squared off** (force-closed), often at the worst possible moment, at the worst price.

**Where leverage shows up in India:**
- Intraday equity products (MIS and similar)
- Futures — leverage is built into the contract via margin
- Options *selling* — requires large margin and carries theoretically unlimited loss
- MTF (Margin Trading Facility) offered by brokers

SEBI has progressively tightened intraday leverage and introduced upfront margin and peak margin
rules specifically because retail leverage caused widespread losses. **Verify current margin rules
on the SEBI and NSE sites — this area changes frequently.**

**For a beginner: use zero leverage. None. For at least a year.**

### 2.6 Diversification, applied

- **Position limit:** cap any single stock at a % of the portfolio (commonly 5–10% for a beginner).
- **Sector limit:** cap any single sector (commonly ~25%). Four "different" stocks that are all
  private banks is one bet, not four.
- **Correlation:** holdings that move together provide no protection when it matters.
- **Total portfolio heat:** the sum of risk across all *open* positions. If you have 8 open trades
  each risking 1%, you're risking **8%** — a correlated market drop can hit all of them at once.
  Cap total heat (commonly 3–6%).

### 2.7 A concrete risk framework for a beginner

| Rule | Value |
|---|---|
| Risk per trade | ≤ 1% of capital |
| Total open risk (heat) | ≤ 5% of capital |
| Max single-stock weight | ≤ 10% of portfolio |
| Max single-sector weight | ≤ 25% of portfolio |
| Minimum risk/reward accepted | 1:2 |
| Leverage | 0× |
| Max trades per week | Set a hard cap (e.g. 3) |
| Emergency fund in place | Yes, before any of this |
| Money invested that you need within 3 years | ₹0 |

---

## 3. Trading psychology

Markets are one of the few fields where your **emotions are the primary source of losses**, not
your knowledge. These are the named failure modes.

### 3.1 FOMO (Fear Of Missing Out)

> **FOMO** → Entering a position because it's already moving and you can't bear to watch it go up
> without you. → A stock is up 18% in three days, it's all over your feed, you buy at the high.
> → It matters because FOMO makes you buy at the **worst possible price and with the widest possible
> stop** — the exact opposite of good risk/reward.

**Counter:** if it's not in your written plan, it's not a trade. A missed opportunity costs ₹0.

### 3.2 Revenge trading

> **Revenge trading** → Immediately taking a new, larger, unplanned position to "win back" a loss.
> → You lose ₹5,000, and 10 minutes later put on a ₹20,000-risk trade with no setup.
> → It matters because it converts a controlled 1% loss into an uncontrolled account event. It is
> the single most destructive behaviour in retail trading.

**Counter:** a hard rule — after two consecutive losses, **stop for the day**. After a −5% weekly
drawdown, stop for the week.

### 3.3 Overtrading

> **Overtrading** → Taking far more positions than your edge or your attention justifies, usually
> from boredom or a need to "do something". → 14 trades in a week when your plan allows 3.
> → It matters because costs scale with activity while edge does not. You can trade a profitable
> strategy into a loss purely through frequency.

**Counter:** cap trades per week. Being flat is a position.

### 3.4 Loss aversion and the disposition effect

> **Disposition effect** → Selling winners too early to book a small gain, and holding losers too
> long to avoid booking a loss. → You take +4% on a good trade and hold a −30% one "until it comes
> back". → It matters because it systematically inverts your R:R — small wins, huge losses — which
> guarantees long-run losses regardless of win rate.

**Counter:** stops and targets set *before* entry, and honoured mechanically.

### 3.5 Anchoring and sunk cost

> **Anchoring** → Fixating on an irrelevant reference price, usually your own purchase price.
> → "I'll sell when it gets back to ₹600" — but the market has no idea what you paid.
> → It matters because the only question is whether the position is worth holding *from today's
> price*, given today's information.

> **Sunk cost fallacy** → Adding to a losing position to "average down" purely because you're
> already in it. → It matters because averaging down without a fresh, independent thesis is
> doubling your bet on the thing that is currently proving you wrong.

### 3.6 Confirmation bias and overconfidence

> **Confirmation bias** → Seeking only information that agrees with the position you already hold.
> → It matters because it removes the possibility of updating. **Counter:** before entering, write
> the strongest argument *against* your own idea.

> **Overconfidence after a winning streak** → Attributing luck to skill and raising position size.
> → It matters because sizing up right before the mean reverts is how good months become terrible
> quarters. **Counter:** size is set by rules, not by mood or recent results.

### 3.7 The behavioural rule set

1. **Write the plan before the trade.** No plan, no trade.
2. **Never widen a stop.** Ever.
3. **Two consecutive losses → stop for the day.**
4. **No trading when tired, angry, or after bad personal news.**
5. **No trading based on a tip, a screenshot, or a Telegram/WhatsApp group.**
6. **Journal every trade — especially the ones you'd rather forget.**
7. **Judge yourself on process compliance, not on P&L.** A losing trade that followed the plan is
   a *good* trade. A winning trade that broke the rules is a *bad* trade that got lucky, and it
   will teach you the wrong lesson.

---

## 4. Study plan (2–3 hours)

| Order | Resource | Time | Why |
|---|---|---|---|
| 1 | **Zerodha Varsity — Module 9: Risk Management & Trading Psychology** — https://zerodha.com/varsity/module/risk-management/ | 75 min | Directly on-topic: risk types, position sizing, portfolio risk, value at risk, and trading psychology/biases, in Indian context. |
| 2 | **Zerodha Varsity — Module 12: Innerworth (Mind over Markets)** — https://zerodha.com/varsity/module/innerworth/ | 25 min | Short chapters on discipline, emotion, patience, and dealing with losses. Dip in rather than reading end to end. |
| 3 | **SEBI investor caution / F&O studies** — https://www.sebi.gov.in/ and https://investor.sebi.gov.in/ | 20 min | Read SEBI's published findings on individual traders' outcomes in the equity derivatives segment. This is the most valuable risk-management document you will read all year. |
| 4 | **NSE — India VIX** — https://www.nseindia.com/ | 10 min | See the actual volatility index and how it spikes during market stress. |
| 5 | Build your own **position-size calculator** in Excel/Google Sheets | 25 min | See exercise below. Making the tool teaches the formula better than reading it. |

**Books (this is where books genuinely earn their place):**
- *Trading in the Zone* — Mark Douglas — probability thinking and why certainty is the enemy.
- *The Psychology of Money* — Morgan Housel — broad, readable, applies to investing too.
- *Thinking, Fast and Slow* — Daniel Kahneman — the underlying science of these biases. Dense but foundational.
- *Fooled by Randomness* — Nassim Taleb — why you can't tell skill from luck in small samples.

---

## 5. Practical exercises

Worksheet: [`exercises/05-position-sizing-and-journal.md`](../exercises/05-position-sizing-and-journal.md)

### A. Build a position-size calculator (25 min)
In a spreadsheet, create inputs for: Capital, Risk %, Entry, Stop. Compute:
- Risk amount (₹)
- Risk per share (₹)
- **Position size (shares)**
- Capital deployed and its % of portfolio
- With a Target input: reward per share and **R:R**
- A flag that says **REJECT** if R:R < 2 or capital deployed > 10% of portfolio

### B. Size the Week 4 trades (20 min)
Take the three hypothetical trades from Week 4. Assume ₹5,00,000 capital and a 1% rule.
Compute position size for each. Note how the trade with the widest stop gets the smallest position.

### C. The drawdown table (10 min)
Build the loss/recovery table yourself in a spreadsheet using `(1/(1−L))−1` for losses from
5% to 90%. Look at the 50% row until it's uncomfortable.

### D. Leverage stress test (10 min)
Compute what happens to ₹1,00,000 of your own capital at 1×, 3×, and 5× leverage when the
underlying moves −5%, −10%, and −20%. Fill in a 3×3 grid. Write one sentence about what you see.

### E. Write your personal rulebook (30 min)
One page. Non-negotiable rules covering:
- Capital I am willing to put at risk (and confirmation it's not emergency/short-term money)
- Risk per trade, max heat, max position size, max sector weight
- Minimum R:R I will accept
- Maximum trades per week
- Circuit breakers: after N losses / X% drawdown, I stop
- Instruments I will NOT touch (for now: all F&O, all leverage, all penny stocks)
- What I will journal, and when I will review it

Date it. Sign it. Re-read it every weekend.

### F. Behaviour audit (15 min)
Answer honestly, in writing:
1. Have you ever bought something (a stock, crypto, anything) mainly because it was going up fast?
2. Have you ever refused to sell something at a loss because "it'll come back"?
3. How do you behave after losing money — do you withdraw, or double down?
4. Would you tell a friend the truth about your losses, or only your wins?

Your honest answers here predict your results more accurately than any indicator will.

---

## 6. Checkpoint quiz

1. Capital ₹4,00,000, risk 1%, entry ₹250, stop ₹238. What's your position size?
2. Your portfolio falls 40%. What gain do you need to get back to even?
3. You use 4× leverage. What adverse move wipes out your capital?
4. You have 7 open trades, each risking 1%. What is your real exposure in a correlated crash?
5. You lose two trades in a row and immediately want to triple your size on the third. What is this called, and what's the rule?
6. Trade A followed your plan and lost ₹5,000. Trade B broke your rules and made ₹12,000. Which was the better trade?
7. Why does a more volatile stock get a *smaller* position for the same risk budget?
8. You bought at ₹600, it's now ₹420, and you're waiting for ₹600 to sell. What bias is this?

<details>
<summary>Answers</summary>

1. Risk = ₹4,000. Risk/share = ₹12. Size = 4,000 ÷ 12 = **333 shares** (round down to 333).
2. (1/(1−0.40)) − 1 = **+66.7%**.
3. **25%** — a 25% adverse move on 4× leverage equals 100% of your capital.
4. Up to **7%** of capital, because in a correlated selloff stops can trigger together. Cap your total heat.
5. **Revenge trading.** Rule: stop for the day after two consecutive losses.
6. **Trade A.** It followed the process. Trade B was a rule violation that got lucky — and it will reinforce a habit that eventually costs far more than ₹12,000.
7. Volatility forces a **wider stop** so the stop isn't hit by ordinary noise. Wider stop ÷ same rupee risk = fewer shares.
8. **Anchoring** (with sunk-cost/disposition effect). The market does not know or care what you paid.

</details>

---

## 7. Terminology to remember

`risk per trade` · `position sizing` · `capital at risk` · `drawdown` · `maximum drawdown` ·
`recovery asymmetry` · `volatility` · `India VIX` · `ATR` · `leverage` · `margin` ·
`margin call` · `square-off` · `MTF` · `portfolio heat` · `correlation` · `position limit` ·
`sector limit` · `expectancy` · `win rate` · `FOMO` · `revenge trading` · `overtrading` ·
`disposition effect` · `loss aversion` · `anchoring` · `sunk cost fallacy` ·
`confirmation bias` · `overconfidence bias` · `recency bias` · `survivorship bias` ·
`process vs outcome` · `trading journal` · `circuit breaker rule`

---

## 8. What you should NOT worry about yet

- Kelly criterion, Value at Risk models, Monte Carlo simulation.
- Hedging with options or futures.
- Pyramiding, scaling in/out, trailing-stop optimisation.
- Portfolio beta, Sharpe/Sortino ratios.
- Building an automated system.
- Whether your rules are "optimal". Having rules at all is 90% of the benefit.

---

**Previous:** [← Week 4](week-04-trading-technical-analysis.md) · **Next:** [Week 6 — Futures & Options (Intro Only) →](week-06-futures-and-options-intro.md)
