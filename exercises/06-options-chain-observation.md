---
title: 06 · Options chain observation
parent: Worksheets
nav_order: 6
---

# Worksheet 6 — Options Chain Observation (Week 6)

**Date completed:** ______________
**Source:** https://www.nseindia.com/option-chain

> ⛔ **Observation only. Place no orders. Not one lot.**

---

## A. Snapshot

| Field | Value |
|---|---|
| Date & time | |
| Underlying (Nifty / Bank Nifty) | |
| Spot level | |
| Expiry chosen | |
| Days to expiry | |
| **Current lot size** (from NSE contract specs) | |
| India VIX | |

---

## B. Calls

| | ITM strike | ATM strike | OTM strike |
|---|---|---|---|
| Strike | | | |
| Premium (₹) | | | |
| Open Interest | | | |
| Implied Volatility (%) | | | |
| **Intrinsic value** = max(Spot − Strike, 0) | | | |
| **Time value** = Premium − Intrinsic | | | |
| Time value as % of premium | | | |
| Break-even at expiry (Strike + Premium) | | | |

## C. Puts

| | ITM strike | ATM strike | OTM strike |
|---|---|---|---|
| Strike | | | |
| Premium (₹) | | | |
| Open Interest | | | |
| Implied Volatility (%) | | | |
| **Intrinsic value** = max(Strike − Spot, 0) | | | |
| **Time value** = Premium − Intrinsic | | | |
| Time value as % of premium | | | |
| Break-even at expiry (Strike − Premium) | | | |

**Which options are 100% time value?** ________________

**What does that mean for them if the underlying doesn't move?**

> 

---

## D. Payoff maths — call **buyer**

Assume: strike ________ · premium ₹________ · lot size ________

| Spot at expiry | Intrinsic value | P&L per unit | **Total P&L (× lot)** |
|---|---|---|---|
| Strike − 500 | | | |
| Strike | | | |
| Strike + premium (break-even) | | | |
| Strike + 250 | | | |
| Strike + 1000 | | | |

| Question | Answer |
|---|---|
| Break-even spot level | |
| Maximum loss (₹) | |
| At which spot levels does max loss occur? | |
| Maximum gain | |

## E. Payoff maths — call **seller** (same contract)

| Spot at expiry | **Total P&L (× lot)** |
|---|---|
| Strike − 500 | |
| Strike | |
| Break-even | |
| Strike + 250 | |
| Strike + 1000 | |

| Question | Answer |
|---|---|
| Maximum gain | |
| Maximum loss | |
| Margin required (use the NSE/broker margin calculator) | |

**Sketch both payoff diagrams on paper and attach/describe them.**

**In one sentence, describe the asymmetry between buyer and seller:**

> 

---

## F. Theta observation (spread over 3+ days)

Pick one **OTM** option and leave it alone. Record at the same time each day.

| Day | Date | Time | Spot level | Premium (₹) | IV (%) | Change in premium |
|---|---|---|---|---|---|---|
| 1 | | | | | | — |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |

**Was there a day where the spot barely moved but the premium still fell?**

> Yes / No — details:

**Which Greek explains this?** ________________

---

## G. Leverage reality check — futures

| Field | Value |
|---|---|
| Nifty futures price | |
| Lot size | |
| **Notional contract value (₹)** | |
| Margin required (SPAN + exposure) (₹) | |
| **Effective leverage (notional ÷ margin)** | |
| If the index moves against you 1%, loss (₹) | |
| That loss as **% of your margin** | |
| If the index moves against you 2%, % of margin lost | |

**Write the last number in bold in your own notes:**

> A 2% adverse index move costs me **______%** of the money I put up.

---

## H. Settlement check

| Question | Answer |
|---|---|
| Are index options cash or physically settled? | |
| Are **stock** options cash or physically settled in India? | |
| What obligation arises if you carry an ITM stock option to expiry? | |
| Where did you verify this? (URL) | |

---

## I. Read the SEBI data

Find and read SEBI's published analysis of profit and loss of individual traders in the equity
derivatives segment (https://www.sebi.gov.in/).

| Question | Answer |
|---|---|
| Study period covered | |
| Approximate % of individual traders who made net losses | |
| Anything noted about the age profile of loss-makers | |
| Anything noted about transaction costs | |

---

## J. Write your own warning (100 words)

Explain to a friend why you are **not** trading F&O. Use: the SEBI data, your leverage number from
Section G, and your Theta observation from Section F.

>
>
>
>

---

## K. Commitment

- [ ] I have placed **zero** derivative orders during this week.
- [ ] I will not trade F&O for at least the next 12 months.
- [ ] I will never sell naked options as a beginner.
- [ ] I will not trade on expiry day.

**Signed:** ________________ **Date:** ____________
