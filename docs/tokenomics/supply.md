---
title: Fixed Supply
description: Understanding Moony's fixed supply mechanism and token economics
---

# Fixed Supply 

Moony has a fixed, immutable total supply of 21 million tokens, enforced entirely by smart contract logic on the Solana blockchain. This hard cap cannot be changed — not by the project initiator, not by the Moony Foundation, and not by any future form of governance. It is permanently encoded, forming the backbone of Moony’s monetary architecture.

This design mirrors Bitcoin’s fixed issuance model but adapts it to a permissionless, on-chain environment. By enforcing scarcity through smart contracts, Moony ensures that no central authority can inflate the supply or manipulate issuance schedules. The result is a form of programmable digital money with predictable economic behavior and long-term credibility.

## Why It Matters

In a world of inflationary fiat currencies and governance-controlled tokens, fixed-supply assets represent a paradigm shift. Moony’s 21 million cap is not a marketing gimmick, it is a commitment to preserving purchasing power, enabling long-term savings, and building a universal unit of account that does not depend on institutional trust.

Supply certainty creates a clear economic asymmetry: demand can grow with utility and adoption, but supply cannot. This imbalance creates the conditions for sustainable value appreciation, reinforcing Moony’s role as a sound monetary primitive. Like gold or Bitcoin, Moony cannot be printed or diluted, offering participants a reliable alternative to assets subject to discretionary monetary policy.

###

Key Principles:

- **Total Supply:** Fixed at 21,000,000 Moony tokens

- **Immutability:** Enforced by immutable smart contracts

- **Governance-proof:** No mechanism to raise or bypass the cap

- **Transparency:** All supply data visible and verifiable on-chain

## Distribution

New Moony tokens enter circulation through deposits into a smart contract Reserve. All 21,000,000 tokens are minted during contract initialization and held in a locked state. Participants unlock tokens by depositing USDF, and the bonding curve determines the exchange rate. Every token unlocked leaves an equivalent amount of value inside the network, all liquidity remains in the Reserve, backing the circulating supply and enabling redemption.

This is not a pre-mine or a developer-controlled distribution. There are no team allocations, no venture capital tranches, and no centralized treasury. The entire supply is pre-minted during initialization and remains locked until unlocked by participants willing to contribute capital to the protocol.

::: tip click-here-tip
[Learn more about the Reserve Contract](/tokenomics/reserve-contract)
:::

## Divisibility

While Moony is scarce at the macro level, it is highly divisible at the unit level. Each Moony token can be split into 100 million sub-units, allowing for precise accounting and granular transactions across a wide range of use cases, from peer-to-peer tips to fractionalized commerce and streaming payments.

These smallest units are called Bits.

- **1 Moony = 100,000,000 Bits**

- **1 Bit = 0.00000001 Moony**

The term "Bit" echoes both the modularity of digital computation and the or-bital symbolism embedded in the Moony brand. It provides a memetically expressive and user-friendly way to talk about small-value interactions.

### Why It Matters

Bits enhance Moony’s usability across economic contexts. They make small-value transactions intuitive, improve wallet display logic, and facilitate broader cultural adoption. Instead of transacting in awkward decimals, users can think and communicate in whole-number denominations.

Use Case Examples:

- **A tip of ⍜0.00004321 becomes 4,321 Bits**

- **A stream can charge 100 Bits per minute**

- **Users can say “send me 500 Bits” instead of ⍜0.00000500**

These representations are especially valuable in consumer applications, mobile apps, and cultural contexts where ease of understanding matters. Every Moony and every Bit is fully fungible. There are no token classes, no priority unlocking, and no hidden privileges. Whether unlocked on day one or year ten, each token carries equal weight and value. This universality supports Moony’s role as a neutral, protocol-level asset across the decentralized economy.

## Visual Representation

The Unicode symbol ⍜ (U+235C) is used to represent Moony units in written communication, UI design, and user interfaces. For Bits, values may be expressed either with decimal precision or using full integer form depending on context.

Display Conventions:

- **⍜1 = 100,000,000 Bits**

- **⍜0.015 = 1,500,000 Bits**

= **500 Bits = ⍜0.00000500**

These conventions support a dual-layer display system, allowing wallets and applications to adjust based on the user’s context and needs. Developers are encouraged to adopt Bits in UI layers where precision, readability, or familiarity would benefit the user.

### Summary 

Moony’s fixed-supply design anchors it as a sound, decentralized monetary asset. Its 21 million token limit is permanent, enforceable, and independent of centralized discretion. By introducing Bits as an intuitive sub-unit, Moony combines scarcity with precision, making it both a reliable store of value and a flexible medium for daily use.

In this structure, monetary credibility and usability coexist, enabling Moony to function as a durable economic primitive for internet-native commerce.

---