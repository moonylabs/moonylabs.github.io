<div align="center">
  <img src="public/moony-logo.png" alt="Moony Logo" style="width: 100%; max-width: 100%;">
</div>

# Moony Documentation

> **🌐 [Visit moonylabs.com →](https://moonylabs.com)**

This repository contains the source code for the [Moony documentation site](https://moonylabs.com), built with [VitePress](https://vitepress.dev/).

## About Moony

**Moony (MNY)** is a decentralized digital asset deployed by **Moony Labs, LLC.** on the Solana blockchain. It enables permissionless peer-to-peer payments without intermediaries, governed entirely by an immutable smart contract.

- **Fixed Supply:** 21,000,000 tokens, all pre-minted during contract initialization
- **Proof of Liquidity:** Tokens are unlocked through USDF deposits, with all capital retained as on-chain liquidity
- **Bonding Curve:** Deterministic pricing mechanism that increases cost as more tokens are unlocked
- **Permissionless:** Anyone can unlock or redeem Moony directly through the Reserve Contract

## Documentation

📖 **[Read the full documentation →](https://moonylabs.com/docs)**

The documentation covers:

- **Moony Protocol** - Core protocol architecture and design principles
- **Tokenomics** - Supply, bonding curve, reserve contract, and proof of liquidity
- **Use Cases** - P2P payments, micropayments, DeFi integration, and more
- **Moony Network** - Stakeholders, coordination, and community resources

## Quick Links

- **🌐 Main Site:** [moonylabs.com](https://moonylabs.com)
- **📚 Documentation:** [moonylabs.com/docs](https://moonylabs.com/docs)
- **💻 GitHub Organization:** [github.com/moonylabs](https://github.com/moonylabs)

## Development

This site is built with:

- [VitePress](https://vitepress.dev/) - Static site generator
- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [KaTeX](https://katex.org/) - Math typesetting
- Deployed to [GitHub Pages](https://pages.github.com/)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Repository Structure

```
docs/
├── .vitepress/          # VitePress configuration
│   ├── config.js       # Site configuration
│   └── theme/          # Custom theme components
├── docs.md             # Main documentation content
├── getting-started.md  # Getting started guide
├── tokenomics/         # Tokenomics documentation
├── use-cases/          # Use case documentation
├── resources/          # Community and branding resources
└── public/             # Static assets
```

## License

This documentation is provided for informational purposes only. Moony is a decentralized digital asset governed by immutable smart contracts deployed on the Solana blockchain.

---

**Built by [Moony Labs, LLC.](https://moonylabs.com)** | [View on GitHub](https://github.com/moonylabs/moonylabs.github.io)
