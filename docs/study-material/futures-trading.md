# Futures Trading — Study Notes

These notes are a standalone introduction to **exchange-traded futures**, with Indian-market
examples. They expand on the vocabulary-only overview in [Week 6](../week-06-futures-and-options-intro.md).
Use them to understand how a contract works — not as a guide to placing trades.

!!! danger "Learn first; do not trade"
    Futures use leverage. A relatively small margin deposit controls a much larger exposure, and
    losses can exceed the margin deposited. This material is educational, not investment advice or
    a recommendation. Keep learning exercises hypothetical; do not use real money.

## Learning goals

After studying this page, you should be able to:

- Explain what a futures contract is and distinguish it from owning the underlying asset.
- Work out a contract's notional value and a simple long or short profit/loss.
- Explain futures margin, daily mark-to-market settlement and basis.
- Describe how futures can be used to hedge, and why a hedge is imperfect.
- Identify what must be checked before expiry or rollover.

## 1. What is a futures contract?

A **futures contract** is a standardised exchange-traded agreement whose value follows an
underlying, such as a market index, an eligible share, a commodity or a currency. The exchange
specifies the contract terms; buyers and sellers take opposite sides of the same contract.

Buying a futures contract creates **long exposure**: the position generally gains when the futures
price rises and loses when it falls. Selling creates **short exposure**: the position generally
gains when the futures price falls and loses when it rises. Unlike an option buyer, a futures
participant does not pay a premium to acquire a right; both sides have obligations under the
contract.

Futures can be used to hedge an existing exposure or to take a view on prices. The contract itself
does not make a position safe: leverage magnifies the impact of price changes on the funds posted.

## 2. Contract specifications

Every contract has terms that determine what is being traded and how it is settled. Check the
exchange's current contract specifications rather than relying on an old example.

| Term | Meaning |
|---|---|
| **Underlying** | The index, share or other asset whose value the contract follows. |
| **Expiry / contract month** | The date or period when that particular contract ends. A futures position has a deadline. |
| **Lot size** | The fixed number of units represented by one contract. It can change; fractions of a lot are not generally available. |
| **Tick size** | The smallest permitted price movement for the contract. |
| **Contract price** | The quoted futures price per unit of the underlying. |
| **Notional value** | Contract price × lot size × number of lots. This is the exposure, not the margin paid. |
| **Settlement method** | How the contract is completed at expiry, for example cash settlement or delivery, as specified for that contract. |

### A hypothetical size calculation

Suppose a contract is quoted at **₹25,000** per unit and its lot size is **25**:

```text
Notional value = ₹25,000 × 25 = ₹6,25,000
```

This is an illustration only; it does not describe a current exchange lot size or contract.
If the futures price then changes by ₹100, the one-lot price movement is:

```text
₹100 × 25 = ₹2,500
```

That movement is approximately a ₹2,500 gain for a long position or a ₹2,500 loss for a short
position, before charges and any other adjustments. A price move in the opposite direction reverses
those outcomes.

## 3. Long and short profit/loss

For a simple position closed before expiry:

```text
Long P&L  = (exit futures price − entry futures price) × lot size × lots
Short P&L = (entry futures price − exit futures price) × lot size × lots
```

**Example:** A hypothetical long position is opened at ₹25,000 and closed at ₹25,100, with one
25-unit lot:

```text
(₹25,100 − ₹25,000) × 25 = ₹2,500 gross gain
```

If it is closed at ₹24,900 instead:

```text
(₹24,900 − ₹25,000) × 25 = −₹2,500 gross loss
```

These simple calculations omit brokerage, exchange charges, taxes, slippage, margin interest (if
applicable) and other costs. Actual settlement cash flows and expiry outcomes depend on the
contract rules.

## 4. Margin and leverage

**Margin** is collateral required to carry a futures position. It is not the purchase price of the
underlying and does not cap the loss. Because the margin is only a fraction of the notional value,
a small percentage move in the underlying can be a much larger percentage move relative to the
margin posted.

Exchanges and brokers may require different margin components, buffers or additional funds in
changing market conditions. The exact requirement depends on the contract, the position and
current rules. A margin calculator is an estimate, not a promise that a position can be held safely
for that amount.

### Mark-to-market (MTM)

Futures gains and losses are generally settled through **mark-to-market** adjustments as required
by the exchange. A loss can therefore require funds before the position is closed or expires. If
the account does not meet the required margin, the broker may require more funds or close the
position under its policies and applicable rules.

**Key distinction:** the amount deposited as margin is collateral; the notional value is the
position's exposure. Never treat the margin number as the maximum possible loss.

## 5. Futures price, spot price and basis

- **Spot price** is the current price of the underlying in its relevant market.
- **Futures price** is the price quoted for a contract expiring on a future date.
- **Basis** is the difference between the futures price and the spot price:

```text
Basis = futures price − spot price
```

The futures price can differ from spot because of factors such as financing and the costs or
benefits of holding the underlying over time. The relationship is not a guaranteed forecast of where
spot will move. As a contract approaches expiry, its price and the relevant spot value generally
converge, subject to contract mechanics.

If a hedge uses a futures contract whose price does not move exactly with the exposure being
hedged, the remaining difference is called **basis risk**. This is one reason a hedge may reduce
risk without removing it.

## 6. Hedging with futures

A **hedge** uses a futures position to offset some risk from an existing exposure.

**Illustration:** An investor already owns a broad share portfolio and is concerned about a short
period of market weakness. A short index futures position may offset part of a fall in the portfolio.
If the market rises instead, the futures position may lose value while the portfolio gains value.
The two sides may not move by the same amount because the portfolio and index are not identical.

A hedge therefore involves trade-offs:

- It can reduce some price risk, but may also limit gains.
- The underlying exposure and futures contract may not match perfectly.
- Contract expiry means the hedge may need to be closed or rolled.
- Margin and daily settlement can create cash-flow needs even when the hedge is serving its purpose.

This is a conceptual example, not a recommendation to hedge or to use a particular contract.

## 7. Expiry, settlement and rollover

Before a contract reaches expiry, a participant must understand the exchange's current process for
that specific contract. Settlement can differ by underlying and contract type. Some contracts are
cash settled; some stock derivatives may involve **physical settlement** and delivery obligations.
Do not assume that every futures contract settles in the same way.

**Rollover** means closing a position in an expiring contract and opening a position in a later
contract month. It is a new transaction, not an automatic extension. The later contract may have a
different price, and both trades can have costs and risks.

Before expiry, verify from the exchange and broker:

1. The exact expiry date and last trading time.
2. The settlement method and any delivery obligations.
3. The margin and position limits that apply near expiry.
4. What action is needed to close or roll the position, and the associated costs.

## 8. Broker product labels and order types

Broker screens may offer product labels such as **MIS** or **NRML**, and order varieties such as
**cover orders** or **bracket orders**. These labels describe broker/exchange handling, margin,
holding period or attached order instructions; they do not change the underlying futures payoff or
make the position risk-free. Availability and rules can change, and not all brokers offer the same
products.

Read the broker's current product and order documentation before interpreting a label. A stop-loss
or attached exit instruction cannot guarantee a fill at a particular price, especially in a fast or
illiquid market.

## 9. Risk checklist

Before discussing any futures position, make sure you can answer all of these without guessing:

- What is the **notional exposure**, and how much can a one-tick or 1% move change the P&L?
- What margin is required now, and what could trigger an additional margin demand?
- Can a loss exceed the funds initially posted?
- What is the expiry date and exact settlement method?
- Could physical delivery apply?
- What are the costs, liquidity limits and risks of closing or rolling?
- Does the position hedge a real exposure, or is it simply a leveraged directional bet?

If any answer is unclear, the responsible next step is more study, not a live order.

## Check your understanding

1. If the futures price rises by ₹40 and the lot size is 50, what is the gross P&L for one long lot?
2. Does posting margin mean that your maximum loss is limited to that margin?
3. What does a positive basis tell you, and what does it **not** reliably predict?
4. Why might a short index future only partly offset a share portfolio's losses?
5. What should you verify before holding a stock futures contract close to expiry?

<details>
<summary>Check the answers</summary>

1. ₹40 × 50 = **₹2,000 gross gain**, before costs.
2. **No.** Margin is collateral; losses can exceed the amount initially posted.
3. Futures are trading above spot at that moment. It is not a guaranteed forecast that spot will
   rise.
4. The portfolio may differ from the index, so the two values may not move one-for-one; this is
   basis/hedge mismatch risk.
5. Check the current expiry, settlement method, delivery obligations, margins and broker/exchange
   procedures.

</details>

## Further study

- [Zerodha Varsity — Module 4: Futures Trading](https://zerodha.com/varsity/module/futures-trading/)
  — the reference module used while preparing these original notes.
- [NSE India](https://www.nseindia.com/) — check current futures contract specifications, expiry
  calendars, lot sizes and settlement information.
- [SEBI Investor Website](https://investor.sebi.gov.in/) — investor education and risk guidance.
- [Week 6 — Futures & Options introduction](../week-06-futures-and-options-intro.md) — continue
  with basic options vocabulary.

Exchange rules, expiry schedules, lot sizes, margins and broker product features change. Confirm
current details with the relevant exchange and broker; these notes are not a substitute for those
sources.
