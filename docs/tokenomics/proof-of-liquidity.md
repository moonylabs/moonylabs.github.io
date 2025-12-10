---
title: Proof of Liquidity
---

<div class="justify">

# Proof of Liquidity

Moony uses a distribution mechanism called Proof of Liquidity (PoL), implemented entirely through its immutable on-chain reserve contract. Under this model, new tokens enter circulation exclusively in exchange for verifiable on‑chain capital, ensuring issuance is transparent, market‑driven, and free from discretionary control.

Each Moony token is issued in exchange for USDF, a dollar-pegged stablecoin issued by Flipcash Inc. This pairing provides familiar dollar‑based valuation and lowers the entry barrier for new participants. 

The Moony reserve contract holds all USDF deposits as onchain liquidity, enabling redemptions and anchoring supply in verifiable value. Token pricing is determined by a bonding curve, a deterministic function that increases cost as more tokens are unlocked, ensuring that issuance is transparent, demand-driven, and algorithmically defined.

## Key Properties

- **Permissionless:** Anyone can unlock Moony by interacting directly with the reserve contract, with no approvals or intermediaries required.
- **Proof of Liquidity:** Capital used to unlock Moony remains in the reserve, supporting redemptions and ensuring liquidity to support the market as it grows.
- **Bonding Curve:** Token pricing is governed by a deterministic bonding curve, meaning the price increases as more tokens are unlocked. This ensures that supply issuance is aligned with real demand.

## Capital-Based Mining

Moony’s Proof of Liquidity (PoL) mechanism offers a capital‑driven alternative to traditional Proof‑of‑Work (PoW) distribution models. Instead of consuming vast amounts of energy through specialized hardware to compete for block rewards, participants unlock Moony by depositing USDF directly into the on‑chain Reserve Contract. This shifts issuance from energy‑intensive computation to verifiable, capital‑based participation.

This model redefines mining as a constructive economic activity rather than an extractive one. Each deposit not only mints new Moony but also strengthens the network by adding permanent, redeemable on‑chain liquidity. Where traditional mining externalizes environmental costs, PoL compounds value inside the ecosystem, aligning participant incentives with collective benefit.

By combining PoL with Solana’s carbon‑efficient infrastructure, Moony achieves a distribution model that is both sustainable and economically reinforcing. Every minted token leaves lasting value in the network, deepens market liquidity, and ensures that growth reflects genuine demand, creating a self‑sustaining framework for the issuance of scarce digital assets.

This process is:

- **Permissionless**: Anyone can participate as demand arises, without permission or centralized control.
- **Economically Constructive**: All capital remains in the Reserve Contract, forming the liquidity backbone of Moony’s economy.
- **Energy Efficient**: By replacing energy-intensive computation with on-chain capital deposits, PoL reduces environmental impact and complements Solana’s low-carbon infrastructure.

## Fee Model

Acquiring Moony directly from the Reserve Contract carries no fee, enabling cost‑efficient entry into the ecosystem. Redemptions, selling Moony back to the Reserve Contract for USDF, incur a 1% fee. 

This mechanism serves two purposes:

- **Security**: The fee mitigates the risk of sandwich attacks, a form of front‑running in which automated bots attempt to profit from predictable price movements by inserting transactions around a user’s trade.
- **Revenue**: Fee proceeds are directed to Flipcash Inc., the developer of the Reserve Contract’s architecture. While Moony was launched as an independent protocol, it leverages this infrastructure to facilitate permissionless access.

The sell‑side fee applies only to redemptions executed directly against the Reserve Contract. Peer‑to‑peer transfers and secondary market transactions, whether on centralized or decentralized exchanges, are not subject to this fee.

</div>