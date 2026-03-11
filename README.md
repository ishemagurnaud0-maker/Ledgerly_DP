# 🌐 Ledgerly — Ethereum Cross-Border Transaction dApp

![Ethereum](https://img.shields.io/badge/Ethereum-Sepolia-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)
![React](https://img.shields.io/badge/React-TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Solidity](https://img.shields.io/badge/Solidity-Smart%20Contract-363636?style=for-the-badge&logo=solidity&logoColor=white)
![Ethers.js](https://img.shields.io/badge/Ethers.js-v6-2535a0?style=for-the-badge)
![Hardhat](https://img.shields.io/badge/Hardhat-Deploy-f7dc6f?style=for-the-badge)

> A decentralized application (dApp) that allows users to send cryptocurrency across the world seamlessly through the Ethereum blockchain network.

---

## 📸 Preview

![alt text](<clients/public/Screenshot 2026-03-11 154510.png>)

> _Connect your MetaMask wallet, send ETH globally, and track your transactions in real time._

---

## ✨ Features

- 🔗 **MetaMask Wallet Integration** — Connect and disconnect your wallet seamlessly
- 💸 **Send ETH Globally** — Transfer Ethereum to any address worldwide
- 📜 **Transaction History** — View your latest on-chain transactions with timestamps
- 🎯 **GIF Keywords** — Attach a keyword to each transaction to generate a themed GIF
- 💬 **Custom Messages** — Add a personal message to every transaction
- ⚡ **Real-time Loading State** — Live feedback while transactions are being mined
- 🔒 **Input Validation** — Guards against invalid addresses, empty amounts, and insufficient balance
- 🌐 **Sepolia Testnet** — Deployed and tested on Ethereum's Sepolia test network

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React + TypeScript |
| Styling | Tailwind CSS |
| Blockchain Interaction | Ethers.js v6 |
| Smart Contract | Solidity |
| Development & Deployment | Hardhat |
| Network | Ethereum Sepolia Testnet |
| Wallet | MetaMask |

---

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Transactions.tsx     # Transaction history display
│   │   │   ├── TransactionCard.tsx  # Individual transaction card
│   │   │   └── Loader.tsx           # Loading spinner
│   │   ├── context/
│   │   │   └── TransactionConnect.tsx  # Global state & blockchain logic
│   │   ├── hooks/
│   │   │   └── useFetch.ts          # Custom hook for GIF fetching
│   │   └── utils/
│   │       └── constants.ts         # Contract address & ABI
├── smart_contract/
│   ├── contracts/
│   │   └── Transactions.sol         # Solidity smart contract
│   ├── scripts/
│   │   └── deploy.js                # Deployment script
│   └── hardhat.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [MetaMask](https://metamask.io/) browser extension
- Sepolia testnet ETH (get some from a [faucet](https://sepoliafaucet.com/))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ishemagurnaud0-maker/ledgerly.git
cd ledgerly
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install smart contract dependencies**
```bash
cd smart_contract
npm install
```

4. **Start the development server**
```bash
cd client
npm run dev
```

---

## 📜 Smart Contract

The smart contract is deployed on the **Ethereum Sepolia Testnet**.

**Contract Address:** `0xAc015A543dA0ecD7268e0BFE020f8EBeB3741312`

**Key Functions:**

| Function | Description |
|----------|-------------|
| `addToBlockchain()` | Stores a new transaction on-chain |
| `getAllTransactions()` | Returns all stored transactions |
| `getLatestTransaction()` | Returns the most recent transaction |
| `getTransactionCount()` | Returns total number of transactions |

**Verify on Etherscan:**
[View Contract on Sepolia Etherscan](https://sepolia.etherscan.io/address/0xAc015A543dA0ecD7268e0BFE020f8EBeB3741312)

---

## 🔧 Deploying the Smart Contract

```bash
cd smart_contract

# Compile the contract
npx hardhat compile

# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia
```

After deploying, copy the new contract address and ABI into `client/src/utils/constants.ts`.

---

## 💡 How It Works

1. **Connect Wallet** — User connects their MetaMask wallet to the dApp
2. **Fill Transaction Form** — Enter recipient address, ETH amount, keyword, and message
3. **Send Transaction** — MetaMask prompts for confirmation; ETH is sent via `eth_sendTransaction`
4. **Store on Chain** — Transaction details are stored on the blockchain via `addToBlockchain()`
5. **View History** — All transactions are fetched and displayed as cards with GIFs and timestamps

---

## ⚠️ Important Notes

- This dApp runs on the **Sepolia testnet** — do not send real ETH
- You need MetaMask installed to use this application
- Make sure your MetaMask is set to the **Sepolia network**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Ishema Gurnaud.

Built with 💪 and lots of debugging sessions.

> _"Shipped it. Bugs included, lessons learned."_