# Bonding Curve

Moony’s price discovery is governed by an on‑chain bonding curve, a deterministic mathematical function encoded within the Reserve Contract. The curve dynamically adjusts the token’s price based on the current absolute supply of tokens in circulation.

This mechanism applies symmetrically to both unlocking and redemption. When Moony is unlocked from the pre-minted supply, the curve calculates the cost in USDF according to current circulating supply; when Moony is redeemed, it determines the USDF return using the same logic. As circulating supply increases, the curve raises the price in a non‑linear fashion. This exponential structure is intentional: it rewards early participation with lower entry costs, requires later participants to contribute proportionally more liquidity, and naturally reinforces Moony’s scarcity over time.

## Core Principles

- **Price Increases with Demand:** As users unlock Moony from the Reserve Contract, the circulating supply increases and the bonding curve adjusts the price upward with each transaction.

- **Price Also Governs Redemption:** When users redeem Moony for USDF through the Reserve, the curve calculates the return value based on the current supply position.

- **Predictable and Transparent:** Pricing is fully deterministic, enforced by on‑chain logic, and free from discretionary control.

- **Aligned Incentives:** Early adopters gain an advantage, while later participants strengthen network liquidity through higher‑priced entries.

## Model Parameters

The bonding curve follows a continuous exponential function encoded in the Reserve Contract that determines the spot price based on the current token supply:

```math
R'(S) = a \times b \times e^{c \times S}
```

Where:
- **R'(S)** is the spot price (price per token) at supply **S**
- **S** is the current circulating supply (absolute number of tokens)
- **a**, **b**, and **c** are curve constants that define the exponential shape

### Curve Constants

The Reserve Contract uses the following curve constants:

```math
a = 11400.230149967394933471
```

```math
b = 0.000000877175273521
```

```math
c = 0.000000877175273521
```

### Price Boundaries

The curve is designed to span from a starting price to an ending price across the full supply:

- **Starting Price:** $0.01 USDF per token (when supply approaches zero)
- **Ending Price:** $1,000,000 USDF per token (when supply approaches 21,000,000)
- **Maximum Supply:** 21,000,000 tokens

### Cost Calculation

The Reserve Contract calculates costs and redemption values using the following formulas:

**Cost to Purchase Tokens:**

When purchasing tokens, the total cost is calculated by integrating the spot price function over the supply range:

```math
\text{Cost} = \frac{a \times b}{c} \times \left(e^{c \times S_{\text{new}}} - e^{c \times S_{\text{current}}}\right)
```

Where **S_new = S_current + tokens_to_buy**.

**Value from Redeeming Tokens:**

When redeeming tokens, the value received uses the inverse calculation:

```math
\text{Value} = \frac{a \times b}{c} \times \left(e^{c \times S_{\text{current}}} - e^{c \times S_{\text{new}}}\right)
```

Where **S_new = S_current - tokens_to_sell**.

These formulas are executed on-chain by the Reserve Contract for every unlock and redemption transaction, ensuring deterministic and transparent pricing.

### Price Progression

The exponential curve ensures that:
- Early tokens (near 0 supply) are priced at approximately $0.01 USDF
- As supply increases, the price grows exponentially
- Final tokens (near 21,000,000 supply) approach $1,000,000 USDF each
- The curve is continuous and smooth, with no discrete jumps

This model guarantees deterministic, transparent price progression. The exponential structure rewards early participation with lower entry costs, while later entrants contribute proportionally more liquidity to the Reserve, ensuring the system scales in proportion to demand.

## Market Dynamics

While the Reserve Contract governs Moony’s primary issuance and redemption pricing, price discovery may also occur on secondary markets, including centralized exchanges or peer‑to‑peer platforms. These market prices may temporarily diverge from the bonding curve price. However, the Reserve’s transparent pricing mechanism creates an arbitrage anchor. If Moony trades above the Reserve price, users can unlock from the Reserve at a lower cost. If Moony trades below the Reserve price, arbitrageurs can buy on the market and redeem to the Reserve. This dynamic keeps market prices tethered to the curve, reinforcing liquidity and price stability across platforms.