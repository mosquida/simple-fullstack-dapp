# Simple FullStack DApp

This repository aims to show how to connect and interact with blockchain contracts on Polygon Network with javascript frontend web app.

# dapp-contracts

This project demonstrates the basic use of Hardhat. It contains a Message Contract with get and set function, a test file for it as well as a deployment script for it,

Contract ABI's are located inside artifacts folders after compiling the contracts for frontend web app dependency.

Try running some of the following tasks:

```js
// Compile solidty contracts, produces an artifacts
npx hardhat compile

// Run contracts test files
npx hardhat test

// Start local blockchain
npx hardhat node

// Deploy the contracts on local blockchain
npx hardhat run scripts/deploy.js --network localhost

// Deploy the contracts on mumbai(polygon testnet) blockchain
npx hardhat run scripts/deploy.js --network mumbai
```

### Deployed Contract Address

View Message Contract at Polygonscan explorer: [0xf7AC055eA1628c6ACb34753437d364265A017a98](https://mumbai.polygonscan.com/address/0xf7AC055eA1628c6ACb34753437d364265A017a98)

# dapp-webapp

This project built with Next.js for frontend consuming and interacting with the functions at the deployed smart contracts on blockchain

To run the development server:

```bash
npm run dev
```

To build the app:

```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployed App URL

Visit [https://simple-fullstack-dapp-production.up.railway.app/](https://simple-fullstack-dapp-production.up.railway.app/) to test tha app in production
