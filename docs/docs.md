---
title: Docs
description: Peer-to-Peer Digital Cash Mined With Liquidity
---

::: warning ⚠️ Confidential & Under Construction
**This site contains confidential information and is currently under construction.**

The content may include placeholder text, incomplete sections, and information that is subject to change. Please treat this documentation as confidential material until the final version is released.
:::

## Moony Protocol

![Placeholder](/placeholder-color.png)

Moony is a decentralized monetary protocol designed as a digital public good. It provides open access to financial participation, enables trustless peer-to-peer value exchange, and establishes a composable foundation for a decentralized global economy.

At the core of the protocol is an immutable onchain smart contract deployed on the Solana blockchain by Moony Labs, LLC. that deterministically governs the distribution of a fixed-supply digital asset through a proof-of-liquidity mechanism, without discretionary control or centralized coordination.

---

### Moony (MNY) {#moony-mny}

Moony (MNY) is the native digital asset of the Moony protocol, designed to enable permissionless payments between participants without intermediaries.

::: tip 🚀 Smart Contract Addresses

<DeploymentInfo />

:::


Transactions with MNY do not require approval from any centralized authority and cannot be stopped, reversed, or filtered by third parties. This trustless design ensures that participants retain full custody and control over their funds at all times. As a result, MNY enables censorship-resistant exchange of value and remains accessible to anyone, anywhere in the world, without discrimination or geographic restriction.

![Placeholder](/placeholder-color.png)

Moony has a fixed maximum supply of 21 million units, an immutable constraint that cryptographically ensures the protocol’s long-term economic integrity. There is no mechanism by which new units can ever be created, guaranteeing that the total supply remains permanently capped.

This fixed supply protects Moony from monetary debasement, distinguishing it from traditional fiat currencies, whose issuance can be arbitrarily expanded by central banks or governments, leading to the long-term erosion of purchasing power through inflation.

By removing the risk of discretionary supply expansion, the Moony protocol establishes a stable foundation for a decentralized economic system to flourish. Its fixed supply enforces scarcity without trust and enables economic coordination without permission.


---


### Reserve Contract {#reserve-contract}

The Moony Reserve Contract is the trustless mechanism through which all MNY enters circulation. Rather than relying on discretionary allocation, private sales, or centralized control, the entire MNY supply is held in a smart contract that issues tokens according to transparent, immutable rules. This ensures that every unit of MNY is acquired on equal terms, with no special access or preferential treatment.


::: tip 🚀 Reserve Contract Addresses

<ReserveAddresses />

:::


#### How It Works

![Placeholder](/placeholder-color.png)

When a user sends USDF (a dollar-backed stablecoin issued by Flipcash Inc.) to the Reserve Contract, the protocol calculates a price using a deterministic bonding curve. It unlocks the corresponding amount from the pre-minted supply of Moony (MNY) and transfers it directly to the user’s wallet. The USDF is retained onchain as protocol liquidity, ensuring every unit of circulating Moony is backed by verifiable capital.

To redeem Moony, users send MNY back to the Reserve Contract. The protocol returns USDF at the current redemption rate, again determined by the bonding curve. Pricing is updated in real time and applied automatically with each transaction.

This two-way mechanism allows users to enter and exit the system freely, without centralized intermediaries or approvals. Issuance and redemption occur directly through the contract’s internal logic, ensuring predictable and transparent outcomes for all participants.


<div class="formula-card">
<div class="formula-header">
<h4>Design Principles</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Immutable</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The Moony Reserve Contract cannot be altered once deployed. There are no admin keys, upgrade paths, or special permissions. The issuance, pricing, and redemption logic is permanently encoded at the smart contract level, ensuring no future changes or governance actions can override it.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Permissionless</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Anyone can interact with the Moony Reserve Contract directly from their own wallet. There are no intermediaries, whitelists, or identity checks required. The system is open to all participants equally.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Non-custodial</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The Moony Reserve Contract does not hold user assets in a custodial manner. Users deposit USDF and receive MNY, or return MNY to redeem USDF, with no third party controlling the funds. All interactions occur directly between the user and the contract.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Transparent</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">All supply, liquidity, and pricing data is recorded on the Solana blockchain. Every interaction with the Moony Reserve Contract is publicly visible and verifiable. The system is fully auditable and provable in real time.</span>
</div>
</div>
</div>
</div>
</div>

#### Infrastructure Provider

The Moony Reserve Contract was deployed by Moony Labs, LLC. using infrastructure developed by Flipcash Inc., an independent third-party company. Flipcash developed the Reserve Contract's architecture, which Moony Labs deployed to the Solana blockchain, enabling Moony's launch as an independent protocol.

While Flipcash provided the initial infrastructure, it does not maintain control over Moony or its reserve contract, nor can it alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.

Moony is not limited to any platform. The Reserve Contract is open to all developers and integrators, and MNY can be used across any app, wallet, or protocol that supports Solana. This ensures maximum composability, interoperability, and future-proof adoption.


### Proof of Liquidity

![Placeholder](/placeholder-color.png)

Moony uses a distribution mechanism called Proof of Liquidity (PoL), implemented entirely through its immutable on-chain reserve contract. Under this model, new tokens enter circulation exclusively in exchange for verifiable on‑chain capital, ensuring issuance is transparent, market‑driven, and free from discretionary control.

Each MNY token is issued in exchange for USDF, a dollar-pegged stablecoin issued by Flipcash Inc. This pairing provides familiar dollar‑based valuation and lowers the entry barrier for new participants.

The Moony reserve contract holds all USDF deposits as onchain liquidity, enabling redemptions and anchoring supply in verifiable value. Token pricing is determined by a bonding curve, a deterministic function that increases cost as more tokens are unlocked, ensuring that issuance is transparent, demand-driven, and algorithmically defined.

<div class="formula-card">
<div class="formula-header">
<h4>Key Properties</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Permissionless</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Anyone can unlock MNY by interacting directly with the reserve contract, with no approvals or intermediaries required.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Proof of Liquidity</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Capital used to unlock MNY remains in the reserve, supporting redemptions and ensuring liquidity to support the market as it grows.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Bonding Curve</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Token pricing is governed by a deterministic bonding curve, meaning the price increases as more tokens are unlocked. This ensures that supply issuance is aligned with real demand.</span>
</div>
</div>
</div>
</div>
</div>

#### Capital-Based Mining

Moony's Proof of Liquidity (PoL) mechanism offers a capital‑driven alternative to traditional Proof‑of‑Work (PoW) distribution models. Instead of consuming vast amounts of energy through specialized hardware to compete for block rewards, participants unlock MNY by depositing USDF directly into the on‑chain Reserve Contract. This shifts issuance from energy‑intensive computation to verifiable, capital‑based participation.

This model redefines mining as a constructive economic activity rather than an extractive one. Each deposit not only unlocks MNY from the pre-minted supply but also strengthens the network by adding permanent, redeemable on‑chain liquidity. Where traditional mining externalizes environmental costs, PoL compounds value inside the ecosystem, aligning participant incentives with collective benefit.

By combining PoL with Solana's carbon‑efficient infrastructure, Moony achieves a distribution model that is both sustainable and economically reinforcing. Every unlocked token leaves lasting value in the network, deepens market liquidity, and ensures that growth reflects genuine demand, creating a self‑sustaining framework for the issuance of scarce digital assets.

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Permissionless</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Anyone can participate as demand arises, without permission or centralized control.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Economically Constructive</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">All capital remains in the Reserve Contract, forming the liquidity backbone of Moony's economy.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Energy Efficient</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">By replacing energy-intensive computation with on-chain capital deposits, PoL reduces environmental impact and complements Solana's low-carbon infrastructure.</span>
</div>
</div>
</div>
</div>
</div>

#### Fee Model {#fee-model}

Acquiring MNY directly from the Reserve Contract carries no fee, enabling cost‑efficient entry into the ecosystem. Redemptions, selling MNY back to the Reserve Contract for USDF, incur a 1% fee.

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Security</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The fee mitigates the risk of sandwich attacks, a form of front‑running in which automated bots attempt to profit from predictable price movements by inserting transactions around a user's trade.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Infrastructure Support</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Fee proceeds are directed to Flipcash Inc., the infrastructure provider that developed the Reserve Contract architecture (see [Infrastructure Provider section](/docs.html#infrastructure-provider)).</span>
</div>
</div>
</div>
</div>
<div class="formula-where-section">
<p class="formula-where" style="font-size: 0.875rem; margin: 0;">The sell‑side fee applies only to redemptions executed directly against the Reserve Contract. Peer‑to‑peer transfers and secondary market transactions, whether on centralized or decentralized exchanges, are not subject to this fee.</p>
</div>
</div>

### Bonding Curve

![Placeholder](/placeholder-color.png)

Moony's price discovery is governed by an on‑chain bonding curve, a deterministic mathematical function encoded within the Reserve Contract. The curve dynamically adjusts the token's spot price based on the current absolute supply of tokens in circulation.

This mechanism applies symmetrically to both unlocking and redemption. When MNY is unlocked from the pre-minted supply, the curve calculates the cost in USDF according to current circulating supply; when MNY is redeemed, it determines the USDF return using the same logic. As circulating supply increases, the curve raises the price in a non‑linear fashion. This exponential structure is intentional: it rewards early participation with lower entry costs, requires later participants to contribute proportionally more liquidity, and naturally reinforces MNY's scarcity over time.

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Price Increases with Demand</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">As users unlock MNY from the Reserve Contract, the circulating supply increases and the bonding curve adjusts the price upward with each transaction.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Price Also Governs Redemption</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">When users redeem MNY for USDF through the Reserve, the curve calculates the return value based on the current supply position.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Predictable and Transparent</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Pricing is fully deterministic, enforced by on‑chain logic, and free from discretionary control.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Aligned Incentives</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Early adopters gain an advantage, while later participants strengthen network liquidity through higher‑priced entries.</span>
</div>
</div>
</div>
</div>
</div>

#### Model Parameters

The bonding curve follows a continuous exponential function encoded in the Reserve Contract. The curve defines the **spot price** (the instantaneous price per token) at any given supply level. When you buy or sell tokens, the Reserve Contract calculates the total cost or value by integrating this spot price function over the supply range of your transaction.

<div class="formula-card">
<div class="formula-content">
</div>
<div class="formula-where-section">
<p class="formula-where">The spot price is the price per token at a specific supply level. This formula gives you the instantaneous price at supply <strong>S</strong>:</p>
<p class="formula-where"><strong>Where:</strong></p>
<ul>
<li><strong>R'(S)</strong> is the spot price (price per token) at supply <strong>S</strong></li>
<li><strong>S</strong> is the current circulating supply (absolute number of tokens)</li>
<li><strong>a</strong>, <strong>b</strong>, and <strong>c</strong> are curve constants that define the exponential shape</li>
</ul>
</div>
</div>

$$R'(S) = a \times b \times e^{c \times S}$$

##### Curve Constants

The Reserve Contract uses three constants that work together to define the exponential curve's shape and boundaries. These constants are carefully calibrated to ensure the curve starts at $0.01 USDF per token (near zero supply) and approaches $1,000,000 USDF per token (at maximum supply of 21,000,000 tokens).

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item" data-constant="a">
<span class="constant-label">Constant a</span>
<div class="constant-value-wrapper">
<span class="constant-value-math"></span>
</div>
</div>
<div class="curve-constant-item" data-constant="b">
<span class="constant-label">Constant b</span>
<div class="constant-value-wrapper">
<span class="constant-value-math"></span>
</div>
</div>
<div class="curve-constant-item" data-constant="c">
<span class="constant-label">Constant c</span>
<div class="constant-value-wrapper">
<span class="constant-value-math"></span>
</div>
</div>
</div>
</div>
<div class="formula-where-section">
<p class="formula-where"><strong>How they work together:</strong></p>
<ul>
<li><strong>Constant a</strong> acts as a base multiplier that scales the entire curve. It sets the overall magnitude of prices across the curve.</li>
<li><strong>Constant b</strong> works with constant a to establish the starting price point. The product <strong>a × b</strong> determines the price when supply approaches zero (approximately $0.01 USDF).</li>
<li><strong>Constant c</strong> controls the exponential growth rate. A larger <strong>c</strong> means the price increases more rapidly as supply grows. This constant determines how steeply the curve rises and ensures it reaches the target ending price at maximum supply.</li>
<li>Together, <strong>a × b × e^(c × S)</strong> creates an exponential function where price grows exponentially with supply, starting low and accelerating as more tokens are unlocked.</li>
</ul>
</div>
</div>

$a = 11400.230149967394933471$

$b = 0.000000877175273521$

$c = 0.000000877175273521$

##### Cost Calculation

When you buy or sell tokens, you're not buying at a single price point—you're buying across a range of supply levels. The Reserve Contract calculates the total cost by integrating the spot price function over the supply range of your transaction. These formulas are executed on-chain by the Reserve Contract for every unlock and redemption transaction, ensuring deterministic and transparent pricing.

<div class="formula-card">
<div class="formula-content">
</div>
<div class="formula-where-section">
<p class="formula-where">To buy tokens, you pay the integral of the spot price from your starting supply to your ending supply. This gives you the total USDF cost for the tokens you're purchasing:</p>
<p class="formula-where"><strong>Where:</strong></p>
<ul>
<li><strong>S_current</strong> is the supply before your purchase</li>
<li><strong>S_new</strong> = S_current + tokens_to_buy (the supply after your purchase)</li>
<li>The formula integrates the spot price function over this range</li>
</ul>
</div>
</div>

$$\text{Cost} = \frac{a \times b}{c} \times \left(e^{c \times S_{\text{new}}} - e^{c \times S_{\text{current}}}\right)$$

<div class="formula-card">
<div class="formula-header">
<h4>Value from Redeeming Tokens</h4>
</div>
<div class="formula-content">
</div>
<div class="formula-where-section">
<p class="formula-where">When redeeming tokens, you receive USDF based on the integral of the spot price over the supply range you're removing. The calculation is the same as purchasing, but in reverse:</p>
<p class="formula-where"><strong>Where:</strong></p>
<ul>
<li><strong>S_current</strong> is the supply before your redemption</li>
<li><strong>S_new</strong> = S_current - tokens_to_sell (the supply after your redemption)</li>
<li>You receive USDF equal to the integral of the spot price over this range</li>
</ul>
<p class="formula-where" style="margin-top: 16px; font-size: 0.875rem; color: #6b7280;"><em>Note: Redemptions incur a 1% fee. The formula above shows the gross USDF value before the fee is applied. See the <a href="#fee-model" style="color: #10b981; text-decoration: underline;">Fee Model</a> section for details.</em></p>
</div>
</div>

$$\text{Value} = \frac{a \times b}{c} \times \left(e^{c \times S_{\text{current}}} - e^{c \times S_{\text{new}}}\right)$$

##### Curve Properties

This model guarantees deterministic, transparent price progression. The exponential structure rewards early participation with lower entry costs, while later entrants contribute proportionally more liquidity to the Reserve, ensuring the system scales in proportion to demand.

The exponential curve ensures predictable price behavior:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Exponential Growth</span>
<div class="constant-value-wrapper">
<span class="constant-value">Price increases exponentially as supply grows, rewarding early participants with lower entry costs</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Continuous Function</span>
<div class="constant-value-wrapper">
<span class="constant-value">The curve is continuous and smooth, with no discrete jumps or sudden price changes</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Deterministic Pricing</span>
<div class="constant-value-wrapper">
<span class="constant-value">Every price point is mathematically determined and transparent, enforced by on-chain logic</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Scalable Liquidity</span>
<div class="constant-value-wrapper">
<span class="constant-value">Later entrants contribute proportionally more liquidity, ensuring the system scales with demand</span>
</div>
</div>
</div>
</div>
</div>

#### Market Dynamics

The Reserve Contract provides the primary pricing mechanism for MNY, but price discovery also occurs on secondary markets. This creates a dynamic relationship between the bonding curve and market prices.

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Primary Pricing</span>
<div class="constant-value-wrapper">
<span class="constant-value">Reserve Contract bonding curve determines unlock and redemption prices</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Secondary Markets</span>
<div class="constant-value-wrapper">
<span class="constant-value">Price discovery on centralized exchanges and peer-to-peer platforms</span>
</div>
</div>
</div>
</div>
</div>

<div class="formula-card">
<div class="formula-header">
<h4>Arbitrage Mechanism</h4>
</div>
<div class="formula-content">
<p>The Reserve's transparent pricing creates an arbitrage anchor that keeps market prices aligned with the bonding curve:</p>
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Market Price Above Curve</span>
<div class="constant-value-wrapper">
<span class="constant-value">Users can unlock from the Reserve at a lower cost, creating downward pressure on market price</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Market Price Below Curve</span>
<div class="constant-value-wrapper">
<span class="constant-value">Arbitrageurs buy on the market and redeem to the Reserve, creating upward pressure on market price</span>
</div>
</div>
</div>
</div>
<div class="formula-where-section">
<p class="formula-where">This dynamic keeps market prices tethered to the curve, reinforcing liquidity and price stability across platforms.</p>
</div>
</div>

## Moony Economy

![Placeholder](/placeholder-color.png)

Moony is designed as a foundational asset for a decentralized, composable financial system. Operating at the protocol layer, it enables seamless integration into applications, platforms, and commerce flows without reliance on centralized intermediaries. Governed by immutable smart contracts, its architecture is fully permissionless, supporting innovation without gatekeeping and allowing diverse actors to coordinate through aligned economic incentives.

Each integration extends Moony's utility and introduces it to new user segments. These touchpoints compound over time, increasing transactional volume, deepening liquidity, and unlocking additional use cases. Developers gain composability and demand for their integrations; users benefit from broader accessibility; and communities can build localized economic systems anchored in a shared, credible asset.

Moony serves as shared infrastructure across a growing ecosystem of independent participants. As adoption expands, network effects accelerate: each new implementation reinforces Moony's role as a medium of exchange. By anchoring incentives across an interoperable landscape, Moony facilitates a more open, resilient, and scalable digital economy, one not defined by institutional control, but by permissionless coordination and shared value creation.

Moony's design naturally supports a broad range of use cases as adoption grows:

<div class="formula-card">
<div class="formula-header">
<h4>Potential Use Cases</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Peer-to-Peer Payments</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Moony enables instant, borderless transfers of value between individuals without intermediaries. Users can send and receive MNY anywhere in the world with full on‑chain transparency and finality, empowering truly permissionless digital cash transactions.</span>
</div>
<div style="margin-top: 0.75rem;">
<a href="/docs.html#p2p-payments" style="color: #555555; text-decoration: none; font-size: 0.875rem; font-weight: 500;">Learn more about P2P Payments →</a>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Micropayments</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">MNY's divisibility and low‑cost on‑chain settlement make it ideal for very small transactions that traditional financial rails can't handle. From pay‑per‑use digital content to streaming payments, MNY unlocks new economic models that previously required centralized platforms with high fees.</span>
</div>
<div style="margin-top: 0.75rem;">
<a href="/docs.html#micropayments" style="color: #555555; text-decoration: none; font-size: 0.875rem; font-weight: 500;">Learn more about Micropayments →</a>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Decentralized Finance (DeFi)</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">MNY can integrate seamlessly into the growing ecosystem of on‑chain financial protocols in the Solana ecosystem. Holders can use MNY in liquidity pools, decentralized exchanges, or lending protocols, expanding its utility as an interoperable, permissionless asset in DeFi.</span>
</div>
<div style="margin-top: 0.75rem;">
<a href="/docs.html#capital-markets" style="color: #555555; text-decoration: none; font-size: 0.875rem; font-weight: 500;">Learn more about DeFi →</a>
</div>
</div>
</div>
</div>
</div>

These examples demonstrate Moony's flexibility as a foundational layer, rather than a tool confined to a single application or vertical. Its long-term utility will be defined by open participation and the ingenuity of independent developers, communities, and platforms. Engineered for composability and permissionless integration, Moony's ecosystem expands organically as new participants build on top of it. Each integration strengthens its position as a decentralized public good, resilient, adaptive, and free from centralized control.

### P2P Payments {#p2p-payments}

![Placeholder](/placeholder-color.png)

Peer-to-peer (P2P) payments represent Moony's most direct utility: enabling value transfer between individuals without intermediaries. By combining a credibly fixed supply with on-chain settlement, Moony delivers global digital cash with finality, transparency, and negligible fees.

#### Why It Matters

Legacy payment systems rely on layered intermediaries such as banks, processors, or card networks, each introducing cost, latency, and potential for control or exclusion. Transactions can be delayed, reversed, or denied entirely, with entire regions excluded from participation.

Moony's P2P model is different:

<div class="formula-card">
<div class="formula-header">
<h4>P2P Model</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Direct settlement</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Transfers occur directly on-chain between sender and recipient, with no custodial middleman.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Trust minimization</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Settlement rules are enforced by code, not dependent on counterparties.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Censorship resistance</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Valid transactions are processed so long as participants can access the network.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Global accessibility</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Anyone with internet access and a compatible wallet can participate.</span>
</div>
</div>
</div>
</div>
</div>

#### Global Scalability

To make P2P viable at scale, both cost and throughput must support everyday usage. These characteristics make Moony suitable for daily transactions, not just high-value transfers. Moony launches on Solana to meet these requirements:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Low Fees</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Typical transfers cost fractions of a cent, with fees known at submission.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Throughput & Latency</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Solana's high-performance network supports rapid confirmations without congestion.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Composability</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The same infrastructure powering P2P also enables micropayments, streaming, and automated settlement.</span>
</div>
</div>
</div>
</div>
</div>

Together, these properties make Moony credible for daily payments, not just occasional high‑value transactions.

#### Financial Inclusion

Billions of people remain underserved, or entirely excluded, by traditional payment systems. In many regions, the absence of reliable banking infrastructure leaves individuals unable to store value securely, send money across borders, or participate in even the most basic forms of commerce. 

Where banking does exist, high fees, slow settlement times, and rigid requirements place meaningful participation out of reach for many. Cross‑border remittances can take days to arrive, cost double‑digit percentages in fees, and are often impractical for small amounts, limiting economic mobility and reinforcing systemic barriers.

Moony addresses these challenges:

<div class="formula-card">
<div class="formula-header">
<h4>Financial Inclusion</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Open access</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Anyone with a smartphone can receive Moony without bank accounts or gatekeepers.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Remittance</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Affordable, near-instant settlement for cross-border payments.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Commerce</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Merchants and creators can accept payments without card fees or chargebacks.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Availability</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Operates 24/7, unaffected by weekends or holidays, like traditional systems.</span>
</div>
</div>
</div>
</div>
</div>

Moony's peer‑to‑peer architecture offers a different path: one that bypasses the bottlenecks of legacy finance and extends open participation to anyone with a mobile device. By removing intermediaries and leveraging low‑cost, high‑speed blockchain settlement, Moony makes direct digital transactions viable at a scale and inclusivity level traditional rails cannot match.

#### Interoperable Access

Moony is issued as an SPL token on the Solana blockchain, ensuring that it is fully interoperable and not bound to any single interface or platform. All 21,000,000 tokens are minted during contract initialization and held in a locked state until unlocked through purchases. From the moment tokens are unlocked, Moony is part of a broader composable ecosystem where users and developers can freely move, store, and integrate the asset without permission. This open design not only reinforces Moony's role as decentralized digital cash but also guarantees that its utility can expand organically across a variety of independent applications.

Several key properties enable this interoperability:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Wallet compatibility</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Any Solana‑compatible wallet that supports SPL tokens can hold and transfer Moony. Users are free to manage their balances in the interface of their choice, rather than being locked into a single custodial or proprietary app.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Composability</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Moony can be added to payment apps, point‑of‑sale systems, bots, and custodial or non‑custodial services with minimal friction. Developers can plug into Moony the same way they support any other SPL token, allowing it to circulate naturally through the ecosystem.</span>
</div>
</div>
</div>
</div>
</div>

Because Moony is permissionless and composable by design, its peer‑to‑peer utility is not constrained to a single application. The token can flow seamlessly between wallets, payment interfaces, and future onchain services, creating a foundation for global accessibility and financial inclusion as the network of integrations grows.

#### Flipcash Infrastructure

Moony and its reserve contract were deployed by Moony Labs, LLC. using infrastructure developed by Flipcash Inc., an independent third-party company. Neither Moony Labs nor Flipcash maintain control over Moony or its reserve contract, nor can they alter the protocol's issuance, pricing, or supply mechanisms. These parameters are defined entirely by Moony's immutable smart contract, ensuring the protocol remains open and permissionless from the start.

At launch, Flipcash provides the first public interface for interacting directly with the Moony Reserve Contract. Through its mobile app, users can seamlessly buy MNY or sell MNY for USDF. Flipcash also offers an industry-leading, trustless peer-to-peer payments experience with zero fees for P2P sends, giving users a seamless way to transact with MNY.

##### Flipcash Enables Users To:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Interact With Reserve</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Seamlessly convert between Moony and USDF through an intuitive interface.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Send P2P Payments</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Instantly use Moony as digital cash where you can hand it to someone or send it as a link, with zero fees for peer-to-peer transfers.</span>
</div>
</div>
</div>
</div>
</div>

::: tip click-here-tip
[Download Flipcash Mobile Application](https://www.flipcash.com)
:::

While Flipcash provides the first front end to access the Moony reserve contract, MNY is not limited to any single platform. Designed as a digital public good, MNY can be integrated into any third party platform, protocol, wallet, or app, ensuring broad utility, composability, and adoption.

#### Code Payments VM Infrastructure

Flipcash leverages Code Payments' Virtual Machine (VM) infrastructure to enable efficient, zero-fee peer-to-peer payments. The VM system enables batch processing and optimization of payments, making micropayments and frequent transfers economically viable.

These VM addresses are part of Flipcash's payment infrastructure and are not required for direct interaction with the Moony Reserve Contract. Users can unlock and redeem MNY directly through the Reserve Contract without using these VM addresses.

<VMAddresses />

### Micropayments

![Placeholder](/placeholder-color.png)

Micropayments, transactions valued in cents or fractions of a cent, have historically been impractical under legacy financial rails. Percentage‑based fees, multi‑day settlement cycles, and reliance on centralized intermediaries make low‑value transfers uneconomical, cutting off entire categories of digital commerce. 

These limitations have forced creators, developers, and small businesses into centralized platforms that aggregate payments, take substantial fees, and control audience relationships. Moony removes these barriers. Built for high‑volume, low‑value transactions, it combines extreme divisibility with near‑zero fees to make micropayments viable at a global scale. By doing so, it unlocks entirely new economic behaviors that were previously impossible or uneconomical.

#### Why It Matters

Micropayments are not simply smaller versions of ordinary transactions, they are a missing building block of the modern internet economy. The inability to move tiny amounts of value efficiently has shaped the digital landscape in ways that limit innovation and inclusion:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Centralization</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Without cost‑effective direct payment rails, creators and small businesses are forced into platforms that bundle transactions, take large fees, and control access to audiences.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Subscriptions</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The impracticality of per‑use billing forces consumers into subscription models, paying for more than they actually use.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Bottlenecks</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Entire categories of applications, such as real‑time metering, per‑unit API calls, or machine‑to‑machine commerce, remain underdeveloped because payment systems cannot handle the volume or economics they require.</span>
</div>
</div>
</div>
</div>
</div>

#### Moony's Advantage

Moony's architecture is purpose‑built to make micropayments economically viable at global scale. The token's extreme divisibility allows transactions measured in fractions of a cent, ideal for tipping, micro‑rewards, metered services, and other fine‑grained use cases. 

Every transfer settles on the Solana blockchain with trust‑minimized execution and irreversible finality, eliminating reliance on banks, processors, or escrow services. Solana's high‑throughput design keeps fees to a fraction of a cent and confirms transactions in seconds, free from banking hours or remittance corridors. Low fees are the foundation that make real‑time, granular monetization possible, enabling sustainable small‑value transfers that expand markets, drive innovation, and open the digital economy to all.

#### Potential Applications

Moony's micropayment capabilities enable a wide range of practical and programmable economic models:

Micropayments with Moony open the door to innovative digital and physical interactions, including:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Pay-Per-Use</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Unlock content, articles, videos, or AI tools for pennies without recurring subscriptions.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">In-App Purchase</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Purchase digital items, upgrades, or event access without credit card integrations.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Streaming Payments</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Transfer value continuously in real time for services like media consumption or cloud computing.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">M2M Commerce</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Automate exchange of bandwidth, energy, or data in precise micro‑increments.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Direct Support</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Send low‑fee micro‑tips to artists, streamers, or writers without intermediary platform fees.</span>
</div>
</div>
</div>
</div>
</div>

By combining scarce, divisible digital cash with low‑cost, high‑throughput settlement, Moony turns micropayments from an abstract ideal into a practical, composable building block for a decentralized, internet‑native economy.

### Capital Markets

![Placeholder](/placeholder-color.png)

Decentralized Finance (DeFi) represents the foundation of internet capital markets, a global financial system built on open, programmable infrastructure. In this environment, lending, borrowing, trading, and yield generation occur directly through smart contracts without the need for banks or traditional intermediaries. 

Rather than trusting institutions, participants rely on transparent, verifiable code. Value moves globally, at all hours, without gatekeepers. This shift is not just technological. Internet capital markets mark a cultural transformation, offering an open alternative to legacy finance, driven by code, capital, and community.

#### Why It Matters

Traditional finance relies on layers of centralized institutions such as banks, clearinghouses, and brokers that enforce access restrictions, add costs, and slow down settlement.

This system creates multiple frictions:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Limited access</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Many people globally cannot open bank accounts or meet minimum requirements for financial services.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Delay and inefficiency</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Cross‑border settlements and loans can take days, incurring high fees along the way.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Opacity and custodial risk</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Users must trust institutions to remain solvent, secure, and fair.</span>
</div>
</div>
</div>
</div>
</div>

DeFi eliminates these barriers by replacing human discretion with transparent, automated smart contracts. Anyone with an internet connection can access financial services, and asset flows can be audited, verified, and settled in real time.

For Moony, DeFi is not an optional side use case, it is the natural extension of its core ethos: a trust‑minimized, publicly verifiable, and composable asset that empowers global users without intermediaries.

#### Moony's Advantage

Moony possesses three core attributes that make it a natural fit for decentralized finance:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Composable and Permissionless</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Moony can integrate with any Solana‑based DeFi protocol without approvals or gatekeeping, allowing it to serve as collateral, liquidity in AMMs/DEXs, or a medium of exchange. Each new integration compounds Moony's utility and strengthens the network effect.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Transparent and Predictable Supply</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">With a fixed supply of 21,000,000 and a fully on‑chain reserve contract, Moony provides deterministic issuance and verifiable scarcity. This reduces collateral risk, avoids inflationary surprises, and builds confidence in Moony as a trust‑minimized, reliable asset.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">SPL Standard and Interoperability</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">As an SPL token, Moony is natively compatible with the Solana DeFi ecosystem. It can move seamlessly between wallets, DEXs, lending protocols, and automated strategies, enabling fluid composability and frictionless circulation across the network.</span>
</div>
</div>
</div>
</div>
</div>

Together, these properties make Moony a credible building block for DeFi, ready to flow through lending markets, liquidity pools, and programmable financial products without reliance on any single platform.

#### Potential Applications

Moony's utility in DeFi will expand organically as adoption grows and protocols integrate the asset. 

Potential use cases include:

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Liquidity Pools and Swaps</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">MNY can be deposited into automated market makers (AMMs) or decentralized exchanges (DEXs), allowing permissionless swaps and contributing to price discovery and market depth.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Collateralized Lending and Borrowing</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Holders can supply Moony as collateral to borrow stablecoins or other assets. This allows users to unlock liquidity without selling, while protocols gain access to a scarce, verifiable asset.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Yield Opportunities and Incentive Programs</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">Liquidity mining, staking rewards, or protocol incentives can encourage Moony holders to actively participate in ecosystem growth, reinforcing both liquidity and visibility.</span>
</div>
</div>
</div>
</div>
</div>

These use cases illustrate how one asset can power multiple layers of the financial stack, enabling both basic interactions and complex, high‑order products.

---

MNY's integration into DeFi is a natural expression of its design principles. By combining verifiable scarcity, SPL‑standard interoperability, and permissionless integration, MNY has the potential to become a durable building block for decentralized finance. Each DeFi integration strengthens the ecosystem, extending MNY's role from peer‑to‑peer digital cash into a global, self‑sustaining network for internet capital markets.

## Moony Network

![Placeholder](/placeholder-color.png)

The Moony network exists as a decentralized, permissionless system shaped through the independent participation of a global community. Its growth, resilience, and direction do not arise from any single organization, coordinating body, or governing authority, but from the collective actions of individuals and groups who choose to build with it, use it, teach it, integrate it, and exchange with it.

Moony is designed as open digital infrastructure. Participation is not gated by identity, status, or approval. Innovation is permissionless. Communities form organically around shared needs, shared values, and shared utility. As the network expands through real world use and independent contribution, its underlying asset reflects that expanding adoption. In this way, Moony aligns individual initiative with collective value creation without relying on centralized management or control.

This structure is what allows Moony to function as a true digital public good. The network is not operated as a corporate product or directed through top-down coordination. Instead, it evolves through open collaboration, distributed ownership, and permissionless participation across a wide range of stakeholders.

Moony is a public good, sustained and advanced by communities that choose to engage with it. While deployed by Moony Labs, LLC., the protocol operates independently without any central control or governance. Its evolution is shaped not by central mandates, but by collective action on a shared foundation. Developers may integrate Moony into applications and infrastructure. Creators may produce educational or cultural content. Merchants may adopt it as a medium of exchange. New organizations may form to expand awareness and accessibility. Every contribution, whether technical, educational, economic, or cultural, extends Moony's reach and resilience.

### Stakeholders {#stakeholders}

The Moony network is composed of many independent participants who engage with the protocol at different layers and in different ways. These stakeholders are not organized under a central authority and do not operate under unified direction. Each participant engages according to their own incentives, interests, and capacities within an open, permissionless system.

Some stakeholders contribute through technical development and infrastructure. Others build applications, integrate Moony into products and services, create educational resources, form communities, develop cultural narratives, or simply use Moony as a medium of exchange. These roles are not fixed. They often overlap and evolve as the network grows and new forms of participation emerge.

No single stakeholder group holds inherent control over the protocol. Influence within the network arises from adoption, contribution, and voluntary coordination rather than ownership, hierarchy, or governance authority. This structure allows the Moony network to remain open-ended, censorship-resistant, and resilient across changing conditions.

### Participation

The Moony network grows organically rather than administratively. Network expansion is not driven by hiring, appointments, corporate strategy, or centrally planned programs. It emerges from the alignment of individual incentives with shared infrastructure. When people find Moony useful, they build around it. When they build around it, others adopt it. When others adopt it, new use cases appear. This feedback loop is circular, not hierarchical.

Economic participation flows naturally from stakeholder contributions without requiring coordinated management. As Moony is used, integrated, and circulated, liquidity deepens, utility expands, and real-world demand emerges through voluntary exchange. No single group directs this process. It is the aggregate result of many independent decisions interacting through the same open protocol.

In this sense, Moony functions less like a platform operated by an organization and more like a shared digital environment. It is not something users are onboarded into. It is something participants step into, shape through use, and carry forward through contribution. The network does not ask for belief in a governing entity. It operates on open participation, transparent rules, and the compounding effects of independent action.

#### Network Contribution

The Moony network is not composed of fixed roles, titles, or permissions. Instead, it is shaped through open, overlapping modes of participation. Individuals and organizations engage with the system in different ways depending on their skills, intent, and context. A single participant may be a user, a developer, a merchant, and a community organizer over the lifetime of their involvement. These identities are not assigned. They emerge naturally through action.

There is no formal boundary between who is considered a "user" and who is considered a "builder." Anyone can move fluidly between modes of participation as the network evolves and as their relationship to the system changes. This structural openness is foundational to Moony's decentralization. The network does not grow through enrollment, designation, or appointment. It grows through voluntary engagement.

<div class="formula-card">
<div class="formula-header">
<h4>Forms of Participation</h4>
</div>
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Transact</span>
<div class="constant-value-wrapper">
<span class="constant-value">Sending and receiving Moony in peer to peer exchange, daily payments, tipping, remittances, or micro transactions between individuals and services.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Build</span>
<div class="constant-value-wrapper">
<span class="constant-value">Developing wallets, applications, integrations, developer tools, analytics, and supporting infrastructure that increases usability, security, and reach.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Integrate</span>
<div class="constant-value-wrapper">
<span class="constant-value">Adding Moony as a supported currency within platforms, marketplaces, payment flows, content systems, games, and financial services.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Educate</span>
<div class="constant-value-wrapper">
<span class="constant-value">Producing documentation, tutorials, guides, events, research, and learning resources that help others understand, adopt, and safely use Moony.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Organize</span>
<div class="constant-value-wrapper">
<span class="constant-value">Forming communities, regional groups, online forums, and thematic networks that coordinate local adoption, outreach, and support.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item">
<span class="constant-label">Express</span>
<div class="constant-value-wrapper">
<span class="constant-value">Shaping culture through storytelling, visual design, media, art, memes, and narratives that give Moony social meaning and shared identity.</span>
</div>
</div>
</div>
</div>
</div>

Each of these actions directly strengthens the network. No approval is required to participate. There is no onboarding authority, no application process, and no centralized gatekeeper. Contribution is defined by action, not by credential, status, or affiliation.

#### Incentive Alignment

Stakeholders benefit from increasing adoption of the Moony network because it drives demand for the underlying asset. As more participants use, integrate, and build with Moony, the network's utility expands, liquidity deepens, and real-world demand grows. This creates a natural incentive structure where stakeholders' individual contributions align with collective network growth. Developers who build integrations see increased usage of their products. Merchants who accept Moony benefit from a growing user base. Users who hold Moony benefit from expanding utility and network effects. This profit mechanism, built into the protocol's economic design, coordinates stakeholder action without requiring centralized direction or governance.

The next step belongs to the individual. Through code, conversation, commerce, or community, each action strengthens the network and reinforces Moony's role as a decentralized, internet native form of digital cash.

### Resources {#resources}

![Placeholder](/placeholder-color.png)

#### Brand Identity {#brand-identity}

Moony's visual identity is designed to be simple, expressive, and open, a reflection of its role as a decentralized public asset that belongs to everyone. This page defines the core name, symbol, and usage conventions that ensure Moony is represented consistently across applications, communications, and interfaces.

The name Moony blends two ideas: moon and money. It draws from the playful, aspirational language of internet culture, where assets are said to "go to the moon", while also pointing directly to Moony's function as a new form of digital value.

The name is intentionally simple, memorable, and shareable. Its memetic resonance makes it easy to adopt in conversation, while its grounding in principled, open value infrastructure signals credibility and long‑term vision. Moony is as much a cultural asset as it is a technical one.

#### Typography

The Moony wordmark uses the typeface Blanquotey, chosen for its clean geometry, high legibility, and modern character. Its lowercase styling conveys approachability and simplicity, aligning with Moony's open and memetic ethos while preserving institutional clarity. This typeface should be used when reproducing the Moony logotype or developing visual assets that reference the brand name in stylized form.

#### Icon Design

Moony's icon is deliberately minimal, yet layered with symbolic meaning, crafted to express both functional clarity and conceptual depth across any medium.

<div class="formula-card">
<div class="formula-content">
<div class="curve-constants-grid">
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Moon Over Horizon</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">The central form evokes a moon rising above a horizon, an allusion to Moony's namesake and growth. The horizontal line grounds the symbol, suggesting stability and foundational integrity, while the ascending shape implies forward motion and open-ended potential.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Binary Reference</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">When rotated, the icon resembles a "1" and "0," subtly invoking binary code. This visual echo underscores Moony's digital origin and inherent programmability, positioning it as a native asset of internet capital markets.</span>
</div>
</div>
<div class="curve-constant-item market-dynamics-item" style="flex-direction: column; align-items: flex-start;">
<div style="font-weight: 600; font-size: 1rem; color: #1e293b; margin-bottom: 0.75rem; width: 100%;">Market Semantics</div>
<div class="constant-value-wrapper" style="width: 100%;">
<span class="constant-value" style="text-align: justify; display: block;">In trading contexts, the icon can be interpreted as denoting "over," "above," or directional movement, suggesting upward price momentum along Moony's bonding curve. This reflects its dynamic economic model, where adoption, integration, and transaction flow drive emergent market value.</span>
</div>
</div>
</div>
</div>
</div>

The symbol is optimized for clarity at small sizes, performing reliably in both light and dark themes. Its simplicity ensures broad adaptability, while its layered references reinforce Moony's identity as both a technical primitive and an enduring digital brand.

#### Usage Guidelines

Moony can be represented using the Unicode character ⍜ (U+235C "APL Functional Symbol Circle Underbar") to indicate quantities, similar to how the $ symbol denotes U.S. dollars.

**Usage Examples:**

* ⍜100 for one hundred Moony tokens
* ⍜0.5 for half a Moony token
* "Tip them ⍜2 for the post"
* "The pool contains ⍜8,250"

#### Download Logos

These resources are provided to make it simple for developers, designers, and community members to integrate Moony's identity into wallets, applications, media, and promotional materials without friction.

::: tip click-here-tip
[Download Moony Logo Files – Black & White (ZIP)](/moony-logos.zip)
:::

#### Deployment

The Moony protocol was deployed by Moony Labs, LLC. to the Solana blockchain using infrastructure developed by Flipcash Inc. The Reserve Contract is an immutable smart contract that governs all token issuance, redemption, and pricing according to deterministic rules encoded at deployment.

**Deployment Parameters:**
- **Maximum Supply:** 21,000,000 MNY tokens (immutable cap)
- **Bonding Curve Type:** Continuous Exponential Function
- **Curve Constants:**
  - Constant a: 11400.230149967394933471
  - Constant b: 0.000000877175273521
  - Constant c: 0.000000877175273521
- **Price Boundaries:** $0.01 USDF (near zero supply) to $1,000,000 USDF (at maximum supply)
- **Fee Structure:** 0% on purchases, 1% on redemptions

**Contract Code:**
The Reserve Contract architecture was developed by Flipcash Inc. and is part of the Code Payments Open Code Protocol (OCP). The contract code is maintained in the Code Payments repositories:
- [OCP Server Repository](https://github.com/code-payments/ocp-server)
- [Contract Configuration](https://github.com/code-payments/ocp-server/blob/main/pkg/code/config/config.go)

**Deployment Verification:**
All contract addresses and deployment information are synced from the Code Payments OCP configuration. The deployment is fully on-chain and can be verified on the Solana blockchain through the contract addresses displayed in the documentation.

**Immutable Design:**
Once deployed, the Reserve Contract cannot be altered, upgraded, or modified. There are no admin keys, upgrade authorities, or governance mechanisms. The protocol operates autonomously according to its immutable smart contract logic.

#### Getting Started

Developers can begin integrating Moony by exploring the Solana ecosystem, understanding SPL token standards, and leveraging existing documentation and community resources. The permissionless nature of Moony means there are no gatekeepers or approval processes - just open innovation and collaboration.

---

::: warning
This documentation is for informational purposes only and does not constitute investment advice. Moony is a decentralized digital asset issued and governed by an immutable smart contract deployed on the Solana blockchain by Moony Labs, LLC. The protocol operates autonomously and cannot be altered or controlled by any party, including Moony Labs, LLC. No company or formal organization is responsible for Moony's performance or value. Participants engage with the Moony protocol at their own discretion and are encouraged to conduct independent research and seek professional advice before interacting with blockchain-based systems.
:::