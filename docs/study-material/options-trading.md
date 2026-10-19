# Options Trading — Study Notes

These notes introduce exchange-traded options using Indian-market examples. They expand on the
vocabulary-only overview in [Week 6](../week-06-futures-and-options-intro.md). The aim is to
understand the contract and its risks, not to learn a strategy or place trades.

!!! danger "Learn first; do not trade"
    Options are derivatives and can involve substantial risk. An option buyer can lose the entire
    premium paid; an option writer can face losses far greater than the premium received. Do not
    use real money for these learning exercises. This material is educational, not investment
    advice or a recommendation.

## Learning goals

After studying this page, you should be able to:

- Explain the difference between a call and a put, and between an option buyer and writer.
- Calculate intrinsic value, time value, expiry payoff and break-even for a simple long option.
- Identify ITM, ATM and OTM options.
- Explain how time, volatility and the underlying price can affect a premium.
- Describe the main Greeks as sensitivities, not as forecasts or guarantees.
- Read a basic option-chain row while treating open interest cautiously.

## 1. What is an option?

An **option** is a contract linked to an underlying asset, such as an index or eligible share. It
has a **strike price** and an **expiry**. The buyer pays a **premium** for a right under the
contract; the seller (also called the **writer**) receives that premium and takes on the other side
of the contractual obligation.

An option's premium is quoted per unit. For a contract traded in lots, the cash amount for one lot
is generally the quoted premium multiplied by the lot size, subject to the exchange's contract
specifications and any applicable charges.

An option's value can change before expiry. The calculations below that refer to expiry assume a
plain single-option position held to expiry, and ignore costs, taxes and settlement details.

## 2. Calls and puts

| Option | Buyer's right | General directional exposure for the buyer |
|---|---|---|
| **Call** | To buy the underlying at the strike, under the contract terms. | Benefits from a sufficiently large rise in the underlying. |
| **Put** | To sell the underlying at the strike, under the contract terms. | Benefits from a sufficiently large fall in the underlying. |

The buyer chooses whether to exercise according to the contract terms. The writer has the
corresponding obligation if assigned or exercised under those terms. Listed contracts can have
specific exercise and settlement procedures; verify the current exchange specifications rather
than assuming every option works identically.

## 3. Strike, expiry and moneyness

- **Strike price**: the reference price at which the option's exercise right is defined.
- **Expiry**: when the contract ends. The remaining time affects the option's value.
- **Moneyness**: a description of the relationship between the underlying's current price and the
  strike. It does not tell you whether the option is profitable.

For a spot price of **25,000**:

| Option | In the money (ITM) | At the money (ATM, approximately) | Out of the money (OTM) |
|---|---|---|---|
| Call | Strike below 25,000 | Strike near 25,000 | Strike above 25,000 |
| Put | Strike above 25,000 | Strike near 25,000 | Strike below 25,000 |

An ITM option has intrinsic value. An OTM option has none. An ATM option is near the point where
intrinsic value changes from zero to positive; exact ATM conventions can vary.

## 4. Premium: intrinsic value and time value

For a standard call or put, ignoring contract-specific adjustments:

```text
Option premium = intrinsic value + time value

Call intrinsic value = max(spot price − strike price, 0)
Put intrinsic value  = max(strike price − spot price, 0)
Time value           = premium − intrinsic value
```

**Intrinsic value** is the immediate exercise value, if any. **Time value** is the remaining
premium above intrinsic value, reflecting the possibility that the option may become more valuable
before expiry. Time value reaches zero at expiry. Before expiry, it is affected by several factors;
it does not necessarily fall by the same amount each day.

### Example: an in-the-money call

Suppose the spot price is **25,000**, a call has a strike of **24,800**, and its premium is **₹260
per unit**:

```text
Intrinsic value = max(25,000 − 24,800, 0) = ₹200
Time value      = ₹260 − ₹200 = ₹60
```

If the option were at expiry with spot still at 25,000, its gross payoff would be ₹200 per unit.
The buyer's net result would still account for the ₹260 premium paid, so the position would have a
₹60-per-unit loss before costs.

An OTM option consists entirely of time value. If it expires OTM, its payoff at expiry is zero;
the buyer loses the premium paid. A low premium does not by itself make a position low-risk or
likely to succeed.

## 5. Expiry payoff and break-even

Let `S_T` be the underlying price at expiry, `K` the strike and `P` the premium per unit.

| Position | Payoff at expiry per unit | Profit/loss at expiry per unit, before costs |
|---|---|---|
| Long call | `max(S_T − K, 0)` | `max(S_T − K, 0) − P` |
| Long put | `max(K − S_T, 0)` | `max(K − S_T, 0) − P` |
| Short call | `−max(S_T − K, 0)` | `P − max(S_T − K, 0)` |
| Short put | `−max(K − S_T, 0)` | `P − max(K − S_T, 0)` |

For one lot, multiply the per-unit profit/loss by the lot size. Always confirm whether the quoted
premium and payoff units match the contract specifications.

For a long option held to expiry, the approximate break-even levels before costs are:

```text
Long call break-even = strike + premium
Long put break-even  = strike − premium
```

**Example:** A call buyer pays a premium of ₹120 per unit for a 25,000 strike call. At expiry,
the call needs the underlying above **₹25,120** to have a positive gross result before costs.
Being above the strike alone is not enough to recover the premium.

### Buyer and writer risk

| | Option buyer | Option writer |
|---|---|---|
| Cash flow at entry | Pays premium | Receives premium |
| Maximum loss | Premium paid, for a simple long option held to expiry | Can be very large; a short call can have theoretically unlimited loss |
| Maximum gain | Large and theoretically unlimited for a long call; substantial but bounded by the underlying reaching zero for a long put | Premium received |
| Time value decay | Usually a headwind for a long option, all else equal | Usually a tailwind for a short option, all else equal |
| Other key risks | Premium can fall even when the underlying moves in the expected direction | A rapid adverse move, gaps, margin demands and losses beyond premium received |

The buyer's maximum loss statement refers to the premium paid for the option itself, held under the
simple payoff described here. It does not remove transaction costs or other risks. A writer's
maximum-loss profile depends on the position and contract; uncovered writing can be especially
risky. Margin is collateral, not a cap on losses.

## 6. What moves an option premium?

An option premium can respond to several things at once:

1. **Underlying price:** a rise or fall changes the option's moneyness and potential payoff.
2. **Time remaining:** more time can mean more opportunity for a favourable move. Time value tends
   to erode as expiry approaches, all else equal.
3. **Implied volatility (IV):** a market-derived estimate of future movement embedded in option
   prices. Higher IV often corresponds to higher premiums, all else equal. IV is not a certain
   forecast of direction or size.
4. **Interest rates and other pricing inputs:** these may matter, especially for longer-dated
   contracts; their effects are beyond this introductory lesson.

A buyer can correctly anticipate direction and still lose: the move may be too small, arrive too
late, or be outweighed by a fall in implied volatility or time value. Around an event, IV may fall
after uncertainty resolves. This is sometimes called **IV crush**; it is not guaranteed to happen
in every event or contract.

## 7. The Greeks: sensitivities, not predictions

Greeks describe how a model estimates an option's price sensitivity to a change in one input, with
other inputs held constant. They are not fixed promises. Their values change as market conditions
and the option itself change.

| Greek | Sensitivity described | Beginner interpretation |
|---|---|---|
| **Delta** | Option price sensitivity to a change in the underlying price. | Often positive for a long call and negative for a long put. It is not a guaranteed probability. |
| **Gamma** | How quickly delta changes as the underlying moves. | A higher gamma means delta can change more quickly. |
| **Theta** | Sensitivity to the passage of time. | Long options often have negative theta, all else equal; time decay is not necessarily linear. |
| **Vega** | Sensitivity to a change in implied volatility. | Long options often have positive vega: a rise in IV may lift their value, all else equal. |
| **Rho** | Sensitivity to interest-rate changes. | Often less prominent in short-dated options, but it is still a pricing input. |

Do not interpret a Greek in isolation. A premium can move because several sensitivities act at once,
and simplified signs or approximations may not describe every contract or market state.

## 8. Reading an option chain

An **option chain** lists calls and puts by expiry and strike. Common fields include:

- **LTP / premium**: the last traded price; it may not represent a price available now.
- **Bid and ask**: prices buyers are offering and sellers are asking. A wide spread can make a
  position costly to enter or exit.
- **Open interest (OI)**: outstanding contracts, as reported under the exchange's conventions.
- **Volume**: contracts traded during the specified session.
- **Implied volatility**: model-derived volatility implied by market prices.

OI and volume describe activity, not a reliable direction signal. A high OI strike does not prove
that the level is support or resistance, nor does it reveal every participant's intent. For the
Week 6 observation exercise, use the [options chain worksheet](../exercises/06-options-chain-observation.md)
and place no orders.

## 9. Expiry and settlement checks

Exercise style, expiry schedules, position limits and settlement procedures are contract-specific
and may change. Before interpreting any live contract, confirm its current specifications with the
exchange and your broker. In particular, do not assume stock and index options have identical
settlement outcomes or that an in-the-money option can be ignored at expiry.

Verify the expiry date, last trading time, settlement method, any delivery obligations, applicable
margins and the broker's procedures. Refer to [NSE India](https://www.nseindia.com/) and the
relevant exchange circulars for current information.

## Check your understanding

Assume a hypothetical long call has a strike of ₹25,000 and costs ₹150 per unit. Ignore charges.

1. What is its intrinsic value if spot is ₹25,100 before expiry?
2. What is its break-even spot at expiry?
3. What is its gross profit/loss per unit at expiry if spot is ₹25,100?
4. What is the buyer's gross loss per unit if the option expires at ₹24,900?
5. Why does an increase in the underlying not guarantee that the call premium will rise?
6. Does high open interest at one strike prove that the strike will act as support or resistance?

<details>
<summary>Check the answers</summary>

1. ₹100, using the spot price for this illustration.
2. ₹25,150, before costs.
3. Payoff is ₹100; after the ₹150 premium, the gross result is a **₹50 loss per unit**.
4. The option expires with zero payoff, so the gross loss is the **₹150 premium per unit**.
5. Time decay, implied-volatility changes and other pricing inputs can offset the effect of the
   underlying move.
6. No. OI is a measure of outstanding contracts, not proof of future price behaviour.

</details>

## Further study

- [Zerodha Varsity — Module 5: Options Theory](https://zerodha.com/varsity/module/option-theory/)
  — the reference module used while preparing these original notes.
- [NSE Option Chain](https://www.nseindia.com/option-chain) — observe listed contracts and their
  published fields; use the worksheet for observation only.
- [SEBI Investor Website](https://investor.sebi.gov.in/) — investor education and risk guidance.
- [Futures Trading — Study Notes](futures-trading.md) — review the related futures contract
  concepts.

Rules, contract specifications, expiry schedules and settlement procedures can change. Confirm
current details with the relevant exchange and broker. This page is educational material, not
investment advice.
