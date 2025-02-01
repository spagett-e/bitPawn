```markdown
# BitPawn ♟️⚡  
**Trustless Bitcoin Chess Wagering Platform**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Play PvP chess with Bitcoin wagers using 2-of-3 multisig escrow and Ethereum wallet authentication. No middlemen, no custody.

## ✨ Features
- **Provably Fair Games**: Verify every move via on-chain scripts
- **Non-Custodial Wagers**: 2-of-3 multisig with 24h timelock refunds
- **Web3 Auth**: Secure login with Ethereum wallets
- **Real-Time Gameplay**: WebSocket-powered chess with motion animations
- **Transparency Hub**: Audit scripts, verify transactions

## 🛠️ Tech Stack
- **Frontend**: React/Next.js + [motion.dev](https://motion.dev/)
- **Auth**: [viem](https://viem.sh/) + JWT cookies
- **Blockchain**: bitcoinjs-lib + mempool.space API
- **Infra**: DigitalOcean Kubernetes + Redis/PostgreSQL
- **Status**: [Phare.io](https://phare.io/) monitoring

## 🚀 Quick Start
1. Clone repo:
   ```bash
   git clone https://github.com/yourusername/bitpawn.git
   cd bitpawn
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set environment variables (`.env.local`):
   ```env
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_id
   REDIS_URL=your_redis_url
   BITCOIN_NETWORK=testnet
   ```
4. Run dev server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment
```bash
docker build -t bitpawn .
docker-compose up -d
```
**Production**: Configured for DigitalOcean Kubernetes with GitHub Actions CI/CD

## 🔐 Environment Variables
| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ETH_RPC` | Ethereum RPC URL |
| `MULTISIG_PUBKEY` | App's multisig public key |
| `PHARE_STATUS_URL` | Phare.io status page URL |

## 🤝 Contributing
1. Fork repo
2. Create feature branch (`git checkout -b feature/foo`)
3. Commit changes (`git commit -am 'Add foo'`)
4. Push branch (`git push origin feature/foo`)
5. Open PR

## 📄 License
MIT © [Your Name] - See [LICENSE](LICENSE) for details

---

> **Warning**  
> Mainnet usage not recommended until security audit. Use testnet BTC only.
```

