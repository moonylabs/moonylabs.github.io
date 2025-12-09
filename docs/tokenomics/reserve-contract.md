# Reserve Contract

The Reserve Contract is a fully onchain smart contract deployed on the Solana blockchain that governs the issuance, redemption, and pricing of Moony. It serves as the central liquidity and distribution mechanism for the entire token supply.

When a user deposits USDF (a dollar-backed stablecoin issued by Flipcash Inc.), the Reserve Contract calculates a price using a deterministic bonding curve. It then mints Moony tokens and transfers them to the user while holding the USDF onchain as protocol liquidity. This ensures that Moony’s circulating supply is always backed by verifiable capital.

To sell Moony, users send their tokens back to the Reserve. The contract returns USDF to the user at the bonding curve’s current redemption rate. This two-way interaction allows users to enter and exit the system at transparent, algorithmically defined prices without requiring any centralized market makers or discretionary approvals.

This design architecture removes allocation discretion and centralized control entirely. Instead, the Reserve Contract replaces those dynamics with transparent, rules-based issuance that is immutable, permissionless, and fully auditable onchain.

## Core Mechanisms

- **Proof of Liquidity:** Moony adopts a Proof of Liquidity (PoL) model, where all USDF used to mint tokens remains locked in the Reserve Contract as onchain collateral. This capital base enables trustless redemptions and grows organically with demand. The Reserve never loans, moves, or rehypothecates funds, every USDF remains verifiably onchain.

::: tip click-here-tip
[Learn more about the Proof of Liquidity model](/tokenomics/proof-of-liquidity)
:::

- **Bonding Curve:** Moony’s price is governed by a deterministic bonding curve embedded in the contract. As more tokens are minted and enter circulation, the marginal price to mint increases. When Moony is redeemed and burned, the curve dynamically adjusts downward. This creates a transparent, non-manipulable pricing mechanism tied directly to supply.

::: tip click-here-tip
[Learn more about the reserve's bonding curve](/tokenomics/bonding-curve)
:::

These mechanisms make the Reserve Contract the core of Moony’s architecture: a fully autonomous, immutable, and composable protocol for capital-efficient distribution and liquidity.


## Design Principles

- **Immutable:** The Reserve Contract cannot be altered once deployed. There are no admin keys, upgrade paths, or special permissions. The issuance, pricing, and redemption logic is permanently encoded at the smart contract level, ensuring no future changes or governance actions can override it.

- **Permissionless:** Anyone can interact with the Reserve Contract directly from their own wallet. No intermediaries, KYC, whitelists, or gatekeepers are required. The system is open to individuals, developers, protocols, and platforms alike.

- **Non-custodial:** The Reserve Contract never takes custody of user assets in the traditional sense. All interactions are contract-to-wallet: users deposit USDF directly and receive Moony, or return Moony to receive USDF. No third party holds or manages user funds.

- **Transparent:** All supply, liquidity, pricing, and contract interactions are recorded on the Solana blockchain. This makes the entire system publicly auditable and provable in real time.


## Flipcash Infrastructure

Moony launched using infrastructure developed by Flipcash, Inc., an independent third-party company. Flipcash has no control over Moony’s issuance, supply, or pricing; those parameters are governed entirely by the Reserve Contract.

At launch, Flipcash provides the first public front end for interacting with the Reserve. Through its mobile app, users can seamlessly convert between USDF and Moony, and send peer-to-peer payments using Moony as digital cash.

### Flipcash Enables Users To:

- **Access Reserve:** Buy and sell Moony through an intuitive mobile interface.
- **Send Payments:** Transact freely with Moony across devices, using digital cash or links.

::: tip click-here-tip
[Download Flipcash Mobile Application](https://www.flipcash.com)
:::

Moony is not limited to any platform. The Reserve Contract is open to all developers and integrators, and Moony can be used across any app, wallet, or protocol that supports Solana. This ensures maximum composability, interoperability, and future-proof adoption.