---
title: Week 4 · Technical analysis
nav_order: 5
---

# Week 4 — Trading & Technical Analysis

**Time:** ~3 hours
**Worksheet:** [Chart reading log](../exercises/04-chart-reading-log.md)

---

> **Read this before anything else.** Technical analysis is a framework for *managing decisions
> under uncertainty*, not a machine that predicts the future. Every pattern in this document fails
> regularly. What separates a trader from a gambler is not the pattern — it's the **stop loss,
> the position size, and the written rule**. If you finish this week excited about patterns and
> bored by risk management, you have learned the wrong half.

---

## 1. Learning objectives

By the end of this week you should be able to:

1. Articulate precisely how trading differs from investing in *goal, horizon, and edge*.
2. Read a candlestick and state its open, high, low, close.
3. Identify a trend, and mark support and resistance on a real chart.
4. Explain what volume adds to a price move.
5. Compute a simple moving average by hand and explain what it smooths.
6. Interpret RSI and MACD — including what they *don't* tell you.
7. Define a complete hypothetical trade: entry, stop loss, target, and risk/reward.

---

## 2. Investing vs trading

| | Investing | Trading |
|---|---|---|
| Underlying question | *Is this a good business at a fair price?* | *Is price likely to move my way in this window?* |
| Primary input | Financial statements, business quality | Price, volume, and market structure |
| Horizon | Years | Minutes to months |
| Number of decisions | Few | Many |
| Cost drag | Very low | High — brokerage, STT, exchange fees, GST, stamp duty, slippage |
| Time commitment | Hours per month | Hours per day |
| Where losses come from | Being wrong about the business | Being wrong about price *and* not cutting it |

**Trading style by holding period:**

| Style | Holding period | Reality check |
|---|---|---|
| **Intraday** | Positions squared off same day | Highest cost, highest stress, requires full attention. **Not for beginners.** |
| **Swing** | Days to a few weeks | Most realistic entry point for a working person |
| **Positional** | Weeks to months | Lower noise, fewer decisions, lower costs |
| **Scalping** | Seconds–minutes | Effectively competing with algorithms. Ignore this. |

> **Costs are the silent killer.** Every intraday round trip pays brokerage, STT, exchange
> transaction charges, GST, SEBI turnover fees, stamp duty, and **slippage** (the gap between the
> price you saw and the price you got). A strategy with a small statistical edge is easily wiped
> out by costs. Model your costs *before* you count profits.

---

## 3. Charts and candlesticks

### 3.1 OHLC

> **OHLC** → The four prices that summarise any time period: **Open, High, Low, Close**.
> → For a daily candle: opened ₹500, hit ₹512 high, ₹495 low, closed ₹508. → It matters because
> those four numbers compress an entire day of the buyer/seller battle into one glyph.

### 3.2 Reading a candlestick

```
        │  ← upper wick / shadow (the high)
      ┌─┴─┐
      │   │  ← body  (open ↔ close)
      │   │     green/white = close > open (buyers won)
      └─┬─┘     red/black  = close < open (sellers won)
        │  ← lower wick (the low)
```

- **Long body** → decisive move; one side clearly dominated.
- **Small body (doji)** → open ≈ close → indecision, balance between buyers and sellers.
- **Long lower wick** → sellers pushed price down but buyers pushed it back up → demand appeared.
- **Long upper wick** → buyers pushed up but sellers absorbed it → supply appeared.

**Three patterns worth knowing (and no more, for now):**

| Pattern | Shape | Common interpretation |
|---|---|---|
| **Doji** | Tiny body, wicks both sides | Indecision; often precedes a move, direction unknown |
| **Hammer** | Small body at top, long lower wick, after a downtrend | Sellers rejected; possible bottoming attempt |
| **Engulfing** | One candle's body fully covers the previous one's | Momentum shift in the direction of the engulfing candle |

⚠️ **Context beats pattern.** A hammer in the middle of a range means nothing. The same hammer at
a well-tested support level with high volume means considerably more. Never trade a pattern in
isolation.

### 3.3 Timeframes

> **Timeframe** → How much time each candle represents (1-min, 15-min, 1-hour, 1-day, 1-week).
> → It matters because signals conflict across timeframes: a stock can be in a daily downtrend and
> a weekly uptrend. Beginners should **start on the daily and weekly chart** — less noise, fewer
> decisions, cheaper mistakes.

---

## 4. Trend, support and resistance

### 4.1 Trend

> **Uptrend** → A sequence of **higher highs and higher lows**.
> **Downtrend** → **Lower highs and lower lows**.
> **Sideways / range** → No consistent direction; price oscillates between two boundaries.
> → It matters because most technical methods are *trend-following*, and they perform badly in
> ranges. Knowing which regime you're in is more valuable than any indicator.

**A trendline** connects successive lows (in an uptrend) or highs (in a downtrend). Two points
define a line; the **third touch** is what makes it interesting.

### 4.2 Support and resistance

> **Support** → A price zone where buying has repeatedly been strong enough to stop declines.
> → A stock bounced near ₹480 three times in six months. → It matters because it's a location
> where you can define risk cheaply — a stop just below it is a small, precise loss if you're wrong.

> **Resistance** → A price zone where selling has repeatedly stopped advances. → It matters for the
> same reason, in reverse.

**Key ideas:**
- Support and resistance are **zones, not exact prices**. Draw a band, not a hairline.
- **More touches = more significant**, but also more likely to eventually break.
- **Polarity / role reversal:** broken resistance often becomes support, and vice versa. Once a
  price level is decisively crossed, the people who were trapped there change behaviour.
- **Round numbers** (₹100, ₹500, ₹1,000) and **52-week highs/lows** act as psychological levels.

### 4.3 Breakouts

> **Breakout** → Price moving decisively beyond a support/resistance zone. → A stock ranging
> ₹480–₹520 for four months closes at ₹541 on 3× average volume. → It matters because breakouts
> mark a change in the supply/demand balance.

> **False breakout / whipsaw** → Price breaks out, then immediately reverses back into the range,
> trapping the people who chased it. → It matters because **false breakouts are extremely common**.
> This is precisely why a stop loss is non-negotiable.

Filters people use to reduce false breakouts (none are foolproof):
- Require a **close** beyond the level, not just an intraday poke.
- Require **above-average volume** on the breakout candle.
- Wait for a **retest** of the broken level before entering.

### 4.4 Volume

> **Volume** → Shares traded in the period. → It matters because it's the *conviction* behind the
> price move. Price is the what; volume is the how-much-do-they-mean-it.

Standard readings:

| Price | Volume | Common reading |
|---|---|---|
| Rising | Rising | Healthy uptrend, real participation |
| Rising | Falling | Weakening rally, fewer buyers at higher prices |
| Falling | Rising | Genuine distribution / panic selling |
| Falling | Falling | Drifting lower, possible exhaustion of sellers |

Always compare volume to its **own 20-day average**, not to another stock's volume.

---

## 5. Indicators

An **indicator** is just a formula applied to past price/volume. It is **derived from price** —
it cannot know anything price doesn't already contain. All indicators lag.

### 5.1 Moving averages

> **SMA (Simple Moving Average)** → Average closing price over the last N periods.
> → 5-day SMA of closes 100, 102, 101, 105, 107 → (100+102+101+105+107)/5 = **₹103**.
> → It matters because it strips out day-to-day noise and shows you the underlying direction.

> **EMA (Exponential Moving Average)** → Same idea, but recent prices get more weight → reacts faster.
> → It matters because it turns sooner than an SMA, at the cost of more false signals.

Common uses:
- **Direction filter:** price above the 200-DMA → treat as a long-term uptrend; below → downtrend.
  Many traders simply refuse to buy anything below its 200-DMA.
- **Dynamic support/resistance:** in strong trends, price often bounces off the 20- or 50-DMA.
- **Crossovers:** 50-DMA crossing above 200-DMA ("golden cross") / below ("death cross").
  ⚠️ Heavily lagging and widely over-hyped. Treat as context, not a signal.

⚠️ **Moving averages fail badly in sideways markets** — they produce a stream of losing whipsaws.

### 5.2 RSI

> **RSI (Relative Strength Index)** → A momentum oscillator between 0 and 100, measuring the
> magnitude of recent gains vs recent losses (default period 14). → RSI 78 = price has risen
> sharply and persistently. → It matters as a *speed gauge*: how stretched is this move?

Conventional levels: **above 70 = "overbought"**, **below 30 = "oversold"**.

⚠️ **The single most common beginner error with RSI:** treating overbought as "sell" and oversold
as "buy". In a strong trend, **RSI can stay above 70 for weeks** while price keeps climbing.
Shorting purely because RSI is 75 is a well-known way to lose money. RSI is most useful for:
- **Divergence** — price makes a higher high but RSI makes a lower high → momentum is fading.
- **Confirming trend strength** rather than calling turns.

### 5.3 MACD

> **MACD (Moving Average Convergence Divergence)** → The difference between the 12-EMA and 26-EMA
> (the MACD line), plotted with a 9-EMA of itself (the signal line), plus a histogram of the gap.
> → MACD line crossing above signal line = short-term momentum improving. → It matters because it
> summarises trend + momentum in one panel.

Readings:
- **MACD above zero** → 12-EMA above 26-EMA → uptrend bias.
- **Crossovers** → momentum shifts.
- **Histogram shrinking** → the move is decelerating even if price is still rising.

⚠️ MACD is built from moving averages, so it inherits their weakness: it lags, and it whipsaws
in ranges.

**Do not stack indicators.** Ten indicators derived from the same price series give you the
illusion of confirmation, not actual independent evidence. Two is plenty.

---

## 6. Stop loss and risk/reward

This section matters more than everything above it.

> **Stop loss** → A pre-decided price at which you exit a losing trade, decided **before** you
> enter. → Buy at ₹500, stop at ₹480. → It matters because it converts an unknown, open-ended loss
> into a known, bounded one. Without it, one trade can erase a year of gains.

Rules:
- Place the stop where your **idea is proven wrong** (below the support/structure), not at an
  arbitrary rupee amount you feel comfortable losing.
- **Never widen a stop** because price is approaching it. That single habit destroys accounts.
- A stop-loss order does **not** guarantee your price — in a gap-down or circuit, you can fill much
  worse. Position size accordingly.

> **Risk/Reward ratio (R:R)** → (Target − Entry) ÷ (Entry − Stop).
> → Entry ₹500, stop ₹480, target ₹560 → risk ₹20, reward ₹60 → **R:R = 1:3**.
> → It matters because it decides how often you're *allowed to be wrong*.

**Why R:R and win rate must be considered together:**

| R:R | Break-even win rate needed |
|---|---|
| 1:1 | > 50% |
| 1:2 | > 33% |
| 1:3 | > 25% |

At 1:3, you can be wrong **three times out of four** and still not lose money (before costs).
This is why professionals obsess over R:R and amateurs obsess over being right.

> **Expectancy** → (Win% × Avg win) − (Loss% × Avg loss). → It matters because it's the only number
> that tells you whether a strategy makes money *over many trades*. Any single trade tells you nothing.

**Minimum viable trade plan — write all five before you enter:**
1. Entry price and the reason (the setup)
2. Stop loss and the reason (where the idea is invalidated)
3. Target and the reason
4. Position size (Week 5)
5. Risk/reward ratio — reject anything below 1:2

---

## 7. Study plan (~3 hours)

| Order | Resource | Time | Why |
|---|---|---|---|
| 1 | **Zerodha Varsity — Module 2: Technical Analysis** — https://zerodha.com/varsity/module/technical-analysis/ | 100 min | Ch. 1–2 (background, assumptions — note the honesty about TA's limits), 3–4 (candlesticks, OHLC), 5–8 (single & multiple candlestick patterns — skim, don't memorise), 11 (support & resistance), 12 (volumes), 13 (moving averages), 14 (indicators: RSI, MACD), 16 (Dow theory), 20 (trading systems). |
| 2 | **TradingView India** — https://in.tradingview.com/ | 45 min | Free charting. Practise drawing S/R, trendlines, adding a 50/200 EMA, RSI, MACD. Its **Bar Replay** feature lets you step through history candle by candle — the safest way to practise without money. |
| 3 | **NSE — historical data & 52-week data** — https://www.nseindia.com/report-detail/eq_security | 20 min | Official OHLC and volume data, useful for computing an SMA by hand. |
| 4 | **Investopedia — Technical Analysis basics** — https://www.investopedia.com/technical-analysis-4689657 | 20 min | Good reference for definitions. US-centric on rules/instruments — use Varsity for Indian specifics. |
| 5 | Optional: **Chartink** — https://chartink.com/ | 15 min | Free Indian technical screener. Useful later for finding chart setups; don't use it to trade yet. |

**Books (optional):**
- *Technical Analysis of the Financial Markets* — John Murphy — the standard reference.
- *Japanese Candlestick Charting Techniques* — Steve Nison — the original source on candles.
- *Trading in the Zone* — Mark Douglas — psychology; overlaps into Week 5. Genuinely useful.

❌ **Avoid:** paid "sure-shot" courses, Telegram signal groups, anyone selling an
"unbeatable strategy", and any content promising a fixed monthly income from trading.

---

## 8. Practical exercise — chart reading log

Worksheet: [Chart reading log](../exercises/04-chart-reading-log.md)

### A. Compute an SMA by hand (10 min)
Download 10 days of closing prices for any Nifty 50 stock from NSE. Compute the 5-day SMA for
days 5 through 10 manually. Plot the closes and the SMA on paper. Notice the lag.

### B. Mark up three charts (45 min)
On TradingView, open the **daily** chart of three Nifty 50 stocks. On each:
1. Identify the current regime: uptrend / downtrend / range. State your evidence in terms of
   higher-highs-and-higher-lows.
2. Draw **two support zones** and **two resistance zones**. Use rectangles (zones), not lines.
3. Mark one past **breakout** and one past **false breakout**. Note the volume on each.
4. Add the **50-EMA and 200-EMA**. Where is price relative to them?
5. Add **RSI(14)**. Find one instance where RSI went above 70 and price *kept rising*. This is the
   lesson to internalise.
6. Add **MACD**. Find one crossover that worked and one that whipsawed.

### C. Three hypothetical trades (40 min)
Create three **paper** trades. For each, write down before "entering":

| Field | Trade 1 | Trade 2 | Trade 3 |
|---|---|---|---|
| Stock & date | | | |
| Setup / reason for entry | | | |
| Entry price | | | |
| Stop loss + why there | | | |
| Target + why there | | | |
| Risk per share (₹) | | | |
| Reward per share (₹) | | | |
| **R:R** | | | |
| Estimated costs | | | |

Reject any idea with R:R below 1:2. Then track them for the next two weeks and record what
actually happened — **including the ones you got wrong**. The log is the point, not the outcome.

### D. Bar Replay honesty test (20 min)
Use TradingView's Bar Replay on a stock you don't know. Step forward one candle at a time and
write your decision *before* revealing the next candle. Do 20 candles. This kills hindsight bias —
which is the main reason charts look obvious in the past and impossible in real time.

⚠️ **No real money. No real orders.**

---

## 9. Checkpoint quiz

1. A daily candle has a small body near the top and a long lower wick, after a 5-day fall. What does that suggest?
2. RSI on a stock is 79 and rising. Is this a sell signal?
3. What is the break-even win rate for a strategy with 1:3 risk/reward?
4. A stock breaks above ₹520 resistance on volume *below* its 20-day average. What's your concern?
5. Support at ₹300 breaks decisively. What role might ₹300 play afterwards?
6. Why do moving-average crossover systems perform poorly in sideways markets?
7. Your trade is at ₹482 and your stop was ₹480. You're convinced it will bounce. What do you do?
8. Name two costs that erode intraday trading returns beyond brokerage.

<details>
<summary>Answers</summary>

1. A **hammer**-like candle — sellers drove price down but buyers absorbed and pushed it back. Possible bottoming attempt, but it needs confirmation from the next candle and from volume/level context.
2. **No.** RSI > 70 in a strong uptrend can persist for weeks. Overbought means "fast", not "finished".
3. **> 25%.** You can lose 3 of 4 trades and break even (before costs).
4. Weak participation behind the breakout → **elevated risk of a false breakout / whipsaw**.
5. **Role reversal** — the old support often becomes **resistance** on any bounce back to it.
6. Because in a range, price repeatedly crosses back and forth over the averages, generating a series of small losing **whipsaw** signals with no trend to pay for them.
7. **You exit at ₹480.** The stop was your pre-committed definition of "I was wrong". Widening it is the beginning of an account-destroying habit.
8. Any two of: **STT**, exchange transaction charges, **GST**, SEBI turnover fees, stamp duty, and **slippage/impact cost**.

</details>

---

## 10. Terminology to remember

`intraday` · `swing trading` · `positional trading` · `scalping` · `slippage` · `OHLC` ·
`candlestick` · `body` · `wick/shadow` · `doji` · `hammer` · `engulfing` · `timeframe` ·
`uptrend` · `downtrend` · `range` · `higher high / higher low` · `trendline` · `support` ·
`resistance` · `zone` · `role reversal / polarity` · `breakout` · `false breakout / whipsaw` ·
`retest` · `volume` · `average volume` · `SMA` · `EMA` · `200-DMA` · `golden cross` ·
`death cross` · `RSI` · `overbought` · `oversold` · `divergence` · `MACD` · `signal line` ·
`histogram` · `stop loss` · `target` · `risk/reward ratio` · `expectancy` · `win rate` ·
`bar replay` · `hindsight bias`

---

## 11. What you should NOT worry about yet

- Memorising 40 candlestick patterns. Three are enough.
- Elliott Wave, Gann, Fibonacci retracements, harmonic patterns, Ichimoku.
- Options strategies, hedging, or anything with a Greek letter.
- Algo trading, backtesting frameworks, Pine Script.
- Order types like bracket/cover orders, MIS vs CNC.
- Level 2 data, order flow, market profile, VWAP execution.
- **Actually trading.** You have no risk framework yet — that's Week 5.

---

**Previous:** [← Week 3](week-03-fundamental-analysis.md) · **Next:** [Week 5 — Risk Management & Trading Psychology →](week-05-risk-management-psychology.md)
